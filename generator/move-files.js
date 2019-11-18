const fs = require('fs')

module.exports = function(api) {
  api.onCreateComplete(() => {
    try {
      fs.renameSync('./tests/unit/.eslintrc.js', 'tests/eslintrc.js')
    } catch (e) { }
  })
}
