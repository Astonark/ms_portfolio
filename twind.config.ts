import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        green: {
          950: '#26462F',
          1000: '#4F7158',
        },
        brown: {
          950: "#91503A"
        },
      },
    },
    fontFamily: {
      sans: [
        "Lexend",
      ]
    },
  }
} as Options;
