module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: ['.ios.js', '.android.js', '.js', '.json', '.jsx'],
        alias: {
          "_components": "./src/components",
          "_common": "./src/components/common",
          "_styled": "./src/components/styled",
          "_navigations": "./src/navigations",
          "_screens": "./src/screens",
          "_services": "./src/services",
          "_styles": "./src/styles",
          "_assets": "./assets",
          "_redux": "./src/redux"
        }
      }
    ]
  ]
};
