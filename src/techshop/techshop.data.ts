export const mockDealers = ['5c6de8ff', '2e049c2d', '0fda452b']

export const mockAllGoods = [
  { name: 'Python', id: 'python', price: 5.35, image: '/logo/python.png' },
  { name: 'Go', id: 'go', price: 7.55, image: '/logo/go.png' },
  { name: 'Node.js', id: 'nodejs', price: 9.99, image: '/logo/node.png' },
  { name: 'С#', id: 'csharp', price: 9.99, image: '/logo/ch.png' },
  { name: 'VS Code', id: 'vscode', price: 10.25, image: '/logo/code.png' },
  { name: 'Sublime', id: 'sublime', price: 17.4, image: '/logo/sublime.png' },
  { name: 'Vim', id: 'vim', price: 99.99, image: '/logo/vim.png' },
  { name: 'WebStorm', id: 'webstorm', price: 33.43, image: '/logo/webstorm.png' },
  { name: 'Vue', id: 'vue', price: 50.35, image: '/logo/vue.png' },
  { name: 'React', id: 'react', price: 66.6, image: '/logo/react.png' },
  { name: 'Angular', id: 'angular', price: 3.75, image: '/logo/angular.png' },
  { name: 'Sass', id: 'sass', price: 11.11, image: '/logo/sass.png' },
]

export type Goods = typeof mockAllGoods
export type DealerGoods = Record<string, Goods>

export const mockDealerGoods: DealerGoods = {
  '5c6de8ff': [
    { name: 'Python', id: 'python', price: 5.35, image: '/logo/python.png' },
    { name: 'Go', id: 'go', price: 7.55, image: '/logo/go.png' },
    { name: 'Node.js', id: 'nodejs', price: 9.99, image: '/logo/node.png' },
    { name: 'С#', id: 'csharp', price: 9.99, image: '/logo/ch.png' },
  ],
  '2e049c2d': [
    { name: 'VS Code', id: 'vscode', price: 10.25, image: '/logo/code.png' },
    { name: 'Sublime', id: 'sublime', price: 17.4, image: '/logo/sublime.png' },
    { name: 'Vim', id: 'vim', price: 99.99, image: '/logo/vim.png' },
    { name: 'WebStorm', id: 'webstorm', price: 33.43, image: '/logo/webstorm.png' },
  ],
  '0fda452b': [
    { name: 'Vue', id: 'vue', price: 50.35, image: '/logo/vue.png' },
    { name: 'React', id: 'react', price: 66.6, image: '/logo/react.png' },
    { name: 'Angular', id: 'angular', price: 3.75, image: '/logo/angular.png' },
    { name: 'Sass', id: 'sass', price: 11.11, image: '/logo/sass.png' },
  ],
}
