const BlogPostPage = ({ params }) => {
  return (
    <main>
      <div>{params.slug}</div>
    </main>
  );
};

export default BlogPostPage;
