import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import UserService from '../../services/UserService'

import defaultStyles from '../../styles/defaultStyles'

import DangerModal from '../DangerModal'

export default function Header() {
  const user = UserService.getCurrentUser()
  const [dangerModalOpen, setDangerModalOpen] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.rows}>
        <Text style={styles.title}>Sua conta</Text>
        <TouchableOpacity onPress={() => setDangerModalOpen(true)}>
          <Text style={[styles.title, styles.exit]}>Sair</Text>
          <DangerModal
            visible={dangerModalOpen}
            onClose={() => setDangerModalOpen(false)}
            title={'Encerrar sessão'}
            message={'Você deseja sair da sua conta?'}
            dangerousAction={UserService.signOut}
            dangerLabel={'Sair'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rows}>
        <View style={styles.bulletPoint} />
        <Text style={styles.email} numberOfLines={1}>{user.email}</Text>
      </View>

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
    justifyContent: 'space-between',
    alignItems: 'center'
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
