import { GeminiRequestInterface, HistoryEntry } from "../Interfaces/geminiServiceInterface";
import { geminiPro } from "../generativeAiConnection/geminiConnection";


class GeminiService {
    
    async sendTextToGemini(request: GeminiRequestInterface) {
        // For text-only input, use the gemini-pro model
        const history: HistoryEntry[] = []
        const model = geminiPro
        const prompt = request

        history.push({ role: "user", parts: prompt });
        
        const chat = model.startChat({
            history: history,
            generationConfig: {
              maxOutputTokens: 100,
            },
          });
       const msg = "teste"
        const result = await chat.sendMessage(msg);
        console.log('chat aqui', result)
        // const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text);
        return text
      }
}

export { GeminiService }
