import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {FontAwesome, Entypo} from '@expo/vector-icons';

export default function Curriculum() {
    const navegacao=useNavigation();
 return (
   <View style={styles.container}>
    <View style={styles.homeLogo}>
    <Image 
    source={require('../../assets/curriculo.jpeg')}
    style={{width: '100%', height:'100%' }}
    resizeMode='contain'
    />
    </View>
    <View style={styles.textHome}>
        <TouchableOpacity style={styles.button} onPress={()=>navegacao.navigate('TheEnd')}>
        <Text style={styles.txtButton}>END</Text>
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
        flex:6,
        backgroundColor:'#6495ED',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHome:{
        flex:1,
        backgroundColor:'#fff',
    },
    button:{
        position: 'absolute',
        backgroundColor:'#6495ED',
        paddingVertical:8,
        marginVertical:25,
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