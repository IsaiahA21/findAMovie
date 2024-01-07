<script lang="ts">
    //https://github.com/skeletonlabs/skeleton/blob/master/packages/skeleton/src/lib/components/Avatar/Avatar.svelte
    import { Avatar } from '@skeletonlabs/skeleton';
    import { IconRenderer, Card, SvelteUIProvider, Flex } from '@svelteuidev/core';//https://www.svelteui.org/core/breadcrumbs
    import * as allCommentTS  from './AllCommentsTS';
    import { Engine, functionCreateDatatable, Pagination, RowsPerPage, Search, Sort } from 'svelte-datatables-net';

    type commentObject = {
        id: number;
        name: string;
        desc: string;
        date: Date;
        rating: number;
    };

    let theComments: commentObject[] = [];
    
    let objectDataRow = functionCreateDatatable({
		parData: theComments,
		parRowsPerPage: '5',
		parSortBy: 'rating',
		parSortOrder: 'descending',
		parSearchString: ''
	});
    </script>

<main>
    <!-- <div class="Allcomments" style="text-align: left;">
        <p>I liked the movie</p>
        <p>Fun movie</p>
    </div> -->
    {#each Array(1) as _,i}
    <Card style="border: 1px solid black;">
            <Flex  wrap="wrap" style="align-items: center;">
                <Avatar {...allCommentTS.avatarInfo("Micheal Boe")} width="w-12"/>
                <p class="name">Micheal Boe</p>
            </Flex>
			<!-- body -->
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Card>
    {/each}
</main>

<style>
    .name{
        font-size: 1em;
        margin-left: 3%;
    }
</style>