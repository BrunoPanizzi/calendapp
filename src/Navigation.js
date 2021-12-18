import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './Screens/Home'
import Calendar from './Screens/Calendar'

import defaultStyles from './styles/defaultStyles';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: defaultStyles.colors.background
          },
          headerTintColor: defaultStyles.colors.text,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold', 
            fontSize: defaultStyles.text.huge
          }
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Calendar' component={Calendar} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}