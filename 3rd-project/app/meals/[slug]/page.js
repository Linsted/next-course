import Image from "next/image";
import { notFound } from "next/navigation";

import { getMealById } from "@/lib/meals";

import classes from "./page.module.css";

const MealsItemsPage = ({ params }) => {
  const meal = getMealById(params.slug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(new RegExp("\n", "g"), "<br>");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.create_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
};

export default MealsItemsPage;
