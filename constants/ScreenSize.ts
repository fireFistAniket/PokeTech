import { Dimensions } from "react-native";

export const vw = Dimensions.get("window").width / 100;
export const vh = Dimensions.get("window").height / 100;

export const vmax = vw > vh ? vw : vh;
export const vmin = vw > vh ? vh : vw;
