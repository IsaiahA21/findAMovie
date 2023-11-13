<!-- I want to write 4 movie json objects -->
<script lang="ts">
	
  import { Engine, functionCreateDatatable, Pagination, RowsPerPage, Search, Sort } from 'svelte-datatables-net';
  import { onMount } from 'svelte';

  type movieObject = {
    id: number;
    title: string;
    original_title: string;
    description: string;
    posterURL: string;
    popularity: number;
  };
  let allMovies: movieObject[] =[];
  let apiRequestError = false;
  let isLoading = true;
  // define the datatable object. Its going to be populated by the API request
	let objectDataRow = functionCreateDatatable({
		parData: allMovies,
		parSearchableColumns: ['title', 'original_title'],
		parRowsPerPage: '5',
		parSortBy: 'popularity',
		parSortOrder: 'descending',
		parSearchString: ''
	});

  let API_Token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWM4NjBiZTZiNTVjYzQwZjQyNjM1NWFiZWMyODgwYiIsInN1YiI6IjY1NGU4ZDk5NDFhNTYxMzM2OTNkOGE5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QLiPjR0mQ-PsowFeNcNMiRvhDQ8N-3PLZJnPXtCnKvA";
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_Token}`
  }
};

onMount(async () => {
  try {
    let response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
    let data = await response.json();

    if (data.success === false) {
      // API request was unsuccessful
      apiRequestError = true;
      console.error("Invalid API key: You must be granted a valid key.");
    } else {
      // API request was successful, replace allMovies with the data
      allMovies = mapToObject(data.results as any[]);
      console.log(allMovies);
      isLoading = false;
      // Wait for allMovies to be populated before creating the datatable
       objectDataRow = functionCreateDatatable({
		   parData: allMovies,
		   parSearchableColumns: ['title', 'original_title'],
		   parRowsPerPage: '5',
       parSortBy: 'popularity',
		parSortOrder: 'descending',
		  parSearchString: ''
	    });
    }
  } catch (error) {
    // Handle other errors
    apiRequestError = true;
    console.error(error);
  }
});
  

function mapToObject(data: any[]) : movieObject[]  {
  return data.map((item: any) => (
    {
      id: item.id,
      title: item.title,
      original_title: item.original_title,
      description: item.overview,
      posterURL: item.poster_path,
      popularity: item.popularity,
    }
  ));
}

</script>
{#if apiRequestError}
<h1 style="color: red;text-align: center;">Invalid API key: You must be granted a valid key</h1>
{:else}
{#if isLoading}
  <h1 style="color: red;text-align: center;">Loading...</h1>
{:else}
	<Engine bind:propDatatable={objectDataRow} />

<p style="text-align: center;color: black;margin-bottom: 30px;" class="search">
  <span style="font-size: larger;">Search:</span>
  <Search class="searchFeature" bind:propDatatable={objectDataRow} propPlaceholder="Type here..." />
</p>

<div style="display: flex; justify-content: flex-end;margin-right: 10px;">
  <p>
    <Pagination bind:propDatatable={objectDataRow} propSize="medium" />
  </p>
  <p>
    <RowsPerPage bind:propDatatable={objectDataRow} >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </RowsPerPage>
  </p>
</div>
<nav class="list-nav">
  <ul>
    {#each objectDataRow.arrayData as movie}
      <li style="border-bottom: 2.5px solid black;">
        <a href="/movieDetail/${movie.id}">
          <div class="imgBox" style={`background-image: url(https://image.tmdb.org/t/p/w500/${movie.posterURL});`}></div>
          <div class="descBox">
          <p><span class="flex-auto">{movie.title}</span></p>
          <p style="color: gray;">{movie.description}</p>
        </div>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<div style="display: flex; justify-content: flex-end;margin-right: 10px;">
  <p>
    <Pagination bind:propDatatable={objectDataRow} propSize="medium" />
  </p>
  <p>
    <RowsPerPage bind:propDatatable={objectDataRow} >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </RowsPerPage>
  </p>
</div>
{/if}
  {/if}

<style>
	.imgBox {
		width: 150px;
		height: 150px;
		border: 2px solid black;
		border-radius: 30px;
		background-size: 150px;
	}

	span.flex-auto {
		font-size: larger;
		font-weight: bold;
	}
	.list-nav {
		margin-bottom: 30px;
	}
	.descBox {
		width: 80%;
		overflow: hidden;
		text-overflow: ellipsis;
		max-height: 100px; /* Adjust the number of lines accordingly */
	}
</style>
