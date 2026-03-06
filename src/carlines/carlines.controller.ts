import { Router } from 'express'
import { ClService } from './carlines.service'
import { authMiddleware } from '../auth.middleware'
import { createUserValidator } from './carlines.validate'

export const clRouter = Router()

const clService = new ClService()

clRouter.get('/top/get', (_req, res) => {
  const tmp = clService.getTopScore()
  res.status(200).json(tmp)
})

clRouter.post('/top/set', authMiddleware, (req, res) => {
  const validation = createUserValidator.safeParse(req.body)
  if (!validation.success) {
    return res.status(400).json(validation.error)
  }

  const name = validation.data.name
  const score = validation.data.score
  
  clService.saveUserScore(name, score)
  res.send('ok')
})
