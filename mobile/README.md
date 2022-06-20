# GdzieJestSZOP - mobile app

Mobile app is designed to work on Android devices only. We havent implemented IOS version yet.

## Set up enviroment

The easiest way to set up enviroment is to follow [this instructions](https://reactnative.dev/docs/environment-setup). Remember to pick _React Native CLI Quickstart_, not the one for Expo.

Also you need to generate your own Google Maps API key. We recomend creating _secret.properties_ file in _android_ catalog to store it. You should name the key _gmpApiKey_.
For exampltle

```
gmpApiKey=<my_secret_key_here>
```

## Run the code

To run this code you need to install node modules

```bash
npm install
```

Then you have to run app itself

```bash
npx react-native run-android
```
