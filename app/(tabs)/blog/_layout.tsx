import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { Platform } from 'react-native'
import * as Device from 'expo-device'; // TODO: Refactor

const _layout = () => {
  const { slug, name } = useLocalSearchParams();
  return (
    <Stack screenOptions={{headerShown: Platform.OS === 'web' ? false : true, headerTitle: 'hi', contentStyle: {backgroundColor: '#6de89c'}}}/> // TODO: Fix headerTitle
  )
}

export default _layout