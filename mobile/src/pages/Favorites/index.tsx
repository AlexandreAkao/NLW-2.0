import React, { useState } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

export default function Favorites() {
  const [favorites, setFavorites] = useState<Teacher[]>([])

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites()
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meu proffys favoritos" />
    
      
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {favorites.map(teacher => (
          <TeacherItem 
            key={teacher.id}
            teacher={teacher}
            favorited
          />
        ))}
      </ScrollView>
    </View>
  )
}
