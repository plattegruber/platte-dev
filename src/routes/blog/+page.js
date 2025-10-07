/**
 * @typedef {{
 * 	title?: string;
 * 	date?: string;
 * 	coverImageUrl?: string;
 * 	[key: string]: unknown;
 * }} PostMetadata
 * @typedef {{ path: string; published: string | null } & PostMetadata} PostSummary
 */

/** @type {import('./$types').PageLoad} */
export async function load() {
	const allPostFiles = import.meta.glob('./*.{svx,md}', { eager: true });

	const allPosts = /** @type {PostSummary[]} */ (
		Object.entries(allPostFiles).map(([path, post]) => {
			const postModule = /** @type {{ metadata: PostMetadata }} */ (post);
			const postPath = path.slice(2, -4);

			return {
				...postModule.metadata,
				path: postPath,
				published: postModule.metadata?.date ?? null
			};
		})
	);

	/**
	 * @param {PostSummary} post
	 * @returns {post is PostSummary & { published: string }}
	 */
	const hasPublishedDate = (post) => typeof post.published === 'string';

	const posts = allPosts
		.filter(hasPublishedDate)
		.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());

	return { posts };
}
