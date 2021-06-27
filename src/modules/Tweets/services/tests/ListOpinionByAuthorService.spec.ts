import 'reflect-metadata'

import FakeTweetsRepository from '@modules/Tweets/repositories/fakes/FakeTweetsRepository'

import ListOpinionByAuthorService from '../ListOpinionByAuthorService'
import CreateTweetService from '../CreateTweetService'

let fakeTweetsRepository: FakeTweetsRepository
let listOpinionByAuthorService: ListOpinionByAuthorService
let createTweetService: CreateTweetService

describe('ListOpinionByAuthorService', () => {
  beforeEach(() => {
    fakeTweetsRepository = new FakeTweetsRepository()

    createTweetService = new CreateTweetService(fakeTweetsRepository)
    listOpinionByAuthorService = new ListOpinionByAuthorService(fakeTweetsRepository)
  })

  it('should be able to list opinion from a author', async () => {
    await createTweetService.execute({
      author: 'John Doe',
      link: 'https://www.google.com.br',
      text: 'VADER is very smart, handsome, and funny'
    })

    const { opinion, avg } = await listOpinionByAuthorService.execute('John Doe')

    expect(opinion).toBe('positive')
    expect(avg).toBe(0.85)
  })
})
