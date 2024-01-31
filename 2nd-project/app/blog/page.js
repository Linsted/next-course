import Link from "next/link";

const BlogPage = () => {
  return (
    <main>
      <div>The blog</div>
      <p>
        <Link href="/blog/post-1">First Post</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Second Post</Link>
      </p>
    </main>
  );
};

export default BlogPage;
