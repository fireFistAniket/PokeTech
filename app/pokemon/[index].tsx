import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, usePathname } from "expo-router";
import { vh, vmax, vw } from "@/constants/ScreenSize";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Pokemon = () => {
  const pathname = usePathname();
  const { index } = useLocalSearchParams();
  const [pokemon, setPokemon] = useState<any>({});
  const [flipped, setFlipped] = useState<boolean>(false);
  const flipValue = useSharedValue(0);

  useEffect(() => {
    async function getPokemonDetails() {
      const res = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/pokemon/${index}`
      );

      const data = await res.json();
      setPokemon(data);
    }
    getPokemonDetails();
  }, [pathname]);

  const flipCard = () => {
    // Toggle the flip state
    setFlipped(!flipped);
    flipValue.value = withTiming(flipValue.value === 0 ? 180 : 0, {
      duration: 500,
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateY: `${flipValue.value}deg` }],
    };
  });

  return (
    <>
      <ImageBackground
        source={require("../../assets/images/Homepage-bg.png")}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            marginVertical: 10 * vmax,
          }}
        >
          <Text
            className="text-white uppercase font-black font-PoppinsBlack"
            style={{ fontSize: 15 * vw }}
          >
            {pokemon.name}
          </Text>
          <View className="relative">
            <Pressable
              className="absolute rounded-full border border-white p-2 bg-white/20 z-10"
              style={{
                right: 10 * vw,
                top: 10 * vh,
                width: 4.5 * vmax,
                height: 4.5 * vmax,
              }}
              onPress={flipCard}
            >
              <Ionicons
                name="sparkles-sharp"
                color={"#eab308"}
                size={3 * vmax}
              />
            </Pressable>
            <Animated.Image
              source={{
                uri: flipped
                  ? pokemon.sprites?.other?.home.front_shiny
                  : pokemon.sprites?.other?.home.front_default,
              }}
              sharedTransitionTag="tag"
              style={[{ width: 90 * vw, height: 90 * vw }, animatedStyle]}
              resizeMode="contain"
            />
          </View>
          <View style={{ minHeight: 20 * vmax }}></View>
          <View className="flex-row justify-between items-center w-full">
            <Pressable className="bg-[rgb(35,35,35)] px-4">
              <AntDesign
                name="arrowleft"
                size={10 * vmax}
                color={"rgba(221, 221, 221, 1)"}
              />
            </Pressable>
            <Pressable className="bg-[rgb(35,35,35)] px-4">
              <AntDesign
                name="arrowright"
                size={10 * vmax}
                color={"rgba(221, 221, 221, 1)"}
              />
            </Pressable>
          </View>
          <Text
            style={{ fontSize: 5 * vw }}
            className="font-semibold font-PoppinsSemiBold text-yellow-600"
          >
            Click to View Info
          </Text>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default Pokemon;

const styles = StyleSheet.create({});
