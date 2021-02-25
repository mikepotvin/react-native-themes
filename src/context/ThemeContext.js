// import { useColorScheme } from 'react-native-appearance';
import React, {createContext} from 'react';
import {StatusBar} from 'react-native';
// import DarkTheme from '../themes/DarkTheme';
import LightTheme from '../themes/LightTheme';

export const ThemeContext = createContext({
  theme: LightTheme,
});

export const ThemeProvider = ({children}) => {
  // Getting the device color theme, this will also work with react-native-web
  const colorScheme = useColorScheme(); // Can be dark | light | no-preference
  const theme = colorScheme === 'light' ? LightTheme : DarkTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
      }}>
      <StatusBar
        barStyle={theme.statusBarStyle}
        backgroundColor={theme.statusBarBackgroundColor}
      />
      {children}
    </ThemeContext.Provider>
  );
};
