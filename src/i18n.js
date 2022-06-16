import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
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
    },
    resources: {
      en: {
        translation: {
          from: "from",
          to: "to",
          convince: "convince me",
          title: "That's why you shloud take the bike",
          text: "Taking the bike is good for the environment, your health but also for your wallet! For this <1>{{distance}}</1> bike ride you will burn <3>{{calories}}</3>. And because you bikes dont have polution <5>{{co2}}</5> less CO2. On top of that you will save <7>€ {{money}}</7>!",
          new: "new route",
          processing: "Getting ready",
          error: "Oh no! An error has occurred."
        }
      },
      de: {
        translation: {
          from: "von",
          to: "nach",
          convince: "überzeuge mich",
          title: "Deiner Weg. Deine Entscheidung.",
          text: "Das Fahrrad ist nicht nur gut für die Umwelt und deine Gesundheit sonder auch für das Portomonee. Für deine <1>{{distance}}</1> Fahrrad strecke verbrennst du <3>{{calories}}</3>. Kein CO2 Ausstoß heißt <5>{{co2}}</5> weniger CO2 in der Luft. Da obendrauf sparst du <7>€ {{money}}</7> an Sprit!",
          new: "neue Berechnung",
          processing: "Nur noch kurz den Sattel stellen!",
          error: "Oh nein! Da ist etwas schief gelaufen."
        }
      }
    }
  });


export default i18n;