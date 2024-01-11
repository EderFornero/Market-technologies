import React from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import StyledText from './StyledText'
import { theme } from '../ItemTheme/theme'


const styles = StyleSheet.create({
  appBar: {
    backgroundColor: theme.appBar.background,
    paddingTop: Constants.statusBarHeight + 10, 
    paddingBottom: 10, 
    paddingHorizontal: 5
  }
})

const AppBar = () => { 
  return (
    <View style={styles.appBar}>
      <StyledText>a</StyledText>
      <StyledText>a</StyledText>
      <StyledText>a</StyledText>
    </View>
  )
} 

export default AppBar