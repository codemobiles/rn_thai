npx react-native init cmMapTS --template react-native-template-typescript

# common steps
yarn add react-native-elements react-native-vector-icons react-native-safe-area-context
yarn add @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
yarn add @react-native-community/async-storage axios react-native-iphone-x-helper react-native-permissions   
yarn add axios react-native-segmented-control-tab react-native-maps react-native-open-maps @react-native-community/geolocation

- replace App.tsx
- copy src/**
- copy react-native.config.js
- update babel.config.js

npx react-native-asset      

# Android part
- update permission in AndroidManifest.xml
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/> 
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

- and in <application...
    <meta-data
            android:name="com.google.android.geo.API_KEY"
            android:value="YOUR_GOOGLE_API_KEY"/>    


# iOS part
- Update info.plist
<key>UIAppFonts</key>
	<array>
		<string>AntDesign.ttf</string>
		<string>Entypo.ttf</string>
		<string>EvilIcons.ttf</string>
		<string>Feather.ttf</string>
		<string>FontAwesome.ttf</string>
		<string>FontAwesome5_Brands.ttf</string>
		<string>FontAwesome5_Regular.ttf</string>
		<string>FontAwesome5_Solid.ttf</string>
		<string>Fontisto.ttf</string>
		<string>Foundation.ttf</string>
		<string>Ionicons.ttf</string>
		<string>MaterialCommunityIcons.ttf</string>
		<string>MaterialIcons.ttf</string>
		<string>Octicons.ttf</string>
		<string>SimpleLineIcons.ttf</string>
		<string>Zocial.ttf</string>
	</array>

- Update descripotion for this key (this privacy was added automatically)
    <key>NSLocationWhenInUseUsageDescription</key>
	<string/>

- Update Podfile after target end
  pod 'GoogleMaps'
  pod 'Google-Maps-iOS-Utils'
  permissions_path = '../node_modules/react-native-permissions/ios'
  pod 'Permission-LocationAccuracy', :path => "#{permissions_path}/LocationAccuracy"
  pod 'Permission-LocationAlways', :path => "#{permissions_path}/LocationAlways"
  pod 'Permission-LocationWhenInUse', :path => "#{permissions_path}/LocationWhenInUse"

- cd ios and pod install
- open xcode to add AirGoogleMaps to Your XCode Project
  + right-click root xcode project and choose add Files to Project
  + add folder AirGoogleMaps in ../node_modules/react-native-map/ios/AirGoogleMaps (select add to target and don't need to copy item)
  + Go to BuildSettings and Header Search Paths and add 
    $(SRCROOT)/../node_modules/react-native-maps/lib/ios/AirMaps
  + Go to BuildSettings and Preprocessor and Macros and add this both debug and release 
    HAVE_GOOGLE_MAPS=1
    HAVE_GOOGLE_MAPS_UTILS=1
  + Update AppDeletate.mm
    
    - add this import 
    #import <GoogleMaps/GMSServices.h>

    - add this in didFinishLaunching...
    [GMSServices provideAPIKey:@"AIzaSyDjn0Uytv_FSUwwpOUTVCvL4vKYU7Ev7VU"];

Run
yarn android
yarn ios (require to close and open vscode again, otherwise there will be error)
!!! Important for M1
set Xcode to run in Rosseta mode