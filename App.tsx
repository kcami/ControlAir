import { StatusBar } from 'expo-status-bar';
import { theme } from "./src/themes/themes"
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { NativeBaseProvider } from 'native-base';
import {Rotas} from './src/components/Rotas';
const LinearGradient = require('expo-linear-gradient').LinearGradient;

export default function App() {
  return (
    <NativeBaseProvider theme={theme} config={config}>
      <Rotas/>
    </NativeBaseProvider>
  );
}

const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};
