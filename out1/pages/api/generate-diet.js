import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function generateDiet(req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const calories = req.body.calories || '';
  const numMeals = req.body.numMeals || '';
  const foods = req.body.foods || '';
  
  // Validate input
  if (isNaN(calories) || isNaN(numMeals) || calories <= 0 || numMeals <= 0 || !foods.trim().length) {
    res.status(400).json({
      error: {
        message: "Invalid input",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: generatePrompt(calories, numMeals, foods),
      temperature: 0.6,
      max_tokens:3500
    });
    res.status(200).json({ result: completion.data.choices[0].text});
    console.log(completion.data.choices)
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(calories, numMeals, foods) {
  return `Genera una dieta de ${numMeals} comidas con ${calories} calorias por dia. 
  con los siguientes alimentos: ${foods}.Enumera cada comida con numero y guion y pon las cantidades solo en gramos`
}
