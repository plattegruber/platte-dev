<script>
    export let data;
</script>

<ul>
    {#each data.posts as post}
        <li>
            <a href="/blog/{post.path}" sveltekit:prefetch>{post.title}</a>
        </li>
    {/each}
</ul>
