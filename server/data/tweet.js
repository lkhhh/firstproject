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

export async function getAll(){
    return tweets;
}
export async function getAllByUsername(username){
    return tweets.filter((tweet)=>tweet.username)
}
export async function getAllById(id){
    return tweets.find((tweet)=>tweet.id===id)
}
export async function create(text,name,username){
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

export async function update(id,text){
    const tweet=tweets.find((tweet)=>tweet.id===id);
    if(tweet){
        tweet.text=text;
    }
    return tweet;
}
export async function remove(id){
    tweets=tweets.filter(tweet=>tweet.id!==id);
}