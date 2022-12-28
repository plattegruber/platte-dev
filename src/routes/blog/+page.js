export async function load() {
    /** @type {import('vite/types/importGlob')} */
    const allPostFiles = import.meta.glob('./*.{svx,md}', { eager: true});

    const allPosts = Object.entries(allPostFiles).map(([path, post]) => {
        const postPath = path.slice(2, -4);
        return { ...post.metadata, path: postPath, published: post.metadata.date };
    });
    const posts = allPosts.sort((a, b) => b.published - a.published);
    if (!posts || !posts.length) {
        return { posts: [] };
    }
    return { posts };
}