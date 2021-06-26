import { Router } from 'express'

const tweetsRouter = Router()

tweetsRouter.get('/', (req, res) => {
  res.json({ okay: true })
})

export default tweetsRouter
