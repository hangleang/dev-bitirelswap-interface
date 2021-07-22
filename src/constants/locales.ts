import { t } from '@lingui/macro'

export const SUPPORTED_LOCALES = [
  // 'af-ZA',
  // 'ar-SA',
  // 'ca-ES',
  // 'cs-CZ',
  // 'da-DK',
  'de-DE',
  // 'el-GR',
  'en-US',
  'es-ES',
  // 'fi-FI',
  'fr-FR',
  // 'he-IL',
  // 'hu-HU',
  // 'id-ID',
  'it-IT',
  'ja-JP',
  'km-KH',
  'ko-KR',
  // 'nl-NL',
  // 'no-NO',
  // 'pl-PL',
  // 'pt-BR',
  // 'pt-PT',
  'ro-RO',
  'ru-RU',
  // 'sr-SP',
  // 'sv-SE',
  // 'tr-TR',
  // 'uk-UA',
  // 'vi-VN',
  'zh-CN',
  'zh-TW',
] as const
export type SupportedLocale = typeof SUPPORTED_LOCALES[number]

export const DEFAULT_LOCALE: SupportedLocale = 'en-US'

export const LOCALE_LABEL: { [locale in SupportedLocale]: string } = {
  // 'af-ZA': 'Afrikaans',
  // 'ar-SA': 'العربية',
  // 'ca-ES': 'Català',
  // 'cs-CZ': 'čeština',
  // 'da-DK': 'dansk',
  'de-DE': 'Deutsch',
  // 'el-GR': 'ελληνικά',
  'en-US': 'English',
  'es-ES': 'Español',
  // 'fi-FI': 'Suomalainen',
  'fr-FR': 'français',
  // 'he-IL': 'עִברִית',
  // 'hu-HU': 'Magyar',
  // 'id-ID': 'bahasa Indonesia',
  'it-IT': 'Italiano',
  'ja-JP': '日本語',
  'km-KH': 'ខ្មែរ',
  'ko-KR': '한국어',
  // 'nl-NL': 'Nederlands',
  // 'no-NO': 'norsk',
  // 'pl-PL': 'Polskie',
  // 'pt-BR': 'português',
  // 'pt-PT': 'português',
  'ro-RO': 'Română',
  'ru-RU': 'русский',
  // 'sr-SP': 'Српски',
  // 'sv-SE': 'svenska',
  // 'tr-TR': 'Türkçe',
  // 'uk-UA': 'Український',
  // 'vi-VN': 'Tiếng Việt',
  'zh-CN': '中文 ( 中国 )',
  'zh-TW': '中文 ( 台灣 )',
}

export const LANGUAGES: {
  [x in SupportedLocale]: { flag: string; language: string; dialect?: string }
} = {
  'en-US': {
    flag: '/images/flags/en-flag.png',
    language: t`English`,
  },
  'de-DE': {
    flag: '/images/flags/de-flag.png',
    language: t`German`,
  },
  'it-IT': {
    flag: '/images/flags/it-flag.png',
    language: t`Italian`,
  },
  'ru-RU': {
    flag: '/images/flags/ru-flag.png',
    language: t`Russian`,
  },
  'ro-RO': {
    flag: '/images/flags/ro-flag.png',
    language: t`Romanian`,
  },
  'km-KH': {
    flag: '/images/flags/kh-flag.png',
    language: t`Khmer`,
  },
  'zh-CN': {
    flag: '/images/flags/ch-flag.png',
    language: t`Chinese`,
    dialect: '简',
  },
  'zh-TW': {
    flag: '/images/flags/ch-flag.png',
    language: t`Chinese`,
    dialect: '繁',
  },
  'es-ES': {
    flag: '/images/flags/es-flag.png',
    language: t`Spanish`,
  },
  'ko-KR': {
    flag: '/images/flags/ko-flag.png',
    language: t`Korean`,
  },
  'ja-JP': {
    flag: '/images/flags/ja-flag.png',
    language: t`Japanese`,
  },
  'fr-FR': {
    flag: '/images/flags/fr-flag.png',
    language: t`French`,
  },
}
