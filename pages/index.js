import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [caloriesInput, setCaloriesInput] = useState("");
  const [numMealsInput, setNumMealsInput] = useState("");
  const [foodsInput, setFoodsInput] = useState("");
  const [result, setResult] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate-diet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify({
          calories: caloriesInput,
          numMeals: numMealsInput,
          foods: foodsInput,
        }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setCaloriesInput("");
      setNumMealsInput("");
      setFoodsInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>Generador de dieta</title>
      </Head>

      <main className={styles.main}>
        <h1>Generador de dieta</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="calories">Calorías:</label>
          <input
            type="number"
            name="calories"
            placeholder="Ej: 2000"
            value={caloriesInput}
            onChange={(e) => setCaloriesInput(e.target.value)}
            required
          />
          <label htmlFor="numMeals">Número de comidas:</label>
          <input
            type="number"
            name="numMeals"
            placeholder="Ej: 3"
            value={numMealsInput}
            onChange={(e) => setNumMealsInput(e.target.value)}
            required
          />
          <label htmlFor="foods">Alimentos:</label>
          <input
            type="text"
            name="foods"
            placeholder="Ej: pollo, arroz, brócoli"
            value={foodsInput}
            onChange={(e) => setFoodsInput(e.target.value)}
            required
          />
          <input type="submit" value="Generar dieta" />
        </form>
        {result && <div className={styles.result}>{result}</div>}
        
      </main>
      Elaborado por Oscar Alatrista
    </div>
  );
}
