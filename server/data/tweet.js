
import Mongoose from 'mongoose';
import { useVirtualId } from '../database/database.js';
import * as UserRepository from './auth.js';

const tweetSchema = new Mongoose.Schema(
  {
    text: { type: String, required: true },
    userId: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
    url: String,
  },
  { timestamps: true }
);

//NOSQL
//프로필 DB
//사용자의 문서 저장 DB
//각각의 데이터베이스 독립된 데이터를 가지고있음 (관계X)
//수평적 확장 용이
//관계형 조인쿼리 성능이 영 좋지않음



useVirtualId(tweetSchema);
const Tweet = Mongoose.model('Tweet', tweetSchema);

export async function getAll() {
  return Tweet.find().sort({ createdAt: -1 });
}

export async function getAllByUsername(username) {
  return Tweet.find({ username }).sort({ createdAt: -1 });
}

export async function getById(id) {
  return Tweet.findById(id);
}

export async function create(text, userId) {
  return UserRepository.findById(userId).then((user) =>
    new Tweet({
      text,
      userId,
      name: user.name,
      username: user.username,
    }).save()
  );
}

export async function update(id, text) {
  return Tweet.findByIdAndUpdate(id, { text }, { returnOriginal: false });
}

export async function remove(id) {
  return Tweet.findByIdAndDelete(id);
}