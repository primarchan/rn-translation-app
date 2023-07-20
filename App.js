import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, Text, View } from "react-native";

import Button from "./src/Button";
import LoadingView from "./src/LoadingView";
import { useCookie } from "./src/use-cookie";
import { useTranslation } from "./src/use-translation";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const { locale, t, setLocale } = useTranslation();
  const { cookieKey } = useCookie();

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
      <Text>{t(cookieKey)}</Text>

      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => setLocale("ko")}
          isSelected={locale === "ko"}
          text={"KO"}
        />
        <Button
          onPress={() => setLocale("en")}
          isSelected={locale === "en"}
          text={"EN"}
        />
        <Button
          onPress={() => setLocale("ja")}
          isSelected={locale === "ja"}
          text={"JA"}
        />
        <Button
          onPress={() => setLocale("zh")}
          isSelected={locale === "zh"}
          text={"ZH"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
