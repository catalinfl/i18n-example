import { initReactI18next, useTranslation } from 'react-i18next'
import './index.css'
import React, { useEffect } from 'react'
import i18n from './i18n'

function App() {

  const { t } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage("en-US")
  }, [])

  console.log(window.navigator.language)

  return (
    <div style={{
      backgroundColor: "papayawhip",
      marginTop: "20px",
      padding: "1rem",
      textAlign: "center"
    }}>


    <h1> {t("welcome", { ns: "ts" })}</h1>

    </div>
  )
}

export default App
