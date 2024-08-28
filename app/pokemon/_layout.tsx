import React from "react";
import { Stack } from "expo-router";

const PokemonDetailsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="[index]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default PokemonDetailsLayout;
