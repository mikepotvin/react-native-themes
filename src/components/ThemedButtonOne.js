import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { ThemeContext } from '../context/ThemeContext';

// This button will have the style directly in the body on the component
// I'm not a fan of this because it makes the component harder to read

const ThemedButtonOne = () => {
  const { theme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    buttonStyle: {
      backgroundColor: theme.primaryColor,
    },
  });
  return <Button buttonStyle={styles.buttonStyle} title="ButtonStyleOne" />;
};

export default ThemedButtonOne;
