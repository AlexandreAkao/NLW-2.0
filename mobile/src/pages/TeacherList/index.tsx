import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

export default function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />

      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />

      </ScrollView>
    </View>
  )
}
