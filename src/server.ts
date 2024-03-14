import Fastfy from 'fastify'
import cors from '@fastify/cors'
import { routes } from './routes';

const app = Fastfy({ logger: true})

const start = async () => {

    app.register(cors);
    app.register(routes);
    try{
        app.listen({port: 4500})
    }catch(err){
        process.exit(1)
}

}

start()