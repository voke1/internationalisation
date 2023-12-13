import i18next from 'i18next';
import english from './english.json';
import french from './french.json';
import italian from './italian.json';
import {initReactI18next} from 'react-i18next';

i18next.use(initReactI18next).init({
  lng: 'en',
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
