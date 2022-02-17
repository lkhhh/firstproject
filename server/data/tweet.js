let tweets=[
    {
        id:'1',
        text:'드림코딩',
        createAt:Date.now().toString(),
        name:'Bob',
        username:'bob',
        url:'',
    },
    {
        id:'2',
        text:'드림ss',
        createAt:Date.now().toString(),
        name:'lkh',
        username:'lkh',
        url:'',
    }
]

export function getAll(){
    return tweets;
}
export function getAllByUsername(username){
    return tweets.filter((tweet)=>tweet.username)
}
export function getAllById(id){
    return tweets.find((tweet)=>tweet.id===id)
}
export function create(text,name,username){
    const tweet={
        id:DataTransfer.now().toString,
        text,
        createAt:new Date(),
        name,
        username,
    };
    tweets=[tweet,...tweets];
    return tweet;
}

export function update(id,text){
    const tweet=tweets.find((tweet)=>tweet.id===id);
    if(tweet){
        tweet.text=text;
    }
    return text;
}
export function remove(id){
    tweets=tweets.filter(tweet=>tweet.id!==id);
}