const fs = require('fs')
const { EOL } = require('os')

module.exports = function(api) {
  api.extendPackage({
    scripts: {
      'dev': 'vue-cli-service serve',
      'serve': 'vue-cli-service serve',
      'build': 'vue-cli-service build',
      'lint': 'vue-cli-service lint --fix && laura-wert-cli tslint && cd tests-e2e/ && laura-wert-cli tslint  **/*.ts **/**/*.ts && cd ..',
      'test:e2e': 'cypress open',
      'test:e2eh': 'vue-cli-service test:e2e --headless',
      'test': 'vue-cli-service test:unit --include tests/setup.ts tests/unit/ tests/integration',
      'test:unit': 'vue-cli-service test:unit --include tests/setup.ts tests/unit/',
      'test:unit-s': 'vue-cli-service test:unit --include tests/setup.ts',
      'test:integration': 'vue-cli-service test:unit --include tests/setup.ts tests/integration/',
    },
    dependencies: {
      '@laura-wert/vee-form-handler': '^6.0.1',
      '@laura-wert/vue-helpers': '^3.0.0',
      '@quasar/extras': '^1.3.1',
      '@types/chai-as-promised': '^7.1.2',
      'axios': '^0.19.0',
      'dotenv-safe': '^8.1.0',
      'quasar': '^1.1.4',
      'vee-validate': '3.0.8',
      'vue': '^2.6.10',
      'vue-class-component': '^7.1.0',
      'vue-property-decorator': '^8.2.2',
      'vue-router': '^3.1.2',
    },
    'devDependencies': {
      '@cypress/webpack-preprocessor': '^4.1.0',
      '@laura-wert/axios-handlers': '^1.0.0',
      '@laura-wert/vue-test-helpers': '^2.5.9',
      '@types/node': '^12.7.2',
      '@types/sinon': '^7.0.13',
      '@types/sinon-chai': '^3.2.3',
      'babel-plugin-transform-imports': '^1.5.1',
      'chai-as-promised': '^7.1.1',
      'cross-env': '^5.2.0',
      'eslint-plugin-chai-friendly': '^0.4.1',
      'flush-promises': '1.0.2',
      'sinon': '^7.4.1',
      'sinon-chai': '^3.3.0',
      'tslint-no-unused-expression-chai': '^0.1.4',
    },
  })
  api.onCreateComplete(() => {
    const content = fs.readFileSync('package.json', { encoding: 'utf-8' })
    const lines = content.split(/\r?\n/g)
    const tslintIdx = lines.findIndex(line => line.match(/"laura-wert-cli tslint",/))
    if (tslintIdx === -1) {
      const gitAdddIdx = lines.findIndex(line => line.match(/"git add"/))

      lines.splice(gitAdddIdx, 0, `      "laura-wert-cli tslint",`)
      fs.writeFileSync('package.json', lines.join(EOL), { encoding: 'utf-8' })
    }
  })
}
