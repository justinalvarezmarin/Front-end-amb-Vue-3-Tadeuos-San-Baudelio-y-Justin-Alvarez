import { createI18n } from 'vue-i18n'

const messages = {
  ca: {
    title: 'Monitor Global',
    search_placeholder: 'Cerca conflictes...',
    loading: 'Carregant dades...',
    impact_label: 'Impacte actiu:',
    btn_details: 'Veure més',
    btn_archive: 'Arxivar',
    no_results: 'No s\'han trobat conflictes.'
  },
  en: {
    title: 'Global Monitor',
    search_placeholder: 'Search conflicts...',
    loading: 'Loading data...',
    impact_label: 'Active impact:',
    btn_details: 'View more',
    btn_archive: 'Archive',
    no_results: 'No conflicts found.'
  }
}

export default createI18n({
  legacy: false,
  locale: 'ca', // Por defecto en catalán
  fallbackLocale: 'en',
  messages
})