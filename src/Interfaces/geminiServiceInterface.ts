import { z } from "zod"

const requestText = z.object({
    question: z.string()
})

type geminiProRequest = z.infer<typeof requestText>

export interface GeminiRequestInterface{
     request: geminiProRequest 
}

export interface HistoryEntry {
    role: "user" | "model";
    parts: GeminiRequestInterface;
  }