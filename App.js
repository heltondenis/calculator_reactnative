import React, { Component } from 'react';
import Botao from './components/Botao/Botao';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Calculadora extends Component {

  render() {
    return(
      <View style={styles.body}>
      <View style={styles.line}>
        <Text>Texto</Text>
        </View>
        <View style={styles.line}>
          <Botao c="3" n="C" bg="#CCCCCC"></Botao>
          <Botao n="/" bg="#FD9536"></Botao>
        </View>
        <View style={styles.line}>
          <Botao n="7"></Botao>
          <Botao n="8"></Botao>
          <Botao n="9"></Botao>
          <Botao n="*" bg="#FD9536"></Botao>
        </View>
        <View style={styles.line}>
          <Botao n="4"></Botao>
          <Botao n="5"></Botao>
          <Botao n="6"></Botao>
          <Botao n="-" bg="#FD9536"></Botao>
        </View>
        <View style={styles.line}>
          <Botao n="1"></Botao>
          <Botao n="2"></Botao>
          <Botao n="3"></Botao>
          <Botao n="+" bg="#FD9536"></Botao>
        </View>
        <View style={styles.line}>
          <Botao c="2" n="0"></Botao>
          <Botao n="."></Botao>
          <Botao n="=" bg="#FD9536"></Botao>
        </View>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex:1
  },
  line:{
    flex:1,
    flexDirection:'row'
  }
});

