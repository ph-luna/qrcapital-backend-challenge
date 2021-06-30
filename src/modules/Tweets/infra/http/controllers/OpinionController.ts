import { Request, Response } from 'express'
import { container } from 'tsyringe'

import ListOpinionByAuthorService from '@modules/Tweets/services/ListOpinionByAuthorService'

export default class OpinionController {
  async listByAuthor (req: Request, res: Response) {
    const { author } = req.params

    const listOpinionByAuthorService = container.resolve(ListOpinionByAuthorService)

    const opinion = await listOpinionByAuthorService.execute(author)

    res.json(opinion)
  }
}
