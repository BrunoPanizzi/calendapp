import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import propTypes from 'prop-types'

import { parseDate, parseTime } from '../../utils/parseDate'

import defaultStyles from '../../styles/defaultStyles'

export default function Event({ title, colorHue, description, start, end }) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {borderColor: `hsla(${colorHue}, 100%, 50%, 0.5)`}
      ]}
      onPress={() => console.log('figure out how to expand event')}
    >
      <View style={[styles.half, {marginHorizontal: defaultStyles.spacing.small}]}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <View style={[styles.rows, {justifyContent: 'space-between', flexWrap: 'wrap'}]}>
          <Text style={{marginBottom: 4}}>Início: {parseTime(start)}</Text>
          {end && <Text>Fim: {`${parseDate(end, false)}, ${parseTime(end)}`}</Text>}
        </View>
      </View>

      <View style={styles.half}>
        <Text style={[styles.description, !description && {color: 'gray'}]} numberOfLines={3}>
          {description ? description : 'Sem descrição para esse evento'}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

Event.propTypes = {
  title: propTypes.string.isRequired,
  colorHue: propTypes.number.isRequired,
  start: propTypes.number.isRequired,
  end: propTypes.number,
  description: propTypes.string,

}

const styles = StyleSheet.create({
  container: {
    marginVertical: defaultStyles.spacing.medium / 2,
    flexDirection: 'row',
    borderLeftWidth: 4,
  },
  rows: {
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  half: {
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: defaultStyles.colors[800],
    textAlignVertical: 'center',
    textAlign: 'center',
    flex: 1
  }
})
