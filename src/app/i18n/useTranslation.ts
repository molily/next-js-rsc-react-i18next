import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

const fallbackLng = 'en';
const supportedLngs = [ fallbackLng, 'de' ] as const;

const useTranslation = async (lng?: string) => {
  const finalLng = lng || fallbackLng;

  const i18nInstance = createInstance();

  await i18nInstance.
    use(initReactI18next).
    init({
      // debug: true,
      supportedLngs,
      fallbackLng,
      lng,
      resources: {
        en: { hello: 'Hello world!' }
      }
    });

  return {
    t: i18nInstance.getFixedT(finalLng),
    i18n: i18nInstance
  };
};

export { supportedLngs, useTranslation };
