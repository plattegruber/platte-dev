<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<ul>
	{#each data.posts as post}
		<li>
			<a href={`/blog/${post.path}`} data-sveltekit-preload-data>{post.title}</a>
		</li>
	{/each}
</ul>
