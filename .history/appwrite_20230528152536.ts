import { Client, ID, Databases, Storage } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID');

const database = new Databases(client);
