import Link from "next/link";

const NotFountPage = () => {
  return (
    <main className="not-found">
      <h1>Page not found</h1>
      <p>Sorry, can`t find this page!</p>
      <p>
        <Link href={"/"}>Go back to the main page</Link>
      </p>{" "}
    </main>
  );
};

export default NotFountPage;
