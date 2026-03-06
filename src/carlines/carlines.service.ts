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

export class ClService {
  getTopScore() {
    return mockData
  }

  saveUserScore(name: string, score: number) {
    if (score <= 0) return
    mockData.push([name, score])
    mockData.sort((a, b) => b[1] - a[1])
    mockData.splice(TOP_RESULTS_LIMIT - 1, 1)
    // TODO: save to file
    return true
  }
}
