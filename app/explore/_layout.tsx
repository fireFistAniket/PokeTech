import { Tabs } from "expo-router";
import React from "react";

import BottomTab from "@/components/BottomTab";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <BottomTab {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="notifications"
      />
      <Tabs.Screen name="user" />
      <Tabs.Screen name="pokemons" options={{ headerShown: false }} />
    </Tabs>
  );
}
