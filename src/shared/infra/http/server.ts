import 'reflect-metadata'
import 'express-async-errors'
import '@shared/typeorm'
import '@shared/containers'

import express from 'express'

import Routes from './routes'
import validateJsonBody from './middlewares/validateJsonBody'
import GlobalExceptionHandler from '@shared/errors/GlobalExceptionHandler'

const server = express()
const PORT = process.env.PORT || 7777

server.use(express.json({ verify: validateJsonBody }))
server.use(Routes)
server.use(GlobalExceptionHandler)

server.listen(PORT, () => {
  console.log(`🚀 O servidor esta online! PORTA: ${PORT}`)
})
