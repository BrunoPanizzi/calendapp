import { StyleSheet, Text, View } from 'react-native'
import propTypes from 'prop-types'

import defaultStyles from '../styles/defaultStyles'

export default function Event({ title, colorHue, type, start, end }) {
  return (
    <View style={[styles.container, {borderColor: `hsla(${colorHue}, 100%, 50%, 0.5)`}]}>
      <Text>{title}</Text>
    </View>
  )
}

Event.propTypes = {
  title: propTypes.string.isRequired,
  colorHue: propTypes.number.isRequired,
  type: propTypes.oneOf(['single', 'span']).isRequired,
  start: propTypes.number.isRequired,
  end: propTypes.number
}

const styles = StyleSheet.create({
  container: {
    marginVertical: defaultStyles.spacing.medium / 2,
    borderLeftWidth: 4,
    padding: defaultStyles.spacing.small
  }
})
