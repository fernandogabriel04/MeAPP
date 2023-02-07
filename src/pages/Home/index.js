import React from 'react';
import { View, Text, TouchableOpacity,Image, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {FontAwesome} from '@expo/vector-icons';

export default function Home() {
    const navegacao=useNavigation();
 return (
   <View style={styles.container}>
        <TouchableOpacity onPress={() => { Linking.openURL('https://www.instagram.com/fernandogabriel04')}}>
        <View style={styles.homeLogo}>
            <Image 
            source={require('../../assets/eu.jpeg')}
            style={{width: '100%', height:250 }}
            resizeMode='contain'
            />
        </View>
        </TouchableOpacity>
    <View style={styles.textHome}>
        <Text style={styles.text}>Prazer, sou Fernando Gabriel! {'\n'}{'\n'}Estudo Desenvolvimento de Sistemas no Instituto Federal de Alagoas. Este APP traz mais informações sobre mim.</Text>
        <TouchableOpacity style={styles.button} onPress={()=>navegacao.navigate('About')}>
        <Text style={styles.txtButton}><FontAwesome name='info' size={25} color='white'/> Saiba Mais!</Text>
        </TouchableOpacity>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#6495ED'


    },
    homeLogo:{
        flex:2,
        backgroundColor:'#6495ED',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHome:{
     flex:1,
      backgroundColor:'#fff',
      borderTopLeftRadius:25,
      borderTopRightRadius:25,
      paddingStart:'5%',
      paddingEnd:"5%",


    },
    text:{
        fontSize:20,
        fontWeight:'bold',
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
    }
})