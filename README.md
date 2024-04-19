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

## App Screenshots

<table>
    <tr>
        <td></td>
        <td>Welcome screen</td>
        <td>Country selector</td>
        <td>Search results</td>
        <td>Empty state</td>
    </tr>
    <tr>
        <td>iOS</td>
        <td><img src="https://github.com/AlexKolomiytsev/where-to-go/assets/15348910/28cbe100-2781-4039-80d6-e7e5c261e23d"></td>
        <td><img src="https://github.com/AlexKolomiytsev/where-to-go/assets/15348910/8651fd0d-e598-4346-8a26-1bc14ea4c42c"></td>
        <td><img src="https://github.com/AlexKolomiytsev/where-to-go/assets/15348910/9fb65883-af19-4eea-b7fe-e5796bcb4d76"></td>
        <td><img src="https://github.com/AlexKolomiytsev/where-to-go/assets/15348910/3ea19ece-3574-4cce-abf3-bd7708d65208"></td>
    </tr>
    <tr>
        <td>Android</td>
        <td><img src="https://github.com/AlexKolomiytsev/where-to-go/assets/15348910/36ad4920-47b6-4c81-9670-841d5d5b4f30"></td>
        <td><img src="https://github.com/AlexKolomiytsev/where-to-go/assets/15348910/f424dd7e-fe8c-4f33-b765-87329bdcf434"></td>
        <td><img src="https://github.com/AlexKolomiytsev/where-to-go/assets/15348910/7b6426d9-2724-4872-a047-9c9a0087b933"></td>
        <td><img src="https://github.com/AlexKolomiytsev/where-to-go/assets/15348910/3faa0ae8-67f8-4f3d-ad27-35b5bee1a3d5"></td>
    </tr>
</table>
