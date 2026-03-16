import z from 'zod'

export const createDealersValidator = z.object({
  dealers: z.string().trim()
})
