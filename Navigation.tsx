import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

//screens
import MainTechScreen from './src/screens/MainTechScreen'
import DesktopAppTechScreen from './src/screens/DesktopAppTechScreen'
import MobileAppTechScreen from './src/screens/MobileAppTechScreen'
import DatabasesScreen from './src/screens/DatabasesScreen'

const Tab = createMaterialBottomTabNavigator()

function MyTabs() { 
  return (
    <Tab.Navigator>
      <Tab.Screen name='MainTech' component={MainTechScreen} />
      <Tab.Screen name='MobileTech' component={MobileAppTechScreen} />
      <Tab.Screen name='DesktopTech' component={DesktopAppTechScreen} />
      <Tab.Screen name='Databases' component={DatabasesScreen} />
    </Tab.Navigator>
  )
}


const Navigation = () => { 
  return <NavigationContainer><MyTabs/></NavigationContainer>
}

export default Navigation