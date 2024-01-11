import React from 'react'
import TechList from './TechList'
import { View } from 'react-native'
import Constants from 'expo-constants'
import AppBar from './AppBar'

const Main = () => {
  return (
    <View>
      <AppBar />
      <TechList />  
    </View>
  ) 
}

export default Main
