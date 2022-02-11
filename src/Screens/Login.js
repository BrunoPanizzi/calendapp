import { useEffect, useRef } from 'react'
import { StyleSheet, Text, View, Image, Pressable, Animated } from 'react-native'


import Calendapp from '../../assets/Calendapp.png'
import defaultStyles from '../styles/defaultStyles'

import MainLoginContent from '../components/LoginPage'


export default function Login() {
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }, [])

  
  return (
    <View style={{flex: 1, backgroundColor: defaultStyles.colors[0]}}>
      <Animated.View 
        style={[
          styles.container, 
          {
            opacity,
            transform: [{translateY: opacity.interpolate({
              inputRange:  [0, 1], 
              outputRange: [100, 0]})}]
          }
        ]}
      >
        <View>
          <Image source={Calendapp} style={styles.logo} />
        
          <MainLoginContent />
        </View>
        <Pressable onPress={() => {}}>
          <Text>texto do rodapé</Text>
        </Pressable>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: defaultStyles.spacing.large,
    paddingBottom: defaultStyles.spacing.small,
  },
  logo: {
    width: '100%',
    marginTop: defaultStyles.spacing.large * 2,
    marginBottom: defaultStyles.spacing.large * 3,
    resizeMode: 'contain'
  },

})
