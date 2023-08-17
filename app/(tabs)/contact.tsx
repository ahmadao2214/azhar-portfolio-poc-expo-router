import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../_layout'

const Contact = () => {
  return (
    <View style={styles.container}>
    <View style={styles.main}>
      <Text style={styles.title}>Contact</Text>
      <Text style={styles.subtitle}>How to contact me</Text>
    </View>
    </View>
  )
}

export default Contact