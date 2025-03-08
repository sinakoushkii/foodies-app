"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(previousState,formData) {
  const meal = {
    creator: formData.get("name"),
    title: formData.get("title"),
    creator_email: formData.get("email"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  // serverside form validation
  if (
    isInvalidText(meal.creator) ||
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {message:"Invalid Input Value"}
  }
  await saveMeal(meal);
  redirect("/meals");
}
