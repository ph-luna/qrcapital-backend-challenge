import { getRepository, Repository } from 'typeorm'

import ICreateTweetDTO from '@modules/Tweets/DTOS/ICreateTweetDTO'

import Tweet from '../entities/Tweet'
import ITweetsRepository from '@modules/Tweets/repositories/ITweetsRepository'

export default class TweetsRepository implements ITweetsRepository {
    private ormRepository: Repository<Tweet>

    constructor () {
      this.ormRepository = getRepository(Tweet)
    }

    async create (data: ICreateTweetDTO): Promise<Tweet> {
      const newTweet = this.ormRepository.create(data)

      await this.ormRepository.save(newTweet)

      return newTweet
    }

    async listByAuthor (author: string): Promise<Tweet[]> {
      const tweets = await this.ormRepository.find({ where: { author } })

      return tweets
    }
}
