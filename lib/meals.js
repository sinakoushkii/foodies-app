import sql from "better-sqlite3";

const db = sql("meals.db");

// sql function doesnt return an Promise but to simulate connection to backend we used a Promise inside getMeals function 
export async function getMeals() {
  await new Promise((resolve) => setTimeout(() => resolve(), 2000));
  return db.prepare("SELECT * FROM meals").all();
}
