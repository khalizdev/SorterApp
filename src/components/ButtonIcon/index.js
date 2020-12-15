import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  IconAddSaldo,
  IconGetPoint,
  IconKiloan,
  IconKarpet,
  IconSatuan,
  IconVIP,
  IconSetrika,
  IconEkspress,
} from '../../assets';
import {WARNA_SEKUNDER} from '../../utils/constant';

const ButtonIcon = ({title, type}) => {
  const Icon = () => {
    //if (title === 'Add Saldo') return <IconAddSaldo />;

    //if (title === 'Get Point') return <IconGetPoint />;

    if (title === 'Asterisk') return <IconKiloan />;

    if (title === 'Tesla') return <IconSatuan />;

    if (title === 'Gravitation') return <IconVIP />;

    if (title === 'Event Music') return <IconKarpet />;

    if (title === 'Event Comedy') return <IconSetrika />;

    if (title === 'Event seni') return <IconEkspress />;

    return <IconAddSaldo />;
  };

  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container(type)}
      onPress={()=> navigation.navigate('CompanyView')}>
      <View style={styles.button(type)}>
        <Icon />
      </View>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: (type) => ({
      marginBottom : type === "layanan" ? 12 : 0,
      marginRight : type === "layanan" ? 30 : 0
  }), 
  button: (type) => ({
    backgroundColor: WARNA_SEKUNDER,
    padding: type === 'layanan' ? 12 : 7,
    borderRadius: 10,
  }),
  text: (type) => ({
    fontSize: type === 'layanan' ? 14 : 10,
    fontFamily:type === 'layanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
    textAlign: 'center',
  }),

});
