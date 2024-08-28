import { vmax } from "@/constants/ScreenSize";
import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/LoginBG.png")}
        style={styles.image}
      >
        <View className="flex flex-row items-center gap-4 self-start mx-4 my-6">
          <Text
            className="font-bold text-neutral-200 font-MitrSemiBold"
            style={{ fontSize: 7 * vmax }}
          >
            PokéTech
          </Text>
          <Image source={require("../assets/images/pokeball.png")} />
        </View>
        <View className="my-6 bg-yellow-500 rounded-full">
          <Link
            href="/explore/"
            style={{ fontSize: 4 * vmax }}
            className="font-bold text-neutral-900 px-4 py-2 font-PoppinsBold"
          >
            Start Viewing
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 2 * vmax,
  },
});
