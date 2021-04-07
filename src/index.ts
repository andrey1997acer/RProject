import "reflect-metadata";
import { startApolloServer } from "./app";
import { connect as connectToDB } from "./config/typeorm.config";

async function main() {
    const port =  Number(process.env.PORT) || 4000;
    connectToDB();
    const app = await startApolloServer();
    app.listen({port}, ()=>{
        console.log(`Server  Listening on http://localhost:${port}/graphql`);
    });
}

main();

