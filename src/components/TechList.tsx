import React from 'react'
import { Text, FlatList, Image } from 'react-native'
import technologies from '../data/technologies'
import TechItems from './TechItems'

const TechList = () => {
  return (
    <FlatList
    data={technologies}
    ItemSeparatorComponent={() => <Text> </Text>}
    renderItem={({item: tech}) => (
        <TechItems {...tech} />
    )}
    >
    </FlatList>
  )

}

export default TechList