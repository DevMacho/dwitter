import express from "express";
import cors from 'cors';
import tweetRoute from './router/tweets.js'; 

const app = express();
app.use(express.json()); // express.json 미들웨어 사용
app.use(cors())

app.use('/tweets', tweetRoute); // 트윗 라우터 사용

app.use((req, res, next) => {
    res.sendStatus(404); // 경로를 찾을 수 없을 때 404 response를 보냄
})

app.use((error, req, res, next) => {
    console.error(error)
    res.sendStatus(500) // 에러가 발생했을 때 500 response를 보냄
})
app.listen(8080); // 8080포트로 출력