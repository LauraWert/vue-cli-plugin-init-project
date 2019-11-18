const fs = require('fs')
const { EOL } = require('os')

module.exports = function(api) {
  api.onCreateComplete(() => {
    const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', { encoding: 'utf-8' }))

    tsconfig.compilerOptions.strictNullChecks = true
    tsconfig.compilerOptions.resolveJsonModule = true
    tsconfig.compilerOptions.noUnusedLocals = true
    if (tsconfig.compilerOptions.types.indexOf('node') === -1) {
      tsconfig.compilerOptions.types.push('node')
      tsconfig.compilerOptions.types.push('sinon')
      tsconfig.compilerOptions.types.push('sinon-chai')
    }
    moveToBottomOfObject(tsconfig, ['types', 'paths', 'lib'])

    fs.writeFileSync('tsconfig.json', JSON.stringify(tsconfig, null, 2))
  })
}

function moveToBottomOfObject(obj, keys) {
  for (i in keys) {
    const backup = obj.compilerOptions[keys[i]]
    delete obj.compilerOptions[keys[i]]
    obj.compilerOptions[keys[i]] = backup
  }
}
