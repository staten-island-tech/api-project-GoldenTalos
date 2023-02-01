const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(_dirname, "index.html"),
        nested: resolve(_dirname, "character.html"),
        nested: resolve(_dirname, "search.html"),
      },
    },
  },
});
