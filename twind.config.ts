import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        'dark-green': '#26462F',
      },
    }
  }
} as Options;
