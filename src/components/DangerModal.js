import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import propTypes from 'prop-types'

import defaultStyles from '../styles/defaultStyles'

import Button from './Button'

export default function DangerModal({ title, message, visible, onClose, dangerousAction, dangerLabel }) {
  const handleDangerousAction = () => {
    onClose()
    dangerousAction()
  }

  return (
    <Modal
      animationType='fade'
      transparent
      statusBarTranslucent
      visible={visible}
      onRequestClose={onClose}
    >

      <Pressable
        style={styles.overlay}
        onPress={onClose}
      >
        <Pressable style={styles.contentContainer} /* Pressable is the new View */>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>

          <View style={{flexDirection: 'row', marginTop: defaultStyles.spacing.medium}}>
            <View style={{flex: 1, marginRight: defaultStyles.spacing.medium}}>
              <Button onPress={onClose} outline>
                <Text style={styles.cancelLabel}>Cancelar</Text>
              </Button>
            </View>
            <View style={{flex: 1}}>
              <Button onPress={handleDangerousAction} danger>
                <Text style={styles.dangerLabel}>{dangerLabel}</Text>
              </Button>
            </View>
          </View>

        </Pressable>
      </Pressable>

    </Modal>
  )
}

DangerModal.propTypes = {
  title: propTypes.string.isRequired,
  message: propTypes.string.isRequired,
  visible: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
  dangerousAction: propTypes.func.isRequired,
  dangerLabel: propTypes.string.isRequired
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    maxWidth: '80%',
    backgroundColor: defaultStyles.colors[0],
    padding: defaultStyles.spacing.medium,
    borderRadius: defaultStyles.borderRadius
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: defaultStyles.colors[700],
    marginBottom: defaultStyles.spacing.medium
  },
  cancelLabel: {
    fontSize: 20,
    color: defaultStyles.colors[500],
    fontWeight: 'bold'
  },
  dangerLabel: {
    fontSize: 20,
    color: defaultStyles.colors[0],
    fontWeight: 'bold'
  },
  message: {
    fontSize: 16,
    color: defaultStyles.colors[700],
    textAlign: 'center'
  }
})
