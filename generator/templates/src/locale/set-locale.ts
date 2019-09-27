import { loadQuasarLanguageAsync } from '@/plugins/quasar'
import { loadVeeValidateLanguageAsync } from '@/plugins/vee-form-handler'

const loadedLanguages: string[] = []
export default function(lang: string): void {
  if (lang === 'nl') { // supported languages + type check
    if (!loadedLanguages.includes(lang)) {
      loadVeeValidateLanguageAsync(lang)
      loadQuasarLanguageAsync(lang)
      loadedLanguages.push(lang)
    }
  }
}
