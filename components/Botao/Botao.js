import React, { Component } from 'react';
import {
Platform,
StyleSheet,
Text,
View,
TouchableOpacity
} from 'react-native';

class Botao extends Component {

constructor(props) {
    super(props);
    this.state = {};

    let c = 1;
    let bg = '#E0E0E0';

    if(props.c){
        c = parseInt(props.c);
    }
    if(props.bg){
        bg = this.props.bg;
    }

    this.styles = StyleSheet.create({
        area:{
            flex: c,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth:1,
            borderColor: '#999999',
            backgroundColor: bg
        },
        text:{
            fontSize: 18
        }
    });
}

render() {
    return(
    <TouchableOpacity style={this.styles.area}>
        <Text style={this.styles.text}>{this.props.n}</Text>
    </TouchableOpacity>
    );
}
}

export default Botao;