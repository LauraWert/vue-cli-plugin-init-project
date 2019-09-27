const fs = require('fs')
const { EOL } = require('os')

module.exports = function(api) {

  api.onCreateComplete(() => {
    const contentMain = fs.readFileSync(api.entryFile, { encoding: 'utf-8' })
    const lines = contentMain.split(/\r?\n/g)

    // remove default vue import because of the new import with types
    //ap.injectImports will fails if you re-run the install
    const oldImportVueIdx = lines.findIndex(line => line.match(/import Vue from 'vue'/))
    if (oldImportVueIdx !== -1) {
      lines.splice(oldImportVueIdx, 1,
        `import setLocale from '@/locale/set-locale'${EOL}import ie10support from 'src/plugins/ie-10-support'${EOL}import quasar from 'src/plugins/quasar'${EOL}import veeFormHandler from 'src/plugins/vee-form-handler'${EOL}import 'src/styles/index.styl'${EOL}import Vue, { CreateElement, VNode } from 'vue'`,
      )
    }

    //type the render function
    const renderIdx = lines.findIndex(line => line.match(/render/))
    lines[renderIdx] = '  render: (h: CreateElement): VNode => h(App),'

    //install plugins
    const ie10supportIdx = lines.findIndex(line => line.match(/ie10support\(\)/))
    if (ie10supportIdx === -1) {
      const newVueIdx = lines.findIndex(line => line.match(/new Vue/))

      lines.splice(newVueIdx, 0,
        `ie10support()${EOL}quasar({ Vue })${EOL}veeFormHandler({ Vue })${EOL}setLocale(process.env.VUE_APP_LOCALE || 'en')${EOL}`,
      )
    }

    fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: 'utf-8' })
  })
}
