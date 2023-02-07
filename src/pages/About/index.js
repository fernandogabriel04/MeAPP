import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {FontAwesome} from '@expo/vector-icons';

export default function About() {
  const navegacao=useNavigation();
 return (
  <View style={styles.container}>
    <View style={styles.Card}>
      <View style={styles.txtAbout}>
      <Text style={styles.text}>Tenho 17 anos e sou um entusiasta na área de tecnologia e inovação!{'\n'}Entre em contato comigo para iniciarmos projetos!</Text>
          <TouchableOpacity style={styles.button} onPress={()=>navegacao.navigate('Contact')}>
              <Text style={styles.txtButton}><FontAwesome name='phone' size={25} color='white'/> CONTACT</Text>
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
  txtAbout:{
    flex:1,
     backgroundColor:'#fff',
     borderTopLeftRadius:25,
     borderTopRightRadius:25,
     paddingStart:'5%',
     paddingEnd:"5%",
   },

})