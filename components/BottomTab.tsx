import { vh, vmax, vw } from "@/constants/ScreenSize";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

export default function BottomTab({ navigation }: { navigation: any }) {
  const onPress = (route: { key: any; name: any; params: any }) => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  return (
    <View
      style={styles.container}
      className="py-2 bg-white/50 absolute bottom-0 left-0 right-0 rounded-3xl"
    >
      <View style={styles.tabSection}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() =>
            onPress({ key: "notifications", name: "notifications", params: "" })
          }
          style={styles.tabContainer}
        >
          <Fontisto name="bell" size={vw * 7} />
          <Text style={[styles.tabText]}>Notifications</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => onPress({ key: "index", name: "index", params: "" })}
          style={styles.tabContainer}
        >
          <Image
            source={require("../assets/images/pokeball.png")} // Replace with your image URL
            style={styles.middleImage}
          />
          <Text style={[styles.tabText]} className="font-bold">
            Home
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabSection}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => onPress({ key: "user", name: "user", params: "" })}
          style={styles.tabContainer}
        >
          <Ionicons name="person-outline" size={vw * 7} />
          <Text style={[styles.tabText]}>User</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  tabSection: {
    flex: 1,
    flexDirection: "row",
  },
  tabContainer: {
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    color: "#222",
    fontSize: 2 * vmax,
  },
  focusedTabText: {
    color: "#673ab7",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  middleImage: {
    width: vmax * 8, // Adjust the size as needed
    height: vmax * 6.5, // Adjust the size as needed
    resizeMode: "contain",
  },
});
