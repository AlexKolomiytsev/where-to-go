# where-to-go

## Run instructions (Browser)
1. Clone the repository
2. cd into the project directory
3. Run `npm install`
4. Run `npm run dev` // see the app in the browser

## Run instructions (Native Emulator)
6. Repeat steps 1-3 above
5. Run `npm run build` // build the app artifact
6. Run `npx cap sync` // sync the app with the native project
8. Run `npx cap run ios` // run the app on the xcode emulator (Make sure you have latest xcode setup v15+ with configured iphone simulator)
9. Run `npx cap run android` // run the app on the android emulator (Make sure you have android studio setup with configured android device, also make sure to define a valid Android SDK location with an ANDROID_HOME environment variable)
