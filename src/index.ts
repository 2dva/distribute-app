import dotenv from 'dotenv'
import express, { NextFunction, Request, Response } from 'express'
import { clRouter } from './carlines/carlines.controller'
import { applyServeWebApp } from './lib/serveWebApp'

dotenv.config()

void (async () => {
  const app = express()

  const PORT = process.env.PORT || 3000

  app.use(express.json())

  await applyServeWebApp(app)

  app.use('/api/cl', clRouter)

  app.all('*a', (req, res) => {
    res.status(404).send({ message: 'Not found' })
  })

  app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack)
    res.status(500).send('Что-то не так!')
  })

  // Start the server
  app.listen(PORT, () => {
    console.info(`Server running on http://localhost:${PORT}`)
  })
})()
