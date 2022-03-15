module.exports = {
  comments: false,
  presets: ["@babel/preset-env", "@babel/preset-typescript"],
  plugins: [
    ["inline-dotenv"],
    ["@babel/plugin-proposal-class-properties"],
    [
      "babel-plugin-root-import",
      {
        paths: [
          {
            rootPathSuffix: "./",
            rootPathPrefix: "@/",
          },
          {
            rootPathSuffix: "./app",
            rootPathPrefix: "~/",
          },
        ],
      },
    ]
  ],
  env: {
    minify: {
      presets: ["babel-preset-minify"],
    },
  },
};
