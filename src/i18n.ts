import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import detector from "i18next-browser-languagedetector"
import romanianJSON from "./languageRO.json"
import englishJSON from "./languageEN.json"
import HttpBackend from "i18next-http-backend"

i18n.use(initReactI18next)
    .use(detector)
    .init({
      ns: ['ts', 'tere'],
      defaultNS: 'ts',
      resources: {
        en: {
          ts: romanianJSON,
          tere: englishJSON
        }
      }

    }
        )

export default i18n