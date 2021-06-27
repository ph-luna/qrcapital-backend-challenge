import { v4 as uuid } from 'uuid'

import ITweetsRepository from '../ITweetsRepository'
import ITweet from '@modules/Tweets/interfaces/ITweet'
import ICreateTweetDTO from '@modules/Tweets/DTOS/ICreateTweetDTO'

export default class FakeTweetsRepository implements ITweetsRepository {
    private tweets: ITweet[] = []

    async create (data: ICreateTweetDTO): Promise<ITweet> {
      const newTweet: ITweet = {
        id: uuid(),
        ...data
      }

      this.tweets.push(newTweet)

      return newTweet
    }

    async listByAuthor (author: string): Promise<ITweet[]> {
      const tweets = this.tweets.filter(tweet => tweet.author === author)

      return tweets
    }
}
