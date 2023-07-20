import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, Text, View } from "react-native";

import Button from "./src/Button";
import { useCookie } from "./src/use-cookie";
import { useTranslation } from "./src/use-translation";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const { locale, t, setLocale } = useTranslation();
  const { cookieKey } = useCookie();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);

  if (locale === null) return null;

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
