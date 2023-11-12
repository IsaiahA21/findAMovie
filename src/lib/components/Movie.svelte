<!-- I want to write 4 movie json objects -->
<script lang="ts">
  import { Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';
	import { Engine, functionCreateDatatable, Pagination, RowsPerPage, Search, Sort } from 'svelte-datatables-net';

  let allMovies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      posterURL: "1E5baAaEse26fej7uHcjOgEE2t2.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      year: 2001,
    },
    {
      id: 2,
      title: "The Godfather",
      posterURL: "1E5baAaEse26fej7uHcjOgEE2t2.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      year: 2007,
    },
    {
      id: 3,
      title: "Inception",
      posterURL: "1E5baAaEse26fej7uHcjOgEE2t2.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      year: 2010,
    },
    {
      id: 4,
      title: "The Dark Knight",
      posterURL: "1E5baAaEse26fej7uHcjOgEE2t2.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      year: 2008,
    },
    {
      id: 5,
      title: "The Matrix",
      posterURL: "1E5baAaEse26fej7uHcjOgEE2t2.jpg",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      year: 1999,
    },
    {
      id: 6,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      posterURL: "1E5baAaEse26fej7uHcjOgEE2t2.jpg",
      description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      year: 2001,
    },
    {
      id: 7,
      title: "The Silence of the Lambs",
      posterURL: "1E5baAaEse26fej7uHcjOgEE2t2.jpg",
      description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      year: 1991,
    },
    {
      id: 8,
      title: "The Departed",
      posterURL: "1E5baAaEse26fej7uHcjOgEE2t2.jpg",
      description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
      year: 2006,
    },
    {
      id: 9,
      title: "The Prestige",
      posterURL: "1E5baAaEse26fej7uHcjOgEE2t2.jpg",
      description: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
      year: 2006,
    },
    {
      id: 10,
      title: "The Green Mile",
      posterURL: "1E5baAaEse26fej7uHcjOgEE2t2.jpg",
      description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
      year: 1999,
    },
    {
      id: 11,
      title: "The Lion King",
      posterURL: "1E5baAaEse26fej7uHcjOgEE2t2.jpg",
      description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
      year: 1994,
    },
    {
      id: 12,
      title: "The Social Network",
      posterURL: "1E5baAaEse26fej7uHcjOgEE2t2.jpg",
      description: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
      year: 2010,
    },
    {
      id: 13,
      title: "The Grand Budapest Hotel",
      posterURL: "1E5baAaEse26fej7uHcjOgEE2t2.jpg",
      description: "The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
      year: 2014,
    },
    {
      id: 14,
      title: "The Revenant",
      posterURL: "1E5baAaEse26fej7uHcjOgEE2t2.jpg",
      description: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
      year: 2015,
    },
  ];

  let paginationSettings = {
    page: 0,
    limit: 5,
    size: allMovies.length,
    amounts: [1, 2, 5, 10],
  } satisfies PaginationSettings;
  
$: paginatedSource = allMovies.slice(
	paginationSettings.page * paginationSettings.limit,
	paginationSettings.page * paginationSettings.limit + paginationSettings.limit
);


function onPageChange(e: CustomEvent): void {
  console.log('event:page', e.detail);
  paginationSettings.page = e.detail;
  updatePaginatedSource();
}

function onAmountChange(e: CustomEvent): void {
  console.log('event:amount', e.detail);
  paginationSettings.limit = e.detail;
  updatePaginatedSource();
}

function updatePaginatedSource(): void {
  const startIndex = paginationSettings.page * paginationSettings.limit;
  const endIndex = startIndex + paginationSettings.limit;
  paginatedSource = allMovies.slice(startIndex, endIndex);
}


</script>

<nav class="list-nav">
  <ul>
    {#each paginatedSource as { id, title, posterURL, year }, index (id)}
      <li style="border-bottom: 2.5px solid black;">
        <a href="/elements/lists">
          <div class="imgBox" style={`background-image: url(https://image.tmdb.org/t/p/w500/${posterURL});`}></div>
          <span class="flex-auto">{title}</span>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<Paginator bind:paginationSettings on:page={onPageChange} on:amount={onAmountChange}/>

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
</style>
