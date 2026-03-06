import { Router } from 'express'
import { ClService } from './carlines.service'
import { authMiddleware } from '../auth.middleware'

export const clRouter = Router()

const clService = new ClService()

clRouter.get('/top/get', (_req, res) => {
  const tmp = clService.getTopScore()
  res.status(200).json(tmp)
})

clRouter.post('/top/set', authMiddleware, (req, res) => {
    console.log(`req:`, req.body)
    // clService.saveUserScore()
    res.send('ok')
})
