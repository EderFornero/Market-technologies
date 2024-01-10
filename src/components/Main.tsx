import React from 'react'
import TechList from './TechList'
import { View } from 'react-native'
import Constants from 'expo-constants'

const Main = () => {
  return (
    <View style={{marginTop: Constants.statusBarHeight}}>
      <TechList />  
    </View>
  ) 
}

export default Main
