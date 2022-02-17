import express from 'express';
import * as tweetRepoitory from '../controller/tweet.js'

const router=express.Router();

//GET/tweets
//GET/tweets?username=username
router.get('/',tweetControlloer.getTweets); //함수 호출이 아닌 함수를 붙이는 것이기 때문에 getTweets()가 아님
//GET/tweets/id
router.get('/:id',tweetControlloer.getTweet)
//POST/tweets
router.post('/',tweetControlloer.createTweet)
//PUT/tweets/:id
router.put('/:id',tweetControlloer.updateTweet)
//DELETE/tweets/:id
router.delete('/:id',tweetControlloer.deleteTweet)

export default router;
