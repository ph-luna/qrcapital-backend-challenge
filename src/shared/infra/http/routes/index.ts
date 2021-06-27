import { Router } from 'express'

import TweetsRoutes from '@modules/Tweets/infra/http/routes/tweets.routes'
import OpinionRoutes from '@modules/Tweets/infra/http/routes/opinion.routes'

const routes = Router()

routes.use('/tweets', TweetsRoutes)
routes.use('/opinion', OpinionRoutes)

export default routes
