import i18n  from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {frTranslation} from "../translation/frTranslation"
import {chiTranslation} from "../translation/chiTranslation"
import {enTranslation} from '../translation/enTranslation'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // fallbackLng: "en",
    resources: {
      chi: {
        translation: {
          ...chiTranslation,
        },
      },
      fr: {
        translation: {
          ...frTranslation,
        },
      },
      en: {
        translation: {
          ...enTranslation,
        },
      },
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
      format: (value, format, lng) => {
        let returnValue = value;
        if (format === "number") {
          returnValue = new Intl.NumberFormat(lng).format(value);
        }
        return returnValue;
      },
    },
  });

export default i18n;
