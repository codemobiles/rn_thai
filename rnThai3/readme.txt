npx react-native init cmChartTS --template react-native-template-typescript


#add packages
yarn add react-native-chart-kit react-native-svg

- create the react-native.config
- setup asset folder
- npx react-native-asset      
- npx react-native run-android run-ios

# fix animation (in babel.config.js)
module.exports = {
  ... 
  plugins: ['react-native-reanimated/plugin'],
};


https://www.npmjs.com/package/react-native-chart-kit
yarn add react-native-chart-kit react-native-svg
