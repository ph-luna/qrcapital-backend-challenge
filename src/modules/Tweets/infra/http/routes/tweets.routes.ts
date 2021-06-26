import { Router } from 'express'

import TweetsController from '../controllers/TweetsController'

const tweetsRouter = Router()
const tweetsController = new TweetsController()

tweetsRouter.post('/', tweetsController.create)

export default tweetsRouter
