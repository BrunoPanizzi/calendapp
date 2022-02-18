import { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import defaultStyles from '../styles/defaultStyles'

import Toggle from '../components/Toggle'
import ToggleGroup from '../components/ToggleGroup'

const toggleConfig = {
  headColor: {
    on:  defaultStyles.colors[500],
    off: defaultStyles.colors[200]
  },
  trackColor: {
    on:  defaultStyles.colors[200],
    off: defaultStyles.colors[800]
  },
  width: 48
}

export default function Configuration() {
  const [configs, setConfigs] = useState([
    {
      sectionName: 'Notificações',
      items: [
        {
          title: 'alsdkfj',
          value: false
        }
      ]
    },
    {
      sectionName: 'Outra coise',
      items: [
        {
          title: 'asdfsdfdsj',
          value: false
        },
        {
          title: 'blublu',
          value: false
        },
      ]
    },

  ])

  // what the actual fuck
  // I hope that i wake up tomorrow feeling like a genius to fix this crap
  // it may not happen
  const toggleValueBySectionNameAndTitle = (sectionName, title) => setConfigs(prev => {
    const sectionIndex = prev.findIndex(section =>
      section.sectionName === sectionName
    )
    const settingIndex = prev[sectionIndex].items.findIndex(item =>
      item.title === title
    )

    const value = prev[sectionIndex].items[settingIndex].value

    let finalArr = [...prev]

    finalArr[sectionIndex].items[settingIndex].value = !value

    return finalArr
  })


  return (
    <ScrollView style={styles.container} contentContainerStyle={{padding: defaultStyles.spacing.medium}}>
      {configs.map(section => (
        <View style={styles.sectionContainer}>

          <Text style={styles.sectionHeader}>{section.sectionName}</Text>
          {section.items.map(setting => (
            <ToggleGroup label={setting.title}>
              <Toggle
                {...toggleConfig}
                value={setting.value}
                onChange={() => toggleValueBySectionNameAndTitle(section.sectionName, setting.title)}
              />
            </ToggleGroup>
          ))}

        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.colors[0],

    // justifyContent: 'center',
    // alignItems: 'center'
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: defaultStyles.colors[600],
    marginBottom: defaultStyles.spacing.small
  },
  sectionContainer: {
    borderBottomWidth: 1,
    borderColor: defaultStyles.colors[100],
    marginBottom: defaultStyles.spacing.medium
  }
})
