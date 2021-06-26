import { Router } from 'express'

import TweetsRoutes from '@modules/Tweets/infra/http/routes/tweets.routes'

const serverRouter = Router()

serverRouter.use('/tweets', TweetsRoutes)

export default serverRouter
