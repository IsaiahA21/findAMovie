import { error } from '@sveltejs/kit';

/** @type {import('../$types').PageLoad} */export async function load({ params }) {
  if (params.slug) {
        const movieId = params.slug.split('$')[1]; //Get the movie ID from the slug
        let selectedMovie = null;
        const API_Token = import.meta.env.VITE_API_TOKEN;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_Token}`
            }
        };
            try {
                let response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
                let data = await response.json();

                if (data.success === false) {
                    // API request was unsuccessful
                    console.error("Invalid API key: You must be granted a valid key.");
                } else {
                    // API request was successful, populate the selectedMovie object with the data
                    selectedMovie = data;
                    // console.log(data);
                }
            } catch (error) {
                // Handle other errors
                console.error(error);
            }

        return {
            props: {
                selectedMovie : selectedMovie, //pass the selectedMovie object to +page.svelte
            }
        };
    }

    throw error(404, 'Was Not found');
}
