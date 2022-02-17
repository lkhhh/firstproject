
import * as tweetRepoitory from '../data/tweet.js'
//동기적 처리해야하니 추후 async처리
export async function getTweets(req,res){
    const username=req.query.username;
    const data=await (username 
        ? tweetRepoitory.getAllByUsername(username)
        :tweetRepoitory.getAll());
    res.status(200).json(data);
}
export async function getTweet(req,res){
    const id=req.params.id;
    const tweet=await tweetRepoitory.getAllById(id);
    if(tweet){
        res.status(200).json(tweet);
    }else{
        res.status(404).json({message:`Tweet id:${id} not found`});
    }
}

export async function createTweet(req,res){
    const {text,name,username}=req.body;
    const tweet=await tweetRepoitory.creat(text,name,username);
    tweets=[tweet,...tweets];
    res.status(201).json(tweet);
}

export async function updateTweet(req,res){
    const id=req.params.id;
    const text=req.body.text;
    const tweet=await tweetRepoitory.update(id,text)
    if(tweet){
        res.status(200).json(tweet);
    }else{
        res.status(404).json({message:`Tweet id:${id} not found`});
    }
}

export async function deleteTweet(req,res){
    const id=req.params.id;
    tweetRepoitory.remove(id)
    res.sendStatus(204);
}