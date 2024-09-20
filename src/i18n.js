import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Optional for language detection

// Import your translation JSON files
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES }
};

i18n
  .use(LanguageDetector) // Optional for language detection
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Fallback language
    debug: true, // For debugging purposes
    interpolation: {
      escapeValue: false, // React already escapes by default
    }
  });

export default i18n;
