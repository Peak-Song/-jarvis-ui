'use strict'
const path = require('path')

module.exports = {
  name: 'Jarvis',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
