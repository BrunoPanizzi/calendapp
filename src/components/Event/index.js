import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import propTypes from 'prop-types'

import { parseDate, parseTime } from '../../utils/parseDate'

import defaultStyles from '../../styles/defaultStyles'

export default function Event({ title, colorHue, description, type, start, end }) {
  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        {borderColor: `hsla(${colorHue}, 100%, 50%, 0.5)`}
      ]}
      onPress={() => 'figure out how to expand event'}
    >
      <View style={[styles.half, {marginHorizontal: defaultStyles.spacing.small}]}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <View style={styles.rows}>
          <View style={styles.profilePicture}/>
          <Text style={styles.userName}>nome da pessoa</Text>
        </View>

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
  type: propTypes.oneOf(['single', 'span']).isRequired,
  creatorId: propTypes.string,
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
  },
  userName: {
    fontSize: 14,
    color: 'gray',
  },
  profilePicture: {
    width: 24, 
    aspectRatio: 1, 
    backgroundColor: defaultStyles.colors[200], 
    borderRadius: 99, 
    marginVertical: defaultStyles.spacing.small,
    marginRight: defaultStyles.spacing.small
  }
})
