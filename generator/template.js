const fs = require('fs')
var rimraf = require('rimraf')
module.exports = function(api) {
  api.render('./templates')

  // remove files
  api.onCreateComplete(() => {
    try {
      fs.unlinkSync('src/assets/logo.png')
    } catch (e) {}
    try {
      fs.unlinkSync('src/components/HelloWorld.vue')
    } catch (e) {}
    try {
      fs.unlinkSync('src/router.ts')
    } catch (e) {}
    try {
      fs.unlinkSync('src/store.ts')
    } catch (e) {}
    try {
      fs.unlinkSync('tests/unit/example.spec.ts')
    } catch (e) {}

    rimraf('src/views', () => {})
    rimraf('tests/e2e', () => {})
  })
}
