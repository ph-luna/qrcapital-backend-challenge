import { inject, injectable } from 'tsyringe'

import ITweetsRepository from '@modules/Tweets/repositories/ITweetsRepository'
import IOpinion from '../interfaces/IOpinion'

import ServerError from '@shared/errors/ServerError'

@injectable()
class ListOpinionByAuthor {
  constructor (
    @inject('TweetsRepository')
    private tweetsRepository: ITweetsRepository
  ) {}

  async execute (author: string): Promise<IOpinion> {
    const tweets = await this.tweetsRepository.listByAuthor(author)

    if (tweets.length === 0) throw new ServerError('Autor não encontrado.', 404)

    let sum = 0

    for (const tweet of tweets) {
      sum += tweet.compound
    }

    const avg = Math.round((sum / tweets.length) * 100) / 100
    const opinion = avg < 0 ? 'negative' : 'positive'

    return { opinion, avg }
  }
}

export default ListOpinionByAuthor
