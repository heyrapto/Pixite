module.exports = {
  module: {
    rules: [
      {
        test: /\.(mp3|wav|ogg)$/,
        type: "asset/resource",
        generator: {
          filename: "sounds/[name][ext][query]",
        },
      },
    ],
  },
};
