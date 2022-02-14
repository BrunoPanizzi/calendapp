import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import UserService from '../../services/UserService'

import defaultStyles from '../../styles/defaultStyles'

export default function Header() {
  const user = UserService.getCurrentUser()

  return (
    <View style={styles.container}>
      <View style={styles.rows}>
        <Text style={styles.title}>Sua conta</Text>
        <TouchableOpacity onPress={UserService.signOut}>
          <Text style={[styles.title, styles.exit]}>Sair</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.accountDetail} /* TODO create dropdown menu */ >
        <View style={styles.bulletPoint} />
        <Text style={styles.email} numberOfLines={1}>{user.email}</Text>
        <Entypo name='chevron-down' size={24} color={defaultStyles.colors[700]} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: defaultStyles.spacing.medium,
    borderBottomWidth: 1,
    borderColor: defaultStyles.colors[100]
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: defaultStyles.colors[700],
    marginBottom: defaultStyles.spacing.medium
  },
  exit: {
    color: defaultStyles.colors.danger
  },
  accountDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bulletPoint: {
    backgroundColor: defaultStyles.colors[500],
    width: 12,
    aspectRatio: 1,
    borderRadius: 99
  },
  email: {
    flex: 1,
    marginHorizontal: defaultStyles.spacing.small,
    fontSize: 14,
    color: defaultStyles.colors[800]
  }
})
