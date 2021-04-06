import "reflect-metadata";
import * as dotenv from 'dotenv';
import { startApolloServer } from "./app";
import { connect as connectToDB } from "./config/typeorm.config";


dotenv.config({
    path: __dirname + '/.env'
});

async function main() {
    const port =  Number(process.env.PORT) || 4000;
    connectToDB();
    const app = await startApolloServer();
    app.listen({port}, ()=>{
        console.log(`Server  Listening on http://localhost:${port}/graphql`);
    });
}

main();

