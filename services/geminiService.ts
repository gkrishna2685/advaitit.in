
import { GoogleGenAI } from "@google/genai";
import { ChatMessage, GroundingSource } from "../types";

export const getGeminiResponse = async (prompt: string): Promise<ChatMessage> => {
  try {
    const ai = new GoogleGenAI({ apiKey: (process.env as any).API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: "You are an assistant for Advait HR, an IT and HR services company in Delhi, India. Use Google Search to provide accurate, up-to-date information about industry trends, tech support, or hiring practices when asked."
      },
    });

    const sources: GroundingSource[] = [];
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    
    if (chunks) {
      chunks.forEach((chunk: any) => {
        if (chunk.web) {
          sources.push({
            title: chunk.web.title,
            uri: chunk.web.uri
          });
        }
      });
    }

    return {
      role: 'assistant',
      content: response.text || "I'm sorry, I couldn't process that request.",
      sources: sources.length > 0 ? sources : undefined
    };
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      role: 'assistant',
      content: "I encountered an error connecting to my knowledge base. Please try again later."
    };
  }
};
