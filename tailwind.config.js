/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins_Regular",
        PoppinsBlack: "Poppins_Black",
        PoppinsExtraBold: "Poppins_ExtraBold",
        PoppinsSemiBold: "Poppins_SemiBold",
        PoppinsBold: "Poppins_Bold",
        PoppinsExtraLight: "Poppins_ExtraLight",
        PoppinLight: "Poppins_Light",
        PoppinMedium: "Poppins_Medium",
        PoppinThin: "Poppins_Thin",
        MitrBold: "Mitr_Bold",
        MitrSemiBold: "Mitr_SemiBold",
        Aclonica: "Aclonica",
      },
    },
  },
  plugins: [],
};
