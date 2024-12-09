// i18nForTests.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en', // Язык по умолчанию для тестов
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        sidebar: 'Sidebar content', // Пример строки перевода
      },
    },
  },
  interpolation: {
    escapeValue: false, // Отключение экранирования
  },
});

export default i18n;
