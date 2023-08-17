
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';

import { Text, View } from 'react-native';
import { styles } from '../../_layout';

export default function Page() {
  const { slug } = useLocalSearchParams();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.subtitle}>Blog post: {slug}</Text>
        </View>
      </View>
    </>
  );
}


