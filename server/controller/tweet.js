
import * as tweetRepoitory from '../data/tweet.js'
//동기적 처리해야하니 추후 어싱크처리
export function getTweets(req,res){
    const username=req.query.username;
    const data=username 
    ? tweetRepoitory.getAllByUsername(username)
    :tweetRepoitory.getAll();
    res.status(200).json(data);
}
export function getTweet(req,res){
    const id=req.params.id;
    const tweet=tweetRepoitory.getAllById(id);
    if(tweet){
        res.status(200).json(tweet);
    }else{
        res.status(404).json({message:`Tweet id:${id} not found`});
    }
}

export function createTweet(req,res){
    const {text,name,username}=req.body;
    const tweet=tweetRepoitory.creat(text,name,username);
    tweets=[tweet,...tweets];
    res.status(201).json(tweet);
}

export function updateTweet(req,res){
    const id=req.params.id;
    const text=req.body.text;
    const tweet=tweetRepoitory.update(id,text)
    if(tweet){
        res.status(200).json(tweet);
    }else{
        res.status(404).json({message:`Tweet id:${id} not found`});
    }
}

export function deleteTweet(req,res){
    const id=req.params.id;
    tweetRepoitory.remove(id)
    res.sendStatus(204);
}