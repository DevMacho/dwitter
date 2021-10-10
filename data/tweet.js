let tweets = [
    {
        id: 1,
        text: "안녕하세용",
        createdAt: new Date(),
        author: "Lee"
    },
    {
        id: 2,
        text: "하이요",
        createdAt: new Date,
        author: "Park"
    }
];

export async function getAll(){
    return tweets;
}

export async function getAllByAuthor(author){
    return tweets.filter(t => t.author == author);
}

export async function getById(id){
    return tweets.find(t => t.id == id)
}

export async function create(text, author){
    const tweet = { // 받은 데이터들로 하나의 트윗 객체를 생성한다.
        id: Date.now().toString(), // id는 밀리세컨드를 기반으로 생성한다.
        text, // req.body에서 받은 text
        createdAt: new Date(), // 날짜와 시각을 입력한다.
        author // req.body에서 받아온 author
    };
    tweets = [tweet, ...tweets]; // tweets array에서 새로 만들어진 tweet 객체를 맨 앞에 둔다.
    return tweet;
}

export async function update(id, text){
    const tweet = tweets.find((t) => t.id == id);
    if(tweet){
        tweet.text = text;
    }
    return tweet;
}

export async function deleteTweet(id){
    tweets = tweets.filter((t) => t.id != id);
}