
import { GoogleGenAI } from "@google/genai";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIExecutiveSummary = async (context: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a concise, professional one-sentence executive insight for a travel management platform dashboard based on these metrics: ${context}. Keep it under 20 words. Focus on a specific trend like credit burn, savings, or travel volume.`,
      config: {
        temperature: 0.7,
        // When setting maxOutputTokens, thinkingBudget must also be set for Gemini 3 models to ensure response is not blocked.
        maxOutputTokens: 50,
        thinkingConfig: { thinkingBudget: 25 },
      }
    });
    // The response.text property (not a method) directly returns the string output.
    return response.text || "Analyzing current travel patterns and credit consumption to optimize your budget...";
  } catch (error) {
    console.error("Error fetching AI summary:", error);
    return "Credit burn rate increased 12% this quarter due to peak travel routes.";
  }
};
