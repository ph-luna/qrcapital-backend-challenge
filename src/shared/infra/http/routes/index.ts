import { Router } from 'express'

import TweetsRoutes from '@modules/Tweets/infra/http/routes/tweets.routes'

const routes = Router()

routes.use('/tweets', TweetsRoutes)

export default routes
