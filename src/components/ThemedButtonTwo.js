import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { ThemeContext } from '../context/ThemeContext';

// This button has the style function outside of the body
// I'm more of a fan of this one, but it requires each component
// to call useContext

const ThemedButtonTwo = () => {
  const { theme } = useContext(ThemeContext);
  const styles = createThemedStyleSheet(theme);
  return <Button buttonStyle={styles.buttonStyle} title="ButtonStyleOne" />;
};

const createThemedStyleSheet = (theme) => {
  return StyleSheet.create({
    buttonStyle: {
      backgroundColor: theme.primaryColor,
    },
  });
};

export default ThemedButtonTwo;
