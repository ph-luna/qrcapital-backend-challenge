import { Request, Response, NextFunction, response } from 'express'

import ServerError from './ServerError'

export default function GlobalExceptionHandler (
  error: Error,
  __: Request,
  res: Response,
  _: NextFunction
) {
  if (error instanceof ServerError) {
    return res.status(error.statusCode).json({
      message: error.message
    })
  }

  console.error(error)

  return response.status(500).json({
    message: 'Internal Server Error'
  })
}
