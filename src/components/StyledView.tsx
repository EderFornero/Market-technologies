import React from 'react'
import { Text, StyleSheet, TextStyle, TextProps, View} from 'react-native'
import Constants from 'expo-constants'

type StyledViewProps = {
  children: React.ReactNode;
  statusBar?: 'statusBar'
};

const styles = StyleSheet.create({
  statusBar: {
    marginTop: Constants.statusBarHeight
  }
})

const StyledView: React.FC<StyledViewProps> = ({
  children,
  statusBar
}) => { 
  const viewStyles = [
    statusBar === 'statusBar' && styles.statusBar
  ]
  return (
    <View style={viewStyles}>
      {children}
    </View>
  )
}


export default StyledView