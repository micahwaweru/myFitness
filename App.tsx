import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import List from './app/screens/List';
import Workouts from './app/screens/Workouts';





const Stack = createNativeStackNavigator();




export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={List} options={{title: 'Home'}}></Stack.Screen>
          <Stack.Screen name='Workouts' component={Workouts} options={{title: 'Overview'}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
