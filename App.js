import { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, Text, View } from "react-native";

import Button from "./src/Button";
import LoadingView from "./src/LoadingView";
import { useCookie } from "./src/use-cookie";
import { useTranslation } from "./src/use-translation";
import { useDate } from "./src/use-date";
import { SafeAreaView } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const { locale, t, setLocale, format } = useTranslation();
  const { cookieKey } = useCookie();
  const { year, month, day } = useDate();

  const toodayText = format(t("today_is"), year, month, day);
  const cookieText = t(cookieKey);
  const locales = ["en", "ja", "ko", "zh", "es"];

  useEffect(() => {
    if (cookieKey !== "") {
      setIsLoaded(true);
    }
  }, [cookieKey]);

  useEffect(() => {
    if (locale !== null) {
      SplashScreen.hideAsync();
    }
  }, [locale]);

  if (!isLoaded) return <LoadingView />;

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay={true}
        resizeMode="cover"
        source={require("./assets/background.json")}
        style={{ position: "absolute", zIndex: -1 }}
      />

      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.topContainer}>
          <Text style={styles.todayText}>{toodayText}</Text>
          <Text style={styles.cookieText}>{cookieText}</Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.buttonsContainer}>
            {locales.map((item) => {
              return (
                <Button
                  key={item}
                  onPress={() => setLocale(item)}
                  isSelected={locale === item}
                  text={item.toUpperCase()}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  todayText: {
    fontFamily: "RIDIBatang",
    position: "absolute",
    top: 70,
    fontSize: 13,
    color: "#8b658f",
  },
  cookieText: {
    fontFamily: "RIDIBatang",
    fontSize: 22,
    color: "#372538",
    textAlign: "center",
    marginHorizontal: 30,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 25,
  },
});
