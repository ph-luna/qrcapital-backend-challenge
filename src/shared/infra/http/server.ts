import express from 'express'
import '@shared/typeorm'

import Routes from './routes'
import validateJsonBody from './middlewares/validateJsonBody'

const server = express()
const PORT = process.env.PORT || 7777

server.use(express.json({ verify: validateJsonBody }))
server.use(Routes)

server.listen(PORT, () => {
  console.log(`🚀 O servidor esta online! PORTA: ${PORT}`)
})
