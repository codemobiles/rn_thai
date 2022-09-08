
# Set 1
yarn add react-native-elements react-native-vector-icons
npx react-native link react-native-vector-icons
yarn add react-native-safe-area-context
npx react-native link react-native-safe-area-context


------------
# Set 2
yarn add @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
yarn add @react-native-community/async-storage axios react-native-iphone-x-helper react-native-permissions   

npx react-native link react-native-gesture-handler
npx react-native link react-native-reanimated
npx react-native link react-native-screens
npx react-native link react-native-safe-area-context
npx react-native link @react-native-community/masked-view      
npx react-native link @react-native-community/async-storage    
npx react-native link react-native-permissions


-------------
# in package.json
"a": "react-native run-android",
"i": "react-native run-ios",



----------------
# Set 3 Map 
yarn add axios react-native-segmented-control-tab react-native-maps react-native-open-maps @react-native-community/geolocation
npx react-native link react-native-reanimated
npx react-native link react-native-maps 
npx react-native link @react-native-community/geolocation


#Android Permission
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/> 
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />


<meta-data
            android:name="com.google.android.geo.API_KEY"
            android:value="xxxxxx"/>



# ios
--------------------------
permissions_path = '../node_modules/react-native-permissions/ios'

pod 'Permission-LocationAccuracy', :path => "#{permissions_path}/LocationAccuracy"
pod 'Permission-LocationAlways', :path => "#{permissions_path}/LocationAlways"
pod 'Permission-LocationWhenInUse', :path => "#{permissions_path}/LocationWhenInUse"


cd ios
pod install
cd ..
delete old app
clear product in xcode
npx react-native run-ios
