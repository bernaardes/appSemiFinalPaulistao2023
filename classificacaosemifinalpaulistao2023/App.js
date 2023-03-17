import React,{useState} from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import{useFonts,Nunito_400Regular,Lato_400Regular,} from '@expo-google-fonts/dev';

export default function App() 
{
  let [fontsLoaded] = useFonts({Nunito_400Regular,Lato_400Regular,})
  if(!fontsLoaded)
  {
    return AppLoading;
  }
  else
  {
    return (<View style={styles.container}>
              <Text style={styles.titulo}>Os 4 times paulistas classificados para as Semi Finais do Paulistão 2023</Text>
              <FlatList 
                data={arrayTimes}
                renderItem={({item})=>
                  <View style={styles.container}>
                    <View style={styles.tituloimg}><Image style={styles.img} source={item.capa}/></View>
                      <Text style={styles.subTitulo}>{item.time}</Text>
                      <Text style={styles.subTitulo}>{item.nascimento}</Text>
                      <Text style={styles.subTitulo}>{item.campeao}</Text>
                  </View>
                }
              />
            </View>
           );
  }
}
const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center'
  },
  titulo:
  {
    fontSize: 25,
    color: '#ff5a73',
    fontFamily: 'Lato_400Regular',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center'
  },
  subTitulo:
  {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  img:
  {
    borderRadius: 30,
    width: 300,
    height: 300,
    resizeMode: 'center',
    marginBottom: 40
  },
  tituloimg:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


const arrayTimes =[
  {time: 'Palmeiras',
    nascimento:'29 de Agosto de 1914',
    campeao:'24 títulos do Campeonato Paulista',
    capa:require('./assets/palmeiras.png')},
  {time: 'Ituano',
    nascimento:'24 de Maio de 1947',
    campeao:'1 título do Campeonato Paulista',
    capa:require('./assets/ituano.png')},
  {time: 'RB Bragantino',
    nascimento:'1928',
    campeao:'1 título do Campeonato Paulista',
    capa:require('./assets/rbbragantino.png')},
  {time: 'Água Santa',
    nascimento:'29 de Agosto de 1914',
    campeao:'0 títulos do Campeonato Paulista',
    capa:require('./assets/aguasanta.png')},
];