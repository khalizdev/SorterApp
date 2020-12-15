import React from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, Image, LogBox} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';
const DATA = [
    {
      id: '1',
      title: 'TELKOMSEL',
      email: 'Telkomsel@gmail.com',
      nomor: '+6281324116798'
    },
    {
      id: '2',
      title: 'TELKOMSEL',
      email: 'Telkomsel@gmail.com',
      nomor: '+6281324116798',
    },
    {
      id: '3',
      title: 'TELKOMSEL',
      email: 'Telkomsel@gmail.com',
      nomor: '+6281324116798',
    },
    {
      id: '4',
      title: 'TELKOMSEL',
      email: 'Telkomsel@gmail.com',
      nomor: '+6281324116798',
    },
    {
      id: '5',
      title: 'TELKOMSEL',
      email: 'Telkomsel@gmail.com',
      nomor: '+6281324116798',
    },
    {
        id: '6',
        title: 'TELKOMSEL',
        email: 'Telkomsel@gmail.com',
        nomor: '+6281324116798',
      },
      {
        id: '7',
        title: 'TELKOMSEL',
        email: 'Telkomsel@gmail.com',
        nomor: '+6281324116798',
      },
      {
        id: '8',
        title: 'TELKOMSEL',
        email: 'Telkomsel@gmail.com',
        nomor: '+6281324116798',
      },
      {
        id: '9',
        title: 'TELKOMSEL',
        email: 'Telkomsel@gmail.com',
        nomor: '+6281324116798',
      },
  ];

  const Item = ({title, email, nomor}) => {
    const navigation = useNavigation();
    return(
    <View style={{flexDirection: 'row', marginLeft: 20}}>
      <View style={{flexDirection: 'column',}}>
        <Text style={{marginTop: 15, fontWeight: 'bold', fontSize: 18}}>{title}</Text>
        <Text style={{fontSize: 14,}}>{email}</Text>
        <Text style={{fontSize: 14, color : '#F09E56'}}>{nomor}</Text>
      </View>   
      <View style={{flexDirection: 'row-reverse', width: '55%', marginTop: 15}}>
          <View style={{flexDirection: 'column'}}>
            <Image 
                style={{width: 80, height: 80,marginRight: 10}} 
                source={require('../../assets/icons/simpati.jpg')}/>
            <View style={{marginTop: 5,marginBottom: 10, backgroundColor: "#FADC9C", marginRight: 10, borderRadius: 10}}>
                <TouchableHighlight 
                    onPress={()=> navigation.navigate('ViewCompany')}
                    underlayColor="#FADC9C">
                    <Text style={{textAlign: 'center'}}>View</Text>
                </TouchableHighlight>
            </View>            
          </View>
      </View>   
    </View>  
  );
  }

 

const Pesanan = () => {
    React.useEffect(()=>{
        LogBox.ignoreAllLogs();
    },[])
    return (
        <View>
            <ScrollView>    
            <SafeAreaView>
                <FlatList
                  data={DATA}
                  renderItem={({ item }) => 
                    <Item 
                      title={item.title}
                      email={item.email}
                      nomor = {item.nomor}/>
                  }
                />
              </SafeAreaView>
          </ScrollView>    
        </View>
    )
}

export default Pesanan

const styles = StyleSheet.create({})
