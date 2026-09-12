import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        abyss: "#0B1A26", // page background: deep sea at night
        deep: "#10283A", // raised surfaces
        tide: "#21435B", // lines and borders
        foam: "#EDF0EA", // primary text
        mist: "#9DB0BD", // secondary text
        sun: "#F7C531", // reggae yellow
        rasta: "#EC5B46", // reggae red
        palm: "#4BB468", // reggae green
        sky: "#93A1FF", // interactive highlight, from the original slide deck blue
        coffee: {
          bean: "#342E2F",
          roast: "#8C6553",
          crema: "#E6C182",
          milk: "#FDF8F5",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        page: "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
