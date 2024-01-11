import React from 'react'
import { Text, StyleSheet, TextStyle, TextProps} from 'react-native'
import { theme } from '../ItemTheme/theme'

type StyledTextProps = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
  fontSize?: 'title' | 'subtitle';
  fontWeight?: 'bold' | 'normal';
  style?: TextStyle;
  alignCenter?: 'center';
  alignStart?: 'start';
  alignEnd?: 'end'; 
  appBarBackground?: 'background'; 
  appBarTextColor?: 'textColor'
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
  alignCenter: {
    textAlign: theme.aligns.center as any
  },
  alignStart: {
    textAlign: theme.aligns.start as any
  }, 
  alignEnd: {
    textAlign: theme.aligns.end as any  
  },
  appBarBackground: { 
    backgroundColor: theme.appBar.background
  },
  appBarTextColor: {
    color: theme.appBar.textColor
  }
})

const StyledText: React.FC<StyledTextProps & TextProps> = ({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  alignCenter,
  alignStart,
  alignEnd,
  appBarBackground,
  appBarTextColor,
  ...restOfProps
}) => {
  const textStyles = [
    styles.text, 
    color === 'primary' && styles.primaryColor,
    color === 'secondary' && styles.secondaryColor, 
    fontSize === 'title' && styles.titleText,
    fontSize === 'subtitle' && styles.subtitleText,
    fontWeight === 'bold' && styles.boldText,
    alignCenter === 'center' && styles.alignCenter,
    alignStart === 'start' && styles.alignStart,
    alignEnd === 'end' && styles.alignEnd,
    appBarBackground === 'background' && styles.appBarBackground, 
    appBarTextColor === 'textColor' && styles.appBarTextColor,
    style
  ]
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  )
}

export default StyledText