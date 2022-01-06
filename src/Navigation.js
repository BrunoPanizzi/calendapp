import { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Animated, Dimensions } from 'react-native'

import Home from './Screens/Home'
import Calendar from './Screens/Calendar'
import Login from './Screens/Login'

import { AuthContext } from './contexts/AuthContext'

import defaultStyles from './styles/defaultStyles'

const Stack = createStackNavigator()

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted
          ),
        },
      ],
    },
  };
};

function MainNavigation() {  
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: defaultStyles.colors[0]
        },
        headerTintColor: defaultStyles.colors[700],
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold', 
          fontSize: defaultStyles.text.huge
        },
        presentation: 'card',
        gestureEnabled: true,
        gestureResponseDistance: 999,
        transitionSpec: {
          open: config,
          close: config,
        },
        cardStyleInterpolator: forSlide
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Calendar' component={Calendar} />
    </Stack.Navigator>
  )
}

export default function Navigation() {
  const { auth } = useContext(AuthContext)
  
  return (
    <NavigationContainer>
      {auth ? 
        <MainNavigation /> : 
        <Login /> 
      }
    </NavigationContainer>
  )
}