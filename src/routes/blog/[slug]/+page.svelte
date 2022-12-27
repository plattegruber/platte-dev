<script>
  export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta property="og:title" content={data.title} />
	<meta property="og:image" content={data.coverImageUrl} />
</svelte:head>

<article>
	<h1>{ data.title }</h1>
    <p>Published: {data.date}</p>
    <svelte:component this={data.content} />
	<a href="/blog">Back to blog index</a>
</article>