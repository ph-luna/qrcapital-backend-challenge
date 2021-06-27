import { Router } from 'express'

import TweetsController from '../controllers/TweetsController'
import validateCreateTweetRequest from '../middlewares/validateCreateTweetRequest'

const tweetsRouter = Router()
const tweetsController = new TweetsController()

tweetsRouter.post('/', validateCreateTweetRequest, tweetsController.create)

export default tweetsRouter
