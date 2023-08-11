import { Configuration, OpenAIApi } from "openai";
import { Request, Response } from "express";
import config from "../../config";

const openaiApiKey = config.open_api_key;
const configuration = new Configuration({
  apiKey: config.open_api_key,
});
const openai = new OpenAIApi(configuration);

export default async function handleRequest(req: Request, res: Response) {
  if (!openaiApiKey) {
    return res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
  }

  const restrictions = req.body.restrictions || [];
  const parsedRestrictions = restrictions
    .map((restriction: { name: string }) => restriction.name)
    .join(", ");

  if (parsedRestrictions.trim().length === 0) {
    return res.status(400).json({
      error: {
        message: "Please enter a valid food name",
      },
    });
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generateMenu(parsedRestrictions),
      temperature: 0.6,
      max_tokens: 200,
    });
    const generatedMenu = completion.data.choices[0].text?.trim();
    console.log(generatedMenu);
    return res.status(200).json({ result: generatedMenu });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

function generateMenu(restrictions: string) {
  return `gere um menu curto da semana baseado nas restrições alimentares dos estudantes da escola, segue as restrições:\n${restrictions}\n\n almoço `;
}
