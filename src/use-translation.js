import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";
import { useEffect, useState } from "react";

const en = require("./lang/lang.en.json");
const ja = require("./lang/lang.ja.json");
const ko = require("./lang/lang.ko.json");
const zh = require("./lang/lang.zh.json");

const i18n = new I18n({ en, ja, ko, zh });

// 사용하는 기기의 언어 설정으로 셋팅
const deviceLanguage = getLocales()[0].languageCode;

export const useTranslation = () => {
  const [locale, setLocale] = useState(null);

  useEffect(() => {
    setLocale(deviceLanguage);
  }, []);

  return {
    locale,
    t: (scope) => i18n.t(scope, { locale }),
    setLocale,
  };
};
