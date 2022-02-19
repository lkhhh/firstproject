export default class TweetService {


  constructor(httpn){
    this.http=http;
    this.baseURL=baseURL;
  }
  async getTweets(username){
    const query=username?`?username=${username}`:'';
    return this.http.fetch(`/tweets${query}`,{
      method:'GET',
    });
  }

  tweets = [
    {
      id: 1,
      text: '드림코딩에서 강의 들으면 너무 좋으다',
      createdAt: '2021-05-09T04:20:57.000Z',
      name: 'Bob',
      username: 'bob',
      url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
  ];

 async getTweets(username){
    const query=username?`?username=${username}`:'';
    const response=this.http.fetch(`/tweets/${query}`,{
      method:'GET',
      headers:{'Content-Type':'application/json'},
    });
    const data=await response.json();
    if(response.status!==200){
      throw new Error(data.message);
    }
    return data;
  }

  async postTweet(text) {
    return this.http.fetch(`/tweets`,{
      method:'POST',
      body:JSON.stringify({text,username:'ellie',name:'Ellie'}),
    });
  }

  async deleteTweet(tweetId) {
    return this.http.fetch(`/tweets/${tweetId}`,{
      method:'DELETE',
      headers:{'Content-Type':'application/json'},
    });
  }

  async updateTweet(tweetId, text) {
    return this.http.fetch(`/tweets/${tweetId}`,{
      method:'PUT',
      body:JSON.stringify({text,username:'ellie',name:'Ellie'}),
    });
  }
}
