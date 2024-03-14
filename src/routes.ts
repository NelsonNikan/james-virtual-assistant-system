import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import { GerminiController } from "./controllers/geminiController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    
    fastify.get('/teste', async ( request: FastifyRequest, reply: FastifyReply ) => {

    })

    fastify.post('/gemini', async ( request: FastifyRequest, reply: FastifyReply ) => {
        console.log(request)
        return new GerminiController().handle(request, reply)
    })
}