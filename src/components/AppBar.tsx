import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import StyledText from './StyledText'
import { theme } from '../ItemTheme/theme'


const styles = StyleSheet.create({
  appBar: {
    backgroundColor: theme.appBar.background,
    paddingTop: Constants.statusBarHeight + 10, 
    paddingBottom: 20, 
    paddingHorizontal: 5,
    flexDirection: 'row', 
    gap: 25,
  },
  paddingHorizontal: {
    paddingHorizontal: 15
  }
})

const AppBar = () => { 
  return (
    <View style={styles.appBar}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <StyledText appBarTextColor='textColor' textPaddingHorizontal='paddingHorizontal'>Main Tech</StyledText>
      <StyledText appBarTextColor='textColor' textPaddingHorizontal='paddingHorizontal'>Mobile App Tech</StyledText>
      <StyledText appBarTextColor='textColor' textPaddingHorizontal='paddingHorizontal'>Desktop App Tech</StyledText>
      <StyledText appBarTextColor='textColor' textPaddingHorizontal='paddingHorizontal'>Databases</StyledText>
      </ScrollView>
    </View>
  )
} 

export default AppBar