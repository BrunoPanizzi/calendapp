import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import useToggle from '../../hooks/useToggle'

import UserService from '../../services/UserService'

import defaultStyles from '../../styles/defaultStyles'

import DangerModal from '../DangerModal'

export default function Header() {
  const user = UserService.getCurrentUser()
  const [dangerModalOpen, setDangerModalOpen] = useState(false)
  const [dropdownOpen, toggleDropdownOpen] = useToggle()

  const handleDelete = async () => {
    try {
      await UserService.delete()
    } catch (error) {
      console.log(error)
    }
  }

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
      <TouchableOpacity style={styles.rows} onPress={toggleDropdownOpen}>
        <View style={styles.bulletPoint} />
        <Text style={styles.email} numberOfLines={1}>{user.email}</Text>
        <Ionicons
          name='chevron-down'
          size={24}
          style={dropdownOpen && {transform: [{rotate: '180deg'}]}}
        />
      </TouchableOpacity>
      {dropdownOpen ?
        <View style={styles.dropdownContent}>
          <TouchableOpacity>
            <Text style={styles.dropdownText}>Trocar senha</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete}>
            <Text style={styles.dropdownText}>Excluir conta</Text>
          </TouchableOpacity>
        </View> :
        null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: defaultStyles.spacing.medium,
    borderBottomWidth: 1,
    backgroundColor: defaultStyles.colors[0],
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
  },
  dropdownContent: {
    marginTop: defaultStyles.spacing.small
  },
  dropdownText: {
    marginVertical: defaultStyles.spacing.small / 2,
    color: defaultStyles.colors[600]
  }
})
