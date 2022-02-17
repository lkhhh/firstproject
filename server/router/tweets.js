import express from 'express';
import * as tweetRepoitory from '../data/tweet.js'

const router=express.Router();

//GET/tweets
//GET/tweets?username=username
router.get('/',(req,res,next)=>{
    const username=req.query.username;
    const data=username 
    ? tweetRepoitory.getAllByUsername(username)
    :tweetRepoitory.getAll();
    res.status(200).json(data);
});
//GET/tweets/id
router.get('/:id',(req,res,next)=>{
    const id=req.params.id;
    const tweet=tweetRepoitory.getAllById(id);
    if(tweet){
        res.status(200).json(tweet);
    }else{
        res.status(404).json({message:`Tweet id:${id} not found`});
    }
})
//POST/tweets
router.post('/',(req,res,next)=>{
    const {text,name,username}=req.body;
    const tweet=tweetRepoitory.creat(text,name,username);
    tweets=[tweet,...tweets];
    res.status(201).json(tweet);
})
//PUT/tweets/:id
router.put('/:id',(req,res,next)=>{
    const id=req.params.id;
    const text=req.body.text;
    const tweet=tweetRepoitory.update(id,text)
    if(tweet){
        res.status(200).json(tweet);
    }else{
        res.status(404).json({message:`Tweet id:${id} not found`});
    }
})
//DELETE/tweets/:id
router.delete('/:id',(req,res,next)=>{
    const id=req.params.id;
    tweetRepoitory.remove(id)
    res.sendStatus(204);
})

export default router;
