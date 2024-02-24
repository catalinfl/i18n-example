import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import detector from "i18next-browser-languagedetector"

console.log(detector)

i18n.use(initReactI18next)
    .use(detector)
    .init({
      resources: {
        en: {
          translation: {
                "Test": "123",
                "Test2": "1234"
          }
        },
        ro: {
            translation: {
                "Test": "127",
                "Test2": "12345 {{count}}"
            }
        }
      },
      lng: "ro",
      fallbackLng: "ro",
      interpolation: {
        escapeValue: false
      }
    })

export default i18n