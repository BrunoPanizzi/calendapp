import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import propTypes from 'prop-types'

import defaultStyles from '../../styles/defaultStyles'

export default function Item({ icon, label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

Item.propTypes = {
  icon: propTypes.element.isRequired,
  label: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: defaultStyles.spacing.medium,
  },
  label: {
    fontSize: 16,
    marginLeft: defaultStyles.spacing.medium
  }
})
