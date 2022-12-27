export async function load() {
    const allPostFiles = import.meta.glob('./*.{svx,md}');
    const allPosts = await Promise.all(Object.entries(allPostFiles).map(async ([path, postPromise]) => {
        const postPath = path.slice(2, -4);
        var post = await postPromise()
        return { ...post.metadata, path: postPath, published: post.metadata.date };
    }));
    const posts = allPosts.sort((a, b) => b.published - a.published);
    if (!posts || !posts.length) {
        return { status: 404 };
    }
    return { posts };
}