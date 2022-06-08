import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(new Backend(null, {
    loadPath: '/public/locales/{{lng}}/{{ns}}.json'
  }))
  // .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, 
    },
    react: {
      useSuspense: true,
    }
  }, function(){
    console.log('Im first')
  });


export default i18n;