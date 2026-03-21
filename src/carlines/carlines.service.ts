import { safeLoadJSON } from '../lib/filedb'

type ScorePair = [string, number]

const TOP_RESULTS_LIMIT = 10

const mockData = [
  ['Serv1', 18000],
  ['Serv2', 9000],
  ['Spec', 3000],
  ['Server', 1000],
  ['zx', 500],
  ['Serv3', 200],
  ['This_should_not_render', 200],
] as ScorePair[]

const jsonUrl = '../data/score.json'

export class ClService {
  data: ScorePair[] | null = null

  constructor() {
    safeLoadJSON(jsonUrl).then((someData: unknown) => {
      console.log(`data`, someData)

      if (someData && Array.isArray(someData)) {
        this.data = someData as ScorePair[]
      }
    })
  }

  getTopScore() {
    return this.data
  }

  saveUserScore(name: string, score: number) {
    mockData.push([name, score])
    mockData.sort((a, b) => b[1] - a[1])
    mockData.splice(TOP_RESULTS_LIMIT - 1, 1)
    // TODO: save to file
    // safeSaveJSON(jsonUrl, mockData)
    return true
  }
}
