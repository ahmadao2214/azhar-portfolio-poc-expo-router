import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Link, Slot, Stack } from 'expo-router'

const MobileStackNav = () => (
  <Stack>
    <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
  </Stack>
)


const Layout = () => <MobileStackNav />

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

export default Layout