import { logger } from './logger'
import { promises as fs } from 'fs'
import path from 'path'
import os from 'os'

export async function safeLoadJSON(filename: string) {
  const filePath = path.join(__dirname, filename)
  const data = await fs.readFile(filePath, 'utf8')

  let jsonData: unknown | null = null
  try {
    jsonData = JSON.parse(data)
  } catch (parseError) {
    jsonData = null
    console.error('Error parsing JSON:', parseError)
  }
  return jsonData
}

export async function safeSaveJSON(filename: string, data: object) {
  const filePath = path.join(__dirname, filename)
  const tempPath = path.join(os.tmpdir(), `${filename}.tmp`)

  try {
    // 1. Запись во временный файл
    await fs.writeFile(tempPath, JSON.stringify(data), { encoding: 'utf8', mode: 0o600 })

    // 2. Атомарное перемещение (переименование)
    await fs.rename(tempPath, filePath)
    logger.info('Файл успешно сохранен')
  } catch (err) {
    logger.info('Ошибка записи:', err)
    // Попытка очистить временный файл при ошибке
    try {
      await fs.unlink(tempPath)
    } catch (e) {}
  }
}
