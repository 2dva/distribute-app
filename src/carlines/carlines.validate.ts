import z from 'zod'

const regExpName = /^[_а-яА-Яa-zA-Z0-9]{3,6}$/

export const createUserValidator = z.object({
  name: z.string().regex(regExpName, 'Name should be from 3 to 6 symbols long'),
  score: z.number().int().min(10).max(999999),
})
