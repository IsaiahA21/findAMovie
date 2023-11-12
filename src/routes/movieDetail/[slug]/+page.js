// import { error } from '@sveltejs/kit';
/** @type {import('../$types').PageLoad} */export function load({ params }) {
    return {
        props: {
            movieId: params.slug.split('$')[1],
        }
    };
    // if (params.slug === 'movieDetail') { 
        // return { 
        // }; 
    // }
    // throw error(404, 'Was Not found');
}