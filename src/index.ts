import dotenv from 'dotenv'
import express, { NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import { clRouter } from './carlines/carlines.controller'
import { logger } from './lib/logger'
import { applyServeWebApp } from './lib/serveWebApp'

dotenv.config()

void (async () => {
  const app = express()

  app.use(helmet())

  app.use(express.json())

  await applyServeWebApp(app)

  app.use('/api/cl', clRouter)

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
