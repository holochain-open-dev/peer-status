// vite.config.js
import checker from "vite-plugin-checker";

export default {
  root: "./demo",
  plugins: [checker({ typescript: true })], // e.g. use TypeScript check
};
