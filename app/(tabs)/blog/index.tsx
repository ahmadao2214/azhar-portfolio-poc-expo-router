import { View, Text, Platform } from 'react-native'
import React from 'react'
import { Link, useRouter, Stack } from 'expo-router'
import { styles } from '../../_layout'

const Blog = () => {
  const router = useRouter()
  return (
    <>
      <Stack.Screen options={{headerShown: false}} />
    <View style={{...styles.container, justifyContent: 'space-around', backgroundColor: Platform.OS === 'web' ? 'none' : '#6de89c'}}>
      <View style={{...styles.main}}>
      <Text style={styles.title}>Blog</Text>
      <Link style={styles.subtitle} href="/blog/First Post" onPress={() => {router.setParams({slug: 'First Post', name: 'first'})}}>First Post</Link>
      <Link style={styles.subtitle} href="/blog/Second Post" onPress={() => {router.setParams({slug: 'Second Post'})}}>Second Post</Link>
      <Link style={styles.subtitle} href="/blog/Third Post" onPress={() => {router.setParams({slug: 'Third Post'})}}>Third Post</Link>
      </View>
    </View>
    </>
  )
}

export default Blog