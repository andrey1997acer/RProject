import { createConnection } from "typeorm";
import path = require("path")
// import  {databaseUserName,databaseHost,databaseName,databasePassword,databasePort,jwtSecretKey}   from "./enviroments.config";
import fs from 'fs'

export async function connect() { 
   
    await createConnection({
        type: 'mysql', 
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        ssl: {
            ca: fs.readFileSync(__dirname + '/ca-certificate.crt'),
        },
        entities: [
            path.join(__dirname, '../entities/**/**.ts')
        ],
        migrations: [
            path.join(__dirname, '../migrations/**/**.ts')
        ],
        subscribers: [
            path.join(__dirname, '../migrations/**/**.ts')
        ],
        cli: {
            entitiesDir: "src/entities",
            migrationsDir: "src/migrations",
            subscribersDir: "src/suscribers",
        },
        logging: false,
        synchronize: true
    });
    console.log("Database is connected");

}
