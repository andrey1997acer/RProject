import * as dotenv from 'dotenv';

dotenv.config({
    path: __dirname + '/../.env'
});

   
export const databaseUserName = process.env.DATABASE_USERNAME;
export const databasePassword= process.env.DATABASE_PASSWORD;
export const databaseName= process.env.DATABASE_NAME;
export const databaseHost= process.env.DATABASE_HOST;
export const databasePort= Number(process.env.DATABASE_PORT);
export const jwtSecretKey= process.env.JWT_SECRET_KEY;
   

    