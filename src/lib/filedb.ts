import { logger } from './logger'

const fs = require('fs').promises
const path = require('path')
const os = require('os')

async function safeSaveJSON(filename: string, data: object) {
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

// Использование
safeSaveJSON('data.json', { user: 'admin', safe: true })
