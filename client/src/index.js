import React from "react";
import ReactDOM from "react-dom/client"
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'
import "../node_modules/bootstrap/dist/js/bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/jquery/dist/jquery.slim.min.js"
import "../node_modules/popper.js/dist/umd/popper.min.js"
import './index.css';
import App from './App';
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['en','ur'],
    fallbackLng: "en",
    detection: {
      order: ['cookie','htmlTag', 'localStorage',  'path', 'subdomain'],
      caches:['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    }
    
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);