import React from 'react'
import { View, Text } from 'react-native'
import technologies from '../data/technologies'

const TechList = () => {
  return (
    <View>
      {technologies.map((tech, i) => (
        <View key={i}>
          <Text>{tech.id}</Text>
        </View>
      ))}
    </View>
  )

}

export default TechList