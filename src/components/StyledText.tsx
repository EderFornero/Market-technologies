import React from 'react'
import { Text, StyleSheet, TextStyle, TextProps} from 'react-native'
import { theme } from '../ItemTheme/theme'

type StyledTextProps = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
  fontSize?: 'title' | 'subtitle';
  fontWeight?: 'bold' | 'normal';
  style?: TextStyle;
  align?: 'center'
};


const styles = StyleSheet.create({
  primaryColor: {
    color: theme.colors.primary
  },
  secondaryColor: {
    color: theme.colors.secondaryText
  },
  text: { 
    color: theme.colors.primaryText,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal as any
  },
  boldText: {
    fontWeight: theme.fontWeights.bold as any
  },
  titleText: {
    fontSize: theme.fontSizes.title
  },
  subtitleText: {
    fontSize: theme.fontSizes.subtitle
  },
  align: {
    textAlign: theme.aligns.center as any
  }
})

const StyledText: React.FC<StyledTextProps & TextProps> = ({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  align,
  ...restOfProps
}) => {
  const textStyles = [
    styles.text, 
    color === 'primary' && styles.primaryColor,
    color === 'secondary' && styles.secondaryColor, 
    fontSize === 'title' && styles.titleText,
    fontSize === 'subtitle' && styles.subtitleText,
    fontWeight === 'bold' && styles.boldText,
    align === 'center' && styles.align,
    style
  ]
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  )
}

export default StyledText