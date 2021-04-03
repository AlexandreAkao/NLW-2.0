import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import HeaderFilter from '../../components/HeaderFilter';

import styles from './styles';

export default function TeacherList() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  
  function handleToggleFilterVisible() {
    setIsFiltersVisible(prev => !prev);
  }

  return (
    <View style={styles.container}>
      <PageHeader 
        title="Proffys disponíveis" 
        headerRight={(
          <BorderlessButton onPress={handleToggleFilterVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        )}
      >
        {isFiltersVisible && <HeaderFilter setTeachers={setTeachers} />}
      </PageHeader>

      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {teachers.map(teacher => <TeacherItem key={teacher.id} teacher={teacher} />)}
      </ScrollView>
    </View>
  )
}
