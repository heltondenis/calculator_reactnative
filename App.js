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
        <Botao c="2"></Botao>
        <Botao></Botao>
        <Botao></Botao>
        <Botao></Botao>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex:1
  }
});

