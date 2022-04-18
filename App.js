import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import auth from '@react-native-firebase/auth'
import FlashMessage from 'react-native-flash-message'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Login from './src/pages/Login/Login'
import Signup from './src/pages/Signup/Signup'
import Message from './src/pages/Messages/Message'


const Stack = createNativeStackNavigator()
const App = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => setUserSession(!!user));
  }, [])

  if (userSession === undefined) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='LoginPage' component={Login} />
          <Stack.Screen name='SignupPage' component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MessagePage'
          component={Message}
          options={{
            title: 'Messages',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
            headerRight: () => (
              <Icon name="logout" size={28} color='black' onPress={() => auth().signOut} />
            )
          }}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}
export default App;