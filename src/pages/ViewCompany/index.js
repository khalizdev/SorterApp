import React from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, Image, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';


const ViewCompany = () => {
    return(
        <View style={{alignItems: 'center', marginTop: 80, flexDirection: 'column'}}>
            <View style={{width: 150, height: 150}}>
                <Image 
                    style={{width: 150, height: 150}}
                    source={require('../../assets/icons/simpati.jpg')}/>
            </View>            
            <Text style={{marginTop: 15, fontWeight: 'bold', fontSize: 18}}>PT. IndoApril</Text>
            <Text style={{ fontSize: 15}}>IndoApril@gmail.com</Text>
            <Text style={{ fontSize: 15}}>+6281324116798</Text>
            <View style={{marginTop: 30, width: '100%'}}>
                <Text style={{ fontSize: 18, textAlign: 'center'}}>Deskripsi</Text>
                <View style={{alignItems: 'flex-start', marginLeft: 15, marginTop: 10}}>
                    <Text>Visi</Text>
                    <Text>COMING SOON</Text>
                </View>
                <View style={{alignItems: 'flex-start', marginLeft: 15, marginTop: 20}}>
                    <Text>Misi</Text>
                    <Text>COMING SOON</Text>
                </View>
                <View style={{alignItems: 'flex-start', marginLeft: 15, marginTop: 20}}>
                    <Text>Tentang</Text>
                    <Text>COMING SOON</Text>
                </View>
            </View>
        </View>
    )
}

export default ViewCompany;