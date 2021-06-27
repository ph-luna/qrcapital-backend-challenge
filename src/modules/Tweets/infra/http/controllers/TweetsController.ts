import { Request, Response } from 'express'
import { container } from 'tsyringe'

import IPostTweetDTO from '@modules/Tweets/DTOS/IPostTweetDTO'

import CreateTweetService from '@modules/Tweets/services/CreateTweetService'

export default class TweetsController {
  async create (req: Request, res: Response): Promise<Response> {
    const { author, text, link } = req.body as IPostTweetDTO
    const createTweetService = container.resolve(CreateTweetService)

    const message = await createTweetService.execute({ author, text, link })

    return res.json({ message })
  }
}
