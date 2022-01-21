import { useRef } from 'react'
import { Platform, ActionSheetIOS, UIManager, findNodeHandle, TouchableOpacity } from 'react-native'
import propTypes from 'prop-types'


export default function OptionMenu({ options, actions, destructiveIndex, button, title, message }) {
	const inputRef = useRef()

	const handleClick = index => {
    if (actions[index]) {
			actions[index]()
		}
	}

	const handlePress = () => {
		if (Platform.OS === 'ios') {
      options.push('Cancel')
			ActionSheetIOS.showActionSheetWithOptions({ // TODO add title suport
        options: options,
        destructiveButtonIndex: destructiveIndex,
        cancelButtonIndex: options.length - 1,
        title, 
        message
      }, buttonIndex => handleClick(buttonIndex))

		} else if (Platform.OS === "android") {
		  UIManager.showPopupMenu(
		    findNodeHandle(inputRef.current),
		    options,
	    	() => console.log('something went wrong with the popup menu'),
		  	(_, i) => handleClick(i)
		  )
		}
  }

  return (
    <TouchableOpacity 
      ref={ inputRef } 
      onPress={handlePress} 
      hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
    >
      {button}
    </TouchableOpacity>
  )
}

OptionMenu.propTypes = {
  options: propTypes.array.isRequired,
  actions: propTypes.array,
  button: propTypes.node.isRequired,
  destructiveIndex: propTypes.number,
  title: propTypes.string,
  message: propTypes.string
}

OptionMenu.defaultProps = {
  actions: [],
  destructiveIndex: -1
}
