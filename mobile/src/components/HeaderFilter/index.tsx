import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import styles from './styles';

interface HeaderFilterProps {
  setTeachers: (teachersList: []) => void;
}

const HeaderFilter: React.FC<HeaderFilterProps> = ({ setTeachers }) => {
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function handleFiltersSubmit() {
    const response = await api.get('classes', {
      params: {
        subject,
        weekDay,
        time
      }
    });
    
    setTeachers(response.data);
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
          <TextInput
            value={weekDay}
            onChangeText={text => setWeekDay(text)}
            style={styles.input}
            placeholder="Qual o dia?"
            placeholderTextColor="#c1bccc"
          />
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