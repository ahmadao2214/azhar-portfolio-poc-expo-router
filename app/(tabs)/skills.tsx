import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../_layout'

const Skills = () => {
  return (
    <View style={styles.container}>
    <View style={styles.main}>
      <Text style={styles.title}>Skills</Text>
      <Text style={styles.subtitle}>Some skillz</Text>
    </View>
    </View>
  )
}

export default Skills