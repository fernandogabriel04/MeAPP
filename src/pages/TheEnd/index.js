import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {FontAwesome, Entypo} from '@expo/vector-icons';

export default function Contact() {
  const navegacao=useNavigation();
 return (
  <View style={styles.container}>
    <View style={styles.gif}>
    <Image 
        source={require('../../assets/final.gif')}
        style={{width: '100%', height:400}}
        resizeMode='contain'
    />
    </View>
        <TouchableOpacity style={styles.button} onPress={()=>navegacao.navigate('Home')}>
        <Text style={styles.txtButton}><FontAwesome name='home' size={25} color='white'/> HOME</Text>
        </TouchableOpacity>
  </View>
);
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
        backgroundColor:'#6495ED',
        color:'#fff',
  },
  gif:{
    alignItems: 'center',
    justifyContent: 'center',
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
})