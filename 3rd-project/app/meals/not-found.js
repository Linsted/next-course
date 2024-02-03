import Link from "next/link";

const NotFountPage = () => {
  return (
    <main className="not-found">
      <h1>Meal not found</h1>
      <p>Sorry, can`t find this meal!</p>
      <p>
        <Link href={"/meals"}>Go back to all meals</Link>
      </p>
    </main>
  );
};

export default NotFountPage;
