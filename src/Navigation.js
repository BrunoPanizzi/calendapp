import { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Animated } from 'react-native'

import Home from './Screens/Home'
import Calendar from './Screens/Calendar'
import Login from './Screens/Login'
import CreateEvent from './Screens/CreateEvent'
import Configuration from './Screens/Configuration'

import CustomDrawer from './components/CustomDrawer'

import { AuthContext } from './contexts/AuthContext'

import defaultStyles from './styles/defaultStyles'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

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

const headerConfig = {
  headerStyle: {
    backgroundColor: defaultStyles.colors[0]
  },
  headerTintColor: defaultStyles.colors[700],
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: defaultStyles.text.huge
  }
}

const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next ?
      next.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }):
      0
  )

  return {
    cardStyle: {
      opacity: progress,
      transform: [{
        translateX: Animated.multiply(progress.interpolate({
          inputRange:  [0, 1, 2],
          outputRange: [screen.width, 0, screen.width * -0.3],
          extrapolate: 'clamp',
        }), inverted),
      }],
    },
  }
}


function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        ...headerConfig,
        headerShown: true
      }}
    >
      <Drawer.Screen name='Home' component={Home} />
    </Drawer.Navigator>
  )
}

function MainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...headerConfig,
        presentation: 'card',
        gestureEnabled: true,
        gestureResponseDistance: 100,
        transitionSpec: {
          open: config,
          close: config,
        },
        cardStyleInterpolator: forSlide
      }}
    >
      <Stack.Screen
        name='Drawer'
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Calendar'
        component={Calendar}
        options={({ route }) => ({title: route.params.title})}
      />
      <Stack.Screen
        name='CreateEvent'
        component={CreateEvent}
        options={{title: 'Novo Evento'}}
      />
      <Stack.Screen
        name='Configuration'
        component={Configuration}
        options={{title: 'Configurações'}}
      />
    </Stack.Navigator>
  )
}

export default function Navigation() {
  const { user } = useContext(AuthContext)

  return (
    <NavigationContainer>
      {user ?
        <MainNavigation /> :
        <Login />
      }
    </NavigationContainer>
  )
}
