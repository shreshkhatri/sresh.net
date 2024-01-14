//Importing MongoClient

import {MongoClient} from 'mongodb'


// Connection URL
const client = new MongoClient(String(process.env.MONGODBSRV));

export async function getConnectionObject() {
  
    // Use connect method to connect to the server
  return (await client.connect()).db(process.env.DATABASE);
}

export function closeConnection(){
    client.close()
}