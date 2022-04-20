const fs = require('fs')
const path = require('path')
const delay = require('mocker-api/lib/delay')

const mockApis = {}

// 把某个目录下的所有 .js 文件内容注入到 mockApis 中
const walk = dirPath => {
  fs.readdirSync(dirPath).forEach(name => {
    const filePath = path.join(dirPath, name)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      walk(filePath)
      return
    }

    if (
      stat.isFile() &&
      filePath.endsWith('.js') &&
      filePath !== 'mock/index.js'
    ) {
      // 把 "mock/user.js" 给替换为 "./user.js"
      const api = require(filePath.replace(/^mock/, '.'))
      Object.assign(mockApis, api)
    }
  })
}

walk('./mock')

module.exports = delay(mockApis, 500)
