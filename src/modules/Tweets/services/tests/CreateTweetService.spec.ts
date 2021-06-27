import 'reflect-metadata'

import FakeTweetsRepository from '@modules/Tweets/repositories/fakes/FakeTweetsRepository'

import CreateTweetService from '../CreateTweetService'

let fakeTweetsRepository: FakeTweetsRepository
let createTweetService: CreateTweetService

describe('CreateTweetService', () => {
  beforeEach(() => {
    fakeTweetsRepository = new FakeTweetsRepository()

    createTweetService = new CreateTweetService(fakeTweetsRepository)
  })

  it('should be able to create a tweet', async () => {
    const { id, author, link, text, compound, date } = await createTweetService.execute({
      author: 'John Doe',
      link: 'https://www.google.com.br',
      text: 'VADER is very smart, handsome, and funny'
    })

    expect(id).toBeDefined()
    expect(date).toBeDefined()
    expect(author).toBe('John Doe')
    expect(link).toBe('https://www.google.com.br')
    expect(text).toBe('VADER is very smart, handsome, and funny')
    expect(compound).toBe(0.8545)
  })
})
