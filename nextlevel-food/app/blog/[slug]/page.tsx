const BlogPostPage = ({ params }: { params: any }) => {
    return (
        <main>
            <h1>Blog Post</h1>
            <p>Post: {params.slug}</p>
        </main>
    )
}

export default BlogPostPage