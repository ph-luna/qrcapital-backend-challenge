import { inject, injectable } from 'tsyringe'
import vader from 'vader-sentiment'

import IPostTweetDTO from '../DTOS/IPostTweetDTO'

import ITweetsRepository from '@modules/Tweets/repositories/ITweetsRepository'

@injectable()
class CreateTweetService {
  constructor (
    @inject('TweetsRepository')
    private tweetsRepository: ITweetsRepository
  ) {}

  async execute ({ author, text, link }: IPostTweetDTO): Promise<string> {
    const { compound } = vader.SentimentIntensityAnalyzer.polarity_scores(text)
    const date = new Date()

    await this.tweetsRepository.create({ author, text, link, compound, date })

    return 'Tweet salvo com sucesso.'
  }
}

export default CreateTweetService
