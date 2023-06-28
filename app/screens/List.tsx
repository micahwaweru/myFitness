import { View, Text, Button } from 'react-native'
import React from 'react'

const List = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button onPress={() => navigation.navigate('Workouts')} title='Open Workouts'/>
    
  </View>
  )
}

export default List