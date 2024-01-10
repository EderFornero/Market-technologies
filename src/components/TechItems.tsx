import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Technology } from '../data/technologies'
import StyledText from './StyledText'

type TechnologyItemProps = Technology


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    flex: 1,
  }
})

const Stats: React.FC<TechnologyItemProps> = ({rating, dailyUsage, difficulty}) => {
  return (
    <View style={styles.container}>
      <View>
      <StyledText align='center' fontSize='subtitle' fontWeight='bold'>{rating}</StyledText>
      <StyledText align='center' fontSize='subtitle'>Rating</StyledText>
      </View>

      <View>
      <StyledText align='center' fontSize='subtitle' fontWeight='bold'>{dailyUsage}%</StyledText>
      <StyledText align='center' fontSize='subtitle'>Daily Usage</StyledText>
      </View>

      <View>
      <StyledText align='center' fontSize='subtitle' fontWeight='bold'>{difficulty}</StyledText>
      <StyledText align='center' fontSize='subtitle'>Difficulty</StyledText>
      </View>
    </View>
  )
}

const TechItem: React.FC<TechnologyItemProps> = ({id, name, description, rating, dailyUsage, difficulty}) => {
  return (
    <View key={id} style={{padding: 20, paddingVertical: 5}}>
          {/* <Image source={}></Image> */}
          <StyledText fontSize='title' fontWeight='bold'>{name}</StyledText>
          <StyledText>{description}</StyledText>
          <Stats id={id} name={''} description={''} rating={rating} dailyUsage={dailyUsage} difficulty={difficulty} image={''} />
    </View>
  )
}

export default TechItem