npx react-native init cmBarcodeTS --template react-native-template-typescript

npm i -g yarn

# common steps
yarn add @rneui/base @rneui/themed react-native-config
yarn add @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view 
yarn add @react-native-community/async-storage axios react-native-iphone-x-helper react-native-permissions   
yarn add react-native-svg@12.4.0 react-native-qrcode-svg react-native-camera react-native-qrcode-scanner

https://github.com/react-native-camera/react-native-camera/issues/3423
https://github.com/moaazsidat/react-native-qrcode-scanner/issues/274
yarn add deprecated-react-native-prop-types
code ./node_modules/react-native-camera/src/RNCamera.js
delete the imported ViewPropTypes from 'react-native'
add:
import {ViewPropTypes} from 'deprecated-react-native-prop-types'


- replace App.tsx
- copy src/**
- copy react-native.config.js
- update babel.config.js

npx react-native-asset      

# Android part

add this line into android/app/build.gradle
missingDimensionStrategy 'react-native-camera', 'general'
multiDexEnabled true


- update permission in AndroidManifest.xml
<uses-permission android:name="android.permission.INTERNET" />     
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.VIBRATE"/>
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />


# iOS part
- Add Icon by editing info.plist
- Add Fonts in node_modules to project without need to copy and add to targe
- https://github.com/oblador/react-native-vector-icons#installation    
  
  
- Update Info.plist  
  <key>NSCameraUsageDescription</key>
  <string>Your message to user when the camera is accessed for the first time</string>
  <key>NSMicrophoneUsageDescription</key>
  <string>Your message to user when the microphone is accessed for the first time</string>
  

- Update Podfile after target end
  permissions_path = '../node_modules/react-native-permissions/ios'
  pod 'Permission-Contacts', :path => "#{permissions_path}/Contacts"
  pod 'Permission-Microphone', :path => "#{permissions_path}/Microphone"
  pod 'Permission-Notifications', :path => "#{permissions_path}/Notifications"
  pod 'Permission-PhotoLibrary', :path => "#{permissions_path}/PhotoLibrary"
  pod 'Permission-Camera', :path => "#{permissions_path}/Camera"

- cd ios and pod install

Run
yarn android
yarn ios (if there is duplicated error about font, just remove the fonts from copy bundle resources)


# Optional
------------
3. Remove DerivedData Folder
/Users/chaiyasit/Library/Developer/Xcode/DerivedData/xxx


4. Android Deployment
 - icon android/app/main/res
 - https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=image&foreground.space.trim=1&foreground.space.pad=0&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(68%2C%20138%2C%20255)&crop=0&backgroundShape=circle&effects=elevate&name=ic_launcher_round
 - Appname in string.xml
 
  - https://reactnative.dev/docs/signed-apk-android
 - ./gradlew assembleRelease  :  apk
 - ./gradlew bundleRelease   : app bundle


5. iOS Deployment
- icon https://makeappicon.com/