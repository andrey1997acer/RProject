import { createConnection } from "typeorm";
import path = require("path")
import  {databaseUserName,databaseHost,databaseName,databasePassword,databasePort}   from "./enviroments.config";
import fs from 'fs'

export async function connect() { 
   try{
    await createConnection({
        type: 'mysql', 
        host: databaseHost,
        port: Number(databasePort),
        username: databaseUserName,
        password: databasePassword,
        database: databaseName,
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
    }).then((res)=>{
        console.log('Database connected successfully');
        
    });
    
}catch(e){
    console.log(`Error ${e}`);
    
}

}
