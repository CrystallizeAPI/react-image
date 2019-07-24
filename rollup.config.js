import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: {
    file: "build/index.js",
    format: "umd",
    exports: "named",
    name: pkg.name,
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
      "styled-components": "StyledComponents",
      "prop-types": "PropTypes"
    }
  },
  external: ["react", "react-dom", "styled-components", "prop-types"],
  plugins: [
    resolve({
      browser: true,
      customResolveOptions: {
        moduleDirectory: "node_modules"
      }
    }),
    commonjs({
      include: "node_modules/**"
    }),
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true
    })
  ]
};
