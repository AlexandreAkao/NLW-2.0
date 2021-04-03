import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

import { Teacher } from '../TeacherItem';
import api from '../../services/api';

import styles from './styles';

interface HeaderFilterProps {
  setTeachers: (teachersList: []) => void;
  setIsFiltersVisible: (isFiltersVisible: boolean) => void;
  setFavorites: (favorites: []) => void;
}

const HeaderFilter: React.FC<HeaderFilterProps> = ({ 
  setTeachers,
  setIsFiltersVisible,
  setFavorites
}) => {
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function handleFiltersSubmit() {
    loadFavorites();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(response.data);
    setIsFiltersVisible(false);
  }

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => teacher.id); 

        setFavorites(favoritedTeachersIds);
      }
    })
  }

  return (
    <View style={styles.searchForm}>
      <Text style={styles.label}>Matéria</Text>
      <TextInput
        value={subject}
        onChangeText={text => setSubject(text)}
        style={styles.input}
        placeholder="Qual a matéria?"
        placeholderTextColor="#c1bccc"
      />

      <View style={styles.inputGroup}>
        <View style={styles.inputBlock}>
        
          <Text style={styles.label}>Dia da semana</Text>
          <View style={styles.pickerContainer}>
            <Picker 
              style={styles.input}
              itemStyle={styles.input}
              selectedValue={week_day}
              onValueChange={(itemValue, _) => setWeekDay(itemValue)}
            >
              <Picker.Item label="Domingo"       value="0" />
              <Picker.Item label="Segunda-feira" value="1" />
              <Picker.Item label="Terça-feira"   value="2" />
              <Picker.Item label="Quarta-feira"  value="3" />
              <Picker.Item label="Quinta-feira"  value="4" />
              <Picker.Item label="Sexta-feira"   value="5" />
              <Picker.Item label="Sábado"        value="6" />
            </Picker>
          </View>
        </View>
        <View style={styles.inputBlock}>
        
          <Text style={styles.label}>Horário</Text>
          <TextInput
            value={time}
            onChangeText={text => setTime(text)}
            style={styles.input}
            placeholder="Qual o horário?"
            placeholderTextColor="#c1bccc"
          />
        </View>
      </View>
    
      <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
        <Text style={styles.submitButtonText}>Filtrar</Text>
      </RectButton>
    </View>
  )
}

export default HeaderFilter;