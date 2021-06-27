import { Router } from 'express'

import OpinionController from '../controllers/OpinionController'

const opinionRouter = Router()
const opinionController = new OpinionController()

opinionRouter.get('/:author', opinionController.listByAuthor)

export default opinionRouter
