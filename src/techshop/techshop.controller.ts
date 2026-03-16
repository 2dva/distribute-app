import { Router } from 'express'
import { ShopService } from './techshop.service'
import { createDealersValidator } from './techshop.validate'

export const shopRouter = Router()

const shopService = new ShopService()

shopRouter.get('/dealers/', (_req, res) => {
  const data = shopService.getDealers()
  res.status(200).json(data)
})

shopRouter.get('/goods/', (req, res) => {
  let dealers: string[] = []

  if (req.query.dealers) {
    const validation = createDealersValidator.safeParse(req.query)
    if (!validation.success) {
      return res.status(400).json(validation.error)
    }
    dealers = validation.data.dealers.split(',')
  }

  const data = shopService.getGoods(dealers)
  res.status(200).json(data)
})
