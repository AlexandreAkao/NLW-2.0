import React from 'react'
import { View, Text } from 'react-native'
import PageHeader from '../../components/PageHeader';

import styles from './styles';

export default function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meu proffys favoritos" />
    </View>
  )
}
