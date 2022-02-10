module.exports = [
  {
    context: [ '/saved/**' ],
    target: 'http://localhost:8080',
    secure: false,
    logLevel: 'debug'
  }
]
