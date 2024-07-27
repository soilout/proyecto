import { MongoClient } from "mongodb";
import config from "../config.js";

let client
try{
    console.log('----- Tratando conectarse -----')
    client = new MongoClient(config.STRCNX)
    await client.connect()
    console.log('>>>>> Base de datos conectada <<<<<')
}
catch(error){
    console.log('error en db.js: ' + error)
}

export const db = client.db(config.BASE)