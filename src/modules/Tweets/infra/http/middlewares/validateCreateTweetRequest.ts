import { Request, Response, NextFunction } from 'express'
import Ajv, { JSONSchemaType } from 'ajv'

import ServerError from '@shared/errors/ServerError'

interface IDataRequest {
  author: string
  text: string
  link: string
}

export default async function validateCreateTweetRequest (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const ajv = new Ajv()
  const data = req.body

  const schema: JSONSchemaType<IDataRequest> = {
    type: 'object',
    properties: {
      author: { type: 'string' },
      text: { type: 'string' },
      link: { type: 'string' }
    },
    required: ['author', 'text', 'link'],
    additionalProperties: false
  }

  const validate = ajv.compile(schema)

  if (!validate(data)) {
    throw new ServerError('Invalid params.')
  }

  return next()
}
