import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';

import themes from './src/themes';

import App from './src';

export default function Main() {


  return (
    <ThemeProvider theme={themes.dark}>
      <App />
    </ThemeProvider>
  );
}