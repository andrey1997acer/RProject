import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import { buildSchema } from "type-graphql"
import { isAuthorizated } from "./middleware/is-authorizated";
import { RESOLVERS } from './resolvers';
import { ApolloServerLoaderPlugin } from 'type-graphql-dataloader';
import { getConnection } from 'typeorm';

export async function startApolloServer() {
    const app = express();
    const server = new ApolloServer({
        plugins: [
            ApolloServerLoaderPlugin({
              typeormGetConnection: getConnection,  // for use with TypeORM
            }),
          ],
    
        schema: await buildSchema({
            resolvers:  RESOLVERS,
            authChecker: isAuthorizated
        }),
        context: ({ req, res }) => ({ req, res }),

    });
    server.applyMiddleware({ app, path: '/graphql' });
    return app;
}


