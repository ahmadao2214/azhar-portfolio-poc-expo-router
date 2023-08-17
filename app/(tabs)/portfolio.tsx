import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../_layout'

const Portfolio = () => {    
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Portfolio</Text>
        <Text style={styles.subtitle}>Check out my portfolio</Text>
      </View>
    </View>
  )
}

export default Portfolio