import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../_layout'

const About = () => {
  return (
    <View style={styles.container}>
      
    <View style={styles.main}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.subtitle}>About me</Text>
    </View>
    </View>
  )
}

export default About