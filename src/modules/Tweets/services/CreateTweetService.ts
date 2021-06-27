import { inject, injectable } from 'tsyringe'
import vader from 'vader-sentiment'

import IPostTweetDTO from '../DTOS/IPostTweetDTO'

import ITweetsRepository from '@modules/Tweets/repositories/ITweetsRepository'
import ITweet from '../interfaces/ITweet'

@injectable()
class CreateTweetService {
  constructor (
    @inject('TweetsRepository')
    private tweetsRepository: ITweetsRepository
  ) {}

  async execute ({ author, text, link }: IPostTweetDTO): Promise<ITweet> {
    const { compound } = vader.SentimentIntensityAnalyzer.polarity_scores(text)
    const date = new Date()

    const newTweet = await this.tweetsRepository.create({ author, text, link, compound, date })

    return newTweet
  }
}

export default CreateTweetService
