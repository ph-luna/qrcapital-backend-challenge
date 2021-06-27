import ICreateTweetDTO from '../DTOS/ICreateTweetDTO'

import Tweet from '../infra/typeorm/entities/Tweet'

export default interface ITweetsRepository {
    create(data: ICreateTweetDTO): Promise<Tweet>
}
