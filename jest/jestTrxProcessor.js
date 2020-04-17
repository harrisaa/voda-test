const builder = require('jest-trx-results-processor')
const mkdirp = require('mkdirp')

mkdirp('.testresults')

const processor = builder({
  outputFile: '.testresults/test-results.trx', // this defaults to "test-results.trx"
})

if (process.env.CICD) {
  module.exports = function (results) { return results }
} else {
  module.exports = processor
}
