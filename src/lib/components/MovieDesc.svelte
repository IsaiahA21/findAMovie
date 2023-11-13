<!-- MovieDesc.svelte -->
<script lang="ts">
    export let selectedMovie : any;
    let release_date = new Date(selectedMovie.release_date).toDateString();
    
    //  lambda function
    let genres = selectedMovie.genres.map(((myVar: { name: string; }) => " "+ myVar.name));

    // get the spoken languages
    let langs = selectedMovie.spoken_languages.map(((spoken: { name: string; }) => " " + spoken.name));

</script>
<main style="display: flex;">
    <div class="imageBox" style={`background-image: url(https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path});`}></div>
    <div class="detail">
        <h1 style="text-align: center;margin: 1em 0px;font-size:larger">{selectedMovie.title}</h1>
        <h2>{selectedMovie.tagline}</h2>
        <p>{selectedMovie.overview}</p>
        <div class="line" style="margin: 1.5em 5em; border-top: 2px solid black;">
        </div>
        <p><a style="text-decoration: underline; color: blue;" href={selectedMovie["homepage"]}>tailer</a></p>
        <p><span class="spanClass">Release date:  </span>{release_date}</p>
        <p><span class="spanClass">Genre(s):</span> {genres}</p>
        <p><span class="spanClass">Original language: </span> {langs}</p>
        <p><span class="spanClass">Vote_average:</span> {selectedMovie.vote_average}/10</p>
        <p><span class="spanClass">Runtime: </span>{selectedMovie.runtime} minutes</p>
        <p><span class="spanClass">Status: </span> {selectedMovie['status']}</p>
    </div>
</main>

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
</style>