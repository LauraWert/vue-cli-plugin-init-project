import VeeFormHandler, { IPartialDictionary, localize } from '@laura-wert/vee-form-handler'
import { VueConstructor } from 'vue'

export default ({ Vue }: { Vue: VueConstructor }): void => {
  Vue.use(VeeFormHandler, {
    locale: 'nl',
    dictionaries: [],
  })

  // extend('numeric', numeric)
}

export async function loadVeeValidateLanguageAsync(lang: 'nl'): Promise<void> {
  const customNl: { default: IPartialDictionary } =
    await import(/* webpackChunkName: "lang-[request]" */ `src/locale/${lang}/vee-validate`)
  const vendorNl: { default: IPartialDictionary } =
    await import(/* webpackChunkName: "lang-[request]" */ `vee-validate/dist/locale/${lang}.json`)

  localize(lang, customNl.default)
  localize(lang, vendorNl.default)
}
