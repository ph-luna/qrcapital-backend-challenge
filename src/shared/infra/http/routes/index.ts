import { Router } from 'express'

const serverRouter = Router()

serverRouter.get('/', (req, res) => {
    res.json({ okay: true })
})

export default serverRouter