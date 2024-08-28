import { vh, vmax, vw } from "@/constants/ScreenSize";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import {
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  View,
  Text,
} from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../../assets/images/Homepage-bg.png")}
      className="flex-1"
    >
      <ScrollView
        contentContainerStyle={{
          paddingTop: vh * 10,
          paddingHorizontal: vw * 8,
          rowGap: vh * 6,
        }}
      >
        <View className="" style={{ rowGap: 1.2 * vh }}>
          <Text
            className="font-bold capitalize text-white/80 font-Aclonica"
            style={{ fontSize: 6 * vmax }}
          >
            Hi! Trainer 👋
          </Text>
          <Text
            className="font-normal capitalize text-white/50 font-Aclonica"
            style={{ fontSize: 4 * vmax }}
          >
            welcome back
          </Text>
        </View>
        <View className="flex-row flex-wrap justify-between">
          <Link href="/explore/pokemons">
            <LinearGradient
              colors={["#E80101", "#900101"]}
              start={{ x: 1, y: -0.8 }}
              end={{ x: 0, y: 1 }}
              locations={[0, 0.7868]}
              style={{ borderRadius: 4 * vw }}
            >
              <View
                className="rounded-2xl flex-row items-center justify-center gap-x-2"
                style={{
                  paddingVertical: vh * 1.5,
                  minWidth: 18 * vmax,
                }}
              >
                <Text
                  className="text-white font-semibold font-PoppinsSemiBold"
                  style={{ fontSize: 2 * vmax }}
                >
                  Pokemon
                </Text>
                <Image
                  source={require("../../assets/images/pokeball-icon.png")}
                  className="w-12 h-12"
                />
              </View>
            </LinearGradient>
          </Link>
          <LinearGradient
            colors={["#FFC122", "#C68E00"]}
            start={{ x: 1, y: -0.8 }}
            end={{ x: 0, y: 1 }}
            locations={[0, 0.7868]}
            style={{
              borderRadius: 4 * vw,
            }}
          >
            <View
              className="flex-row items-center justify-center rounded-2xl gap-x-2"
              style={{
                paddingVertical: vh * 1.5,
                minWidth: 18 * vmax,
              }}
            >
              <Text
                className="text-white font-semibold font-PoppinsSemiBold"
                style={{ fontSize: 2 * vmax }}
              >
                Moves
              </Text>
              <Image
                source={require("../../assets/images/flame-icon.png")}
                className="w-12 h-12"
              />
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
