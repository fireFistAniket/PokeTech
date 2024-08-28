import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { vh, vmax, vw } from "@/constants/ScreenSize";
import { Link } from "expo-router";
import Animated from "react-native-reanimated";

const uri = process.env.EXPO_PUBLIC_API_URL;

const Pokemons = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    async function getAllPokemon() {
      const res = await fetch(`${uri}/pokemon/?offset=0&limit=24`);
      const data = await res.json();
      setPokemons(data.results);
    }
    getAllPokemon();
  }, []);

  function getIndexId(url: string) {
    // Split the URL by '/' and filter out empty strings
    const parts = url.split("/").filter(Boolean);
    // Return the last part, which should be the ID
    return parseInt(parts[parts.length - 1], 10);
  }

  function getRandomColor() {
    // Generate a random integer between 0 and 16777215 (decimal representation of #FFFFFF)
    let randomInt = Math.floor(Math.random() * 16777215);

    // Convert the integer to a hexadecimal string and pad with leading zeros if necessary
    let randomColor = "#" + randomInt.toString(16).padStart(6, "0");

    return randomColor;
  }

  return (
    <>
      <ImageBackground
        source={require("../../assets/images/Homepage-bg.png")}
        className="flex-1"
        style={{ paddingVertical: vh * 12 }}
      >
        <View className="" style={{ paddingHorizontal: vw * 4 }}>
          <Text className="text-white text-3xl">Select your </Text>
          <View className="flex flex-row items-center gap-4 self-start">
            <Text className="text-4xl font-bold text-neutral-200">PokéMon</Text>
            <Image source={require("../../assets/images/pokeball.png")} />
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 1 * vmax,
            gap: 3 * vh,
          }}
        >
          {pokemons.map((item, index) => (
            <Link href={`/pokemon/${getIndexId(item.url)}`} key={index}>
              <View
                className={`items-center gap-y-2 rounded-2xl p-2`}
                style={{ backgroundColor: getRandomColor() }}
              >
                <Animated.Image
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${getIndexId(
                      item.url
                    )}.png`,
                  }}
                  sharedTransitionTag="tag"
                  style={{ width: 75, height: 75 }}
                />
                <Text className="text-white capitalize font-semibold">
                  {item.name}
                </Text>
              </View>
            </Link>
          ))}
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default Pokemons;
