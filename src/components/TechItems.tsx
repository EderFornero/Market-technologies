import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { Technology } from '../data/technologies'
import StyledText from './StyledText'

type TechnologyItemProps = Technology


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    flex: 1,
  },
  containerPadding: {
    padding: 20, 
    paddingVertical: 5
  },
  image: {
    width: 48, 
    height: 48,
    margin: 'auto'
  }, 
  rowDirection: {
    flexDirection: 'row'
  }, 
  padding: {
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  paddingDescription: {
    paddingHorizontal: 8,
    paddingVertical: 5
  }
})

const Stats: React.FC<TechnologyItemProps> = ({rating, dailyUsage, difficulty}) => {
  return (
    <View style={styles.container}>
      <View>
      <StyledText alignCenter='center' fontSize='subtitle' fontWeight='bold'>{rating}</StyledText>
      <StyledText alignCenter='center' fontSize='subtitle'>Rating</StyledText>
      </View>

      <View>
      <StyledText alignCenter='center' fontSize='subtitle' fontWeight='bold'>{dailyUsage}%</StyledText>
      <StyledText alignCenter='center' fontSize='subtitle'>Daily Usage</StyledText>
      </View>

      <View>
      <StyledText alignCenter='center' fontSize='subtitle' fontWeight='bold'>{difficulty}</StyledText>
      <StyledText alignCenter='center' fontSize='subtitle'>Difficulty</StyledText>
      </View>
    </View>
  )
}

const TechItem: React.FC<TechnologyItemProps> = ({id, name, description, rating, dailyUsage, difficulty, image}) => {
  return (
    <View key={id} style={styles.containerPadding}>
      <View style={styles.rowDirection}>
          <Image style={styles.image} source={image} />
          <StyledText style={styles.padding} fontSize='title' fontWeight='bold'>{name}</StyledText>
      </View>
          <StyledText style={styles.paddingDescription} alignStart='start'>{description}</StyledText>
          <Stats id={id} name={''} description={''} rating={rating} dailyUsage={dailyUsage} difficulty={difficulty} image={image} />
    </View>
  )
}

export default TechItem