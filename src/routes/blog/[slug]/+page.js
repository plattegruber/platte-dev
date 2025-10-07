/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const post = await import(`../${params.slug}.svx`);
	const { title, date, coverImageUrl } = post.metadata;

	return {
		content: post.default,
		title,
		date,
		coverImageUrl: coverImageUrl ?? null
	};
}
