import express from 'express';

const tweets=[
    {
        id:'1',
        text:'드림코딩',
        createAt:Date.now().toString(),
        name:'Bob',
        username:'bob',
        url:'',
    }
]
const router=express.Router();

//GET/tweets
//GET/tweets?username=username
router.get('/',(req,res,next)=>{
    const username=req.query.username;
    const data=username ? tweets.filter(t=>t.username===username)
    :tweets;
    res.status(200).json(data);
});
//GET/tweets/id
//POST/tweets
//PUT/tweets/:id

export default router;
