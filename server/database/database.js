import MongDb from 'mongodb';
import {config} from '../config.js';

let db;
export async function connectDB(){
    return MongDb.MongoClient.connect(config.db.host)
    .ther((client)=>{
        db=client.db;
    });
}

export function getUsers(){
    return db.collection('users');
}

export function getTweets(){
    return db.collection('tweets');
}