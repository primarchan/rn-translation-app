import { useEffect, useRef } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

export default () => {
  //   const ref = useRef(null);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       ref.current?.play();
  //     }, 2000);
  //   }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        autoPlay={true}
        // ref={ref}
        style={{ width: 150 }}
        source={require("../assets/loading.json")}
      />
    </View>
  );
};
