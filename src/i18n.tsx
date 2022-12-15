import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import De from './languages/de.json';
import En from './languages/en.json';
import Hr from './languages/hr.json';

const resources = {
  En,
  De,
  Hr,
};

export const availableLanguages = Object.keys(resources);

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  defaultNS: 'common',
  fallbackLng: 'En',
});
