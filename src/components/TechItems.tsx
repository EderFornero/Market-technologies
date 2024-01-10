import React from 'react'
import { View, Text } from 'react-native'
import { Technology } from '../data/technologies';

type TechnologyItemProps = Technology

const TechItem: React.FC<TechnologyItemProps> = ({id, name, description, rating, dailyUsage}) => {
  return (
    <View key={id}>
          {/* <Image source={}></Image> */}
          <Text>{name}</Text>
          <Text>{description}</Text>
          <Text>{rating}</Text>
          <Text>{dailyUsage}</Text>
    </View>
  )
}

export default TechItem