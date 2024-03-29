"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export const shareMeal = async (prevState, formData) => {
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  const validationCondition =
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0;

  if (validationCondition) {
    // throw new Error("Invalid input");
    return { message: "Invalid input" };
  }

  await saveMeal(meal);

  revalidatePath("/meals");
  redirect("/meals");
};
