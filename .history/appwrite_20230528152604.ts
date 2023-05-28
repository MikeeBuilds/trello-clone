import { Client, ID, Databases, Storage, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID');

const database = new Databases(client);
const storage = new Storage(client);
const account = new Account(client);


export { client, database, storage, account, ID };