import * as tweetRepository from '../data/tweet.js'

export async function get(req, res) { // {{base}}/tweets/ 로 접속했을 때
    const author = req.query.author; // author query
    const data = await(author ?  tweetRepository.getAllByAuthor(author) // 만약 author query가 주어졌다면 해당 author의 트윗을 찾음
    : tweetRepository.getAll()); // 아니라면 모든 트윗을 보여줌
    res.status(200).json(data); // 200을 response 해주면서 data를 json 형태로 보내줌
}

export async function getById(req, res){ // {{base}}/tweets/:id 로 접속했을 때
    const id = req.params.id; // req.params.id를 가져옴
    const tweet = await tweetRepository.getById(id); // 해당 id를 가지고 있는 트윗을 찾음
    if(tweet){ // 트윗이 있다면, 200을 response하고, 그 트윗을 json 형태로 보내준다
        res.status(200).json(tweet); 
    } else { // 트윗이 없다면, 404를 response한다.
        res.sendStatus(404);
    }
}

export async function post(req, res) { // {{base}}/tweets/ 에서 post 요청이 이루어졌을 때
    const {text, author} = req.body; // post 요청의 body에서 text와 author을 가져온다.
    const tweet = await tweetRepository.create(text, author);
    res.status(201).json(tweet); // 201을 response하고 새로 만들어진 tweet 객체를 json 형태로 보내준다.
}

export async function put(req, res) { // {{base}}/tweets/:id 에서 put 요청이 이루어졌을 때
    const id = req.params.id; // params의 아이디
    const text = req.body.text; // req.body.text
    const tweet = await tweetRepository.update(id, text); // params에서 가져온 id에 해당하는 트윗을 찾는다.
    if(tweet){ // id에 해당하는 트윗이 있다면 tweet 객체의 text를 새로운 text로 바꾼다.
        res.status(200).json(tweet) // 200을 response하고 tweet 객체를 json 형태로 보내준다.
    } else {
        res.status(404) // id에 해당하는 트윗이 없다면 404를 response 해준다.
    }
}

export async function remove(req, res) { // {{base}}/tweets/:id 에서 delete 요청이 이루어졌을 때
    const id = req.params.id; // params의 아이디
    await tweetRepository.deleteTweet(id); // 해당 id에 맞는 tweet만 array에서 제외한다.
    res.sendStatus(204) // 204를 response 해준다.
}