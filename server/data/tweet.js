
import { getTweet } from '../controller/tweet.js';
import { getTweets } from '../database/database.js';
import * as userRepository from './auth.js';

import MongoDb from 'mongodb'
import { Result } from 'express-validator';
const ObjectId=MongoDb.ObjectId;
//NOSQL
//프로필 DB
//사용자의 문서 저장 DB
//각각의 데이터베이스 독립된 데이터를 가지고있음 (관계X)
//수평적 확장 용이
//관계형 조인쿼리 성능이 영 좋지않음



export async function getAll() {
 return getTweets()
 .fine()
 .sort({createAt:-1})
 .toArray()
 .then((data)=>{
   console.log(data);
   return data;
 })
}


export async function getAllByUsername(username) {
  return getTweets()
 .fine({username})
 .sort({createAt:-1})
 .toArray()
 .then(mapTweets);
}

export async function getById(id) {
  return getTweets().findOne({_id:new ObjectId(id)})
  .then(mapOptionalTweet)
}

export async function create(text, userId) {
  const {name,username,url}= await userRepository.findById(userId);
  const tweet={
    text,
    createAt:new Date(),
    userId,
    name:name,
    username:username,
    url:url,
  };
  return getTweets().insertOne(tweet).then( mapOptionalTweet({...tweet,_id:data.insertedId}));
}

export async function update(id, text) {
  return getTweets()
  .findOneAndUpdate(
    {_id:new ObjectId(id)},
    {$set:{text}},
    {retrunDocument:'after'}
  )
  .then(result=>result.value)
  .then(mapOptionalTweet)
}

export async function remove(id) {
  return getTweets().deleteOne({_id:new ObjectId(id)});
}

function mapOptionalTweet(tweet){
  return tweet?{...tweet,id:tweet._id.toString()}:tweet;
}

function mapTweets(tweets){
  return tweets.map(mapOptionalTweet);
}