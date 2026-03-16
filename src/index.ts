import cors from 'cors'
import dotenv from 'dotenv'
import express, { NextFunction, Request, Response } from 'express'
import path from 'node:path'
import { clRouter } from './carlines/carlines.controller'
import { logger } from './lib/logger'
import { applyServeWebApp } from './lib/serveWebApp'
import { shopRouter } from './techshop/techshop.controller'

dotenv.config()

void (async () => {
  const app = express()

  app.use(
    cors({
      credentials: true,
    })
  )
  app.use(express.json())

  await applyServeWebApp(app)

  app.use('/static', express.static(path.join(__dirname, '..', 'static'), { index: false }))

  app.use('/api/cl', clRouter)

  app.use('/api/techshop', shopRouter)

  app.all('*a', (req, res) => {
    res.status(404).send({ message: 'Not found' })
  })

  app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
    logger.error(err.stack)
    res.status(500).send('Что-то не так!')
  })

  // Start the server
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    logger.info(`Server running on http://localhost:${PORT}`)
  })
})()
