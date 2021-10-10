import express from 'express';
import * as tweetController from '../controller/tweet.js'

const router = express.Router(); // 라우터 미들웨어 사용

router.get('/', tweetController.get);

router.get('/:id', tweetController.getById);

router.post('/', tweetController.post);

router.put('/:id', tweetController.put);

router.delete('/:id', tweetController.remove);

export default router;