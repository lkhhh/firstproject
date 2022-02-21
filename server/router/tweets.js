import express from 'express';
import * as tweetControlloer from '../controller/tweet.js'
import {body} from 'express-validator';
import {validate} from '../middlewawre/validator.js';

const router=express.Router();
//Contract Testing --검색하고 찾아보기
const validateTweet=[
    body('text')
    .trim().isLength({min:3})
    .withMessage('text should be at least 3 chars'),
    validate,
];
//GET/tweets
//GET/tweets?username=username
//함수 호출이 아닌 함수를 붙이는 것이기 때문에 getTweets()가 아님
 router.get('/', isAuth, tweetController.getTweets);

// GET /tweets/:id
router.get('/:id', isAuth, tweetController.getTweet);

// POST /tweeets
router.post('/', isAuth, validateTweet, tweetController.createTweet);

// PUT /tweets/:id
router.put('/:id', isAuth, validateTweet, tweetController.updateTweet);

// DELETE /tweets/:id
router.delete('/:id', isAuth, tweetController.deleteTweet);

export default router;
