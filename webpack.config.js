const environment = (process.env.NODE || 'DEVELOPMENT').trim()

if (environment === 'DEVELOPMENT') {
  module.exports = require('./webpack-config/webpack.dev')
} else {
  module.exports = require('./webpack-config/webpack.prod')
}
