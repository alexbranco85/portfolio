import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import ptBR from '../public/locales/ptBR';
// import ptBR from '../public/locales/ptBR'

const ptBR = {
  "Hello,": "Olá,"
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({

    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    resources: {
      ptBR: {
        translation: {
          ...ptBR
        }
      }
    },
  });

export default i18n;