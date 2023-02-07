import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {FontAwesome, Entypo} from '@expo/vector-icons';

export default function Contact() {
  const navegacao=useNavigation();
 return (
  <View style={styles.container}>
    <View style={styles.Card}>
      <View style={styles.txtContact}>
      <Text style={styles.text}>Endereço: Rua Vista Atlântica, 81, Maceió/AL - 57042-532{'\n'}
      {'\n'}
      <Entypo name='email' size={25} color='black'/> Email: fgoc1@aluno.ifal.edu.br{'\n'}
      {'\n'}
      <FontAwesome name='phone' size={25} color='black'/> Telefone: (82) 99172-8054{'\n'}
      {'\n'}
      <FontAwesome name='github' size={25} color='black'/> Github: <Text onPress={() => { Linking.openURL('https://www.github.com/fernandogabriel04'); }}> www.github.com/fernandogabriel04</Text>{'\n'}
      {'\n'}
      <FontAwesome name='instagram' size={25} color='black'/> Instagram: <Text onPress={() => { Linking.openURL('https://www.instagram.com/fernandogabriel04'); }}> @fernandogabriel04</Text>
      {'\n'}
      </Text>
          <TouchableOpacity style={styles.button} onPress={()=>navegacao.navigate('Curriculum')}>
              <Text style={styles.txtButton}><Entypo name='text-document' size={25} color='white'/> CURRICULUM</Text>
          </TouchableOpacity>
      </View>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
        backgroundColor:'#6495ED',
        color:'#fff',
  },
  Card:{
    flex: 1,
    // backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    marginTop:28,
    marginBottom:12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    position: 'absolute',
    backgroundColor:'#6495ED',
    paddingVertical:8,
    width:'60%',
    alignSelf:'center',
    bottom:'15%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20,
  },
  txtButton:{
    padding: 5,
    letterSpacing: 2,
    fontSize:20,
    color:'#fff',
    fontWeight:'bold',
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:100,
    marginBottom:15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtContact:{
    flex:1,
     backgroundColor:'#fff',
     borderTopLeftRadius:25,
     borderTopRightRadius:25,
     paddingStart:'5%',
     paddingEnd:"5%",
   },

})