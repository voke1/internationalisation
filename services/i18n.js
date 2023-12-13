import i18next from 'i18next';
import english from '../locales/english.json';
import french from '../locales/french.json';
import italian from '../locales/italian.json';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    return callback(RNLocalize.getLocales()[0].languageCode);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: english,
      fr: french,
      it: italian,
    },
    react: {
      useSuspence: false,
    },
  });

export default i18next;
