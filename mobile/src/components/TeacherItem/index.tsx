import React from 'react'
import { View, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

const TeacherItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'http://github.com/alexandreakao.png '}} 
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Alexandre Akira</Text>
          <Text style={styles.subject}>Merdão</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        ksodkdoapkdapokapdakposdaopdkaodkdoakoakdo
        { '\n' }{ '\n' }
        opksa doakdoap skdaopdkoakaod kadk
        oadka sopdkapo dasksdkdpaodk ops
      </Text>
      
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'  '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            <Image source={unfavoriteIcon} />
            <Image source={heartOutlineIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem
