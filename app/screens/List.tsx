import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { FIRESTORE_DB } from '../../firebaseConfig'

useEffect(()=>{
})

const addWorkout = async ()=>{
    const doc = addDoc(collection(FIRESTORE_DB, 'workouts'), {title: 'I am a test', description: 'I am testing'})
    console.log('File: List.tsx:12 ~ addTodo ~ doc:', doc)
};
const List = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button onPress={() => navigation.navigate('Workouts')} title='Open Workouts'/>
    
  </View>
  )
}

export default List