<!-- MovieDesc.svelte -->
<script lang="ts">
    export let selectedMovie : any;
    let release_date = new Date(selectedMovie.release_date).toDateString();
    
    //  lambda function
    let genres = selectedMovie.genres.map(((myVar: { name: string; }) => " "+ myVar.name));

    // get the spoken languages
    let langs = selectedMovie.spoken_languages.map(((spoken: { name: string; }) => " " + spoken.name));

    //https://www.radix-ui.com/icons
    import { Plus } from 'radix-icons-svelte';

    // import svelteUI
    import { Button, Grid } from '@svelteuidev/core';

    import AllComments from "./AllComments.svelte";
    import { Breadcrumbs } from '@svelteuidev/core';

</script>
<div style="color: black;">
<Breadcrumbs size="md" separator="→">
    <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
    <Breadcrumbs.Item active={true}>{selectedMovie.title}</Breadcrumbs.Item>
</Breadcrumbs>
</div>
<main style="display: flex;">
    <div class="imageBox" style={`background-image: url(https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path});`}></div>
    <div class="detail">
        <h1 style="text-align: center;margin: 1em 0px;font-size:larger">{selectedMovie.title}</h1>
        <h2>{selectedMovie.tagline}</h2>
        <p>{selectedMovie.overview}</p>
        <div class="line" style="margin: 1.5em 5em; border-top: 2px solid black;">
        </div>
        <p><a style="text-decoration: underline; color: blue;" href={selectedMovie["homepage"]}>trailer</a></p>
        <p><span class="spanClass">Release date:  </span>{release_date}</p>
        <p><span class="spanClass">Genre(s):</span> {genres}</p>
        <p><span class="spanClass">Original language: </span> {langs}</p>
        <p><span class="spanClass">Vote_average:</span> {selectedMovie.vote_average}/10</p>
        <p><span class="spanClass">Runtime: </span>{selectedMovie.runtime} minutes</p>
        <p><span class="spanClass">Status: </span> {selectedMovie['status']}</p>
    </div>
</main>

<section style="border-top: 1px black;border-style: solid;display: flex;color: black;margin-bottom: 3%;">
    <div class="ratingClass">
        <h1>Reviews</h1>
    </div>
    <div class="commentClass">
        <!-- <div class="commentHeader" style=" display: flex; align-items: center;">
            <span style="margin-left: auto;">Comments</span> 
            <button style="margin-left: auto;display: flex;text-align: center;align-items: center;" >
               <!-- type="button" class="bg-black text-white font-bold py-2 px-4 " -->
                <!-- onclick opens a modal  -->
                <!-- <div class="icon">  <TiPlusOutline />            </div>
                <span>New</span>
            </button>
        </div> -->
        <Grid override={{color : "blue;", borderBottom:"1px solid black", marginBottom:"0.5%"}}>
            <Grid.Col span={3} class="gridColumn" override={{color : "blue;", border:"1px solid black"}}>
                <span >Comments</span> 
            </Grid.Col>
            <Grid.Col class="gridColumn" span={3} offset={6} override={{color : "blue;", border:"1px solid black"}}>
                <Button fullSize variant='gradient' gradient={{from: 'grape', to: 'pink', deg: 35}} 
                override={{'&:hover': {  boxShadow: '0 4px 20px #d14ab0',}}}>
                    <span style="font-weight:bold;font-size: large;">New</span>
                    <Plus size={25} slot="leftIcon"/>
                </Button>
            </Grid.Col>
        </Grid>
        <AllComments />

    </div>
</section>


<style>
    .spanClass {
        font-weight: bold;
    }
    .imageBox{
        background-position: center;
        background-repeat: no-repeat;
        width: 40%;
        border-radius: 10px;
        margin: 2% 2%;
        background-size: auto;

    }
    .detail{
        width: 56%;
        min-height: 400px;
        border-radius: 10px;
        margin: 2% 2%;
        margin-left: 0%;
        color: black;
    }
    .ratingClass{
        width: 30%;
        border: 1px solid black;
        margin: 0% 2%;
        text-align: center;
    }
    .commentClass{
        width: 68%;
        border: 1px solid black;
        margin-right: 2%;
    }
    .gridColumn{
        background-color: blue;
        border: 1px solid black;
    }
</style>