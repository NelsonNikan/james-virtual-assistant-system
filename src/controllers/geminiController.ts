import { FastifyRequest, FastifyReply} from "fastify"
import { GeminiService } from "../services/geminiService"
import { GeminiRequestInterface } from "../Interfaces/geminiServiceInterface";


class GerminiController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const geminiServie = new GeminiService();

        const { question } = request.body as {question: GeminiRequestInterface}

        const sendText = await geminiServie.sendTextToGemini(question);

        reply.send(sendText)
    }
}

export { GerminiController }