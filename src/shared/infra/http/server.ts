import express from 'express'

import serverRoutes from './routes'

const server = express()
const PORT = 7777

server.use(serverRoutes)

server.listen(PORT, () => {
  console.log(`O servidor esta online! PORTA: ${PORT}`)
})
