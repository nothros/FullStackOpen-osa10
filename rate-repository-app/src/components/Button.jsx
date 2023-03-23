import { Text as NativeText, StyleSheet } from 'react-native';
import { Text, Pressable, View } from 'react-native';
import FormikTextInput from './FormikTextInput';

import theme from '../../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorWhite: {
    color: theme.colors.white,
  },
  colorError: {
    color: theme.colors.textError,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Button = ({ color, fontColor, fontSize, fontWeight, onSubmit, buttonText }) => {
  const buttonStyle = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    fontColor == 'white' && styles.colorWhite,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'heading' && styles.fontSizeHeading,

    fontWeight === 'bold' && styles.fontWeightBold,
  ];
  return (
    <Pressable style={buttonStyle} onPress={onSubmit}>
      <Text style={buttonStyle}>{buttonText}</Text>
    </Pressable>
  )

  return <NativeText style={buttonStyle} {...props} />;
};

export default Button;