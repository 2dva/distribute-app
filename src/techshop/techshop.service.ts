import { mockAllGoods, mockDealerGoods, mockDealers, type Goods } from './techshop.data'

export class ShopService {
  getDealers() {
    return mockDealers
  }

  getGoods(dealers: string[]) {
    if (dealers.length === 0) return mockAllGoods
    const goods: Goods = []
    for (const dealer of mockDealers) {
      if (dealers.includes(dealer)) goods.push(...mockDealerGoods[dealer])
    }
    return goods
  }
}
