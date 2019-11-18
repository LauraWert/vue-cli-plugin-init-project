const fs = require('fs')
const { EOL } = require('os')

module.exports = function(api) {
  api.extendPackage({
    scripts: {
      'dev': 'vue-cli-service serve',
      'serve': 'vue-cli-service serve',
      'build': 'vue-cli-service build',
      'lint': 'vue-cli-service lint src tests tests-e2e *.js',
      'test:e2e': 'cypress open',
      'test:e2eh': 'vue-cli-service test:e2e --headless',
      'test:unit': 'vue-cli-service test:unit --include tests/unit/setup.ts tests/unit/',
      'test:unit-s': 'vue-cli-service test:unit --include tests/unit/setup.ts',
    },
    dependencies: {
      '@laura-wert/vee-form-handler': '^6.0.1',
      '@laura-wert/vue-helpers': '^3.0.0',
      '@quasar/extras': '^1.3.1',
      '@types/chai-as-promised': '^7.1.2',
      'axios': '^0.19.0',
      'core-js': '^3.3.2',
      'dotenv-safe': '^8.1.0',
      'quasar': '^1.1.4',
      'vee-validate': '3.0.8',
      'vue': '^2.6.10',
      'vue-class-component': '^7.1.0',
      'vue-property-decorator': '^8.2.2',
      'vue-router': '^3.1.2',
      'vuex': '^3.1.1',
      'vuex-class': '^0.3.2',
      'vuex-xhr-state': '^1.0.4',
    },
    'devDependencies': {
      '@cypress/webpack-preprocessor': '^4.1.0',
      '@laura-wert/eslint-config': '^1.0.2',
      '@laura-wert/vue-test-helpers': '^2.6.0',
      '@types/node': '^12.7.12',
      '@types/sinon': '^7.5.0',
      '@types/sinon-chai': '^3.2.3',
      'babel-plugin-transform-imports': '^1.5.1',
      'chai-as-promised': '^7.1.1',
      'cross-env': '^5.2.0',
      'eslint-plugin-chai-friendly': '^0.4.1',
      'flush-promises': '1.0.2',
      'sinon': '^7.4.1',
      'sinon-chai': '^3.3.0',
    },
  })
  api.onCreateComplete(() => {
    const content = fs.readFileSync('package.json', { encoding: 'utf-8' })
    const lines = content.split(/\r?\n/g)
    const lintStagedIdx = lines
      .findIndex(line => line.match(/"lint-staged"/))
    const yarnLintStagedIdx =
      lines
        .slice(lintStagedIdx)
        .findIndex(line => line.match(/"yarn lint",/))
    if (yarnLintStagedIdx === -1) {
      const oldLintIdx = lintStagedIdx +
        lines
          .slice(lintStagedIdx)
          .findIndex(line => line.match(/"vue-cli-service lint"/))

      lines.splice(oldLintIdx, 1, `      "yarn lint",`)
      fs.writeFileSync('package.json', lines.join(EOL), { encoding: 'utf-8' })
    }
  })
}
