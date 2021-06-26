import { Request, Response } from 'express'

export default class TweetsController {
  async create (req: Request, res: Response): Promise<Response> {
    const { body } = req

    return res.json({ body })
  }
}
