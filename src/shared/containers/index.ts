import { container } from 'tsyringe'

import ITweetsRepository from '@modules/Tweets/repositories/ITweetsRepository'
import TweetsRepository from '@modules/Tweets/infra/typeorm/repositories/TweetsRepository'

container.registerSingleton<ITweetsRepository>('TweetsRepository', TweetsRepository)
