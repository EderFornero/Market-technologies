import React from 'react'
import { createMaterialBottomTabNavigator, MaterialBottomTabNavigationOptions } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

// screens
import MainTechScreen from './src/screens/MainTechScreen'
import DesktopAppTechScreen from './src/screens/DesktopAppTechScreen'
import MobileAppTechScreen from './src/screens/MobileAppTechScreen'
import DatabasesScreen from './src/screens/DatabasesScreen'

const Tab = createMaterialBottomTabNavigator()

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='MainTech'
      screenOptions={({ route }): MaterialBottomTabNavigationOptions => ({
        tabBarIcon: ({ focused, color}) => {
          let iconName: string = '';

          if (route.name === 'MainTech') {
            iconName = 'home';
          } else if (route.name === 'MobileTech') {
            iconName = 'tablet-android';
          } else if (route.name === 'DesktopTech') {
            iconName = 'desktop-tower-monitor';
          } else if (route.name === 'Databases') {
            iconName = 'database';
          }

          return <MaterialCommunityIcons name={iconName as any} size={25}  color={color} />;
        },
      })}
    >
      <Tab.Screen name='MainTech' component={MainTechScreen} />
      <Tab.Screen name='MobileTech' component={MobileAppTechScreen} />
      <Tab.Screen name='DesktopTech' component={DesktopAppTechScreen} />
      <Tab.Screen name='Databases' component={DatabasesScreen} />
    </Tab.Navigator>
  )
}

const Navigation = () => {
  return <NavigationContainer><MyTabs /></NavigationContainer>
}

export default Navigation
