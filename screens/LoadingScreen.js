import React, { useEffect, useState, Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


class Loading extends Component{

  constructor(props){
    super(props);
    this.state = {
      prhase: '',
    }

    this.generateMessage = this.generateMessage.bind(this);

    this.prhases = [
      'O futuro só chegará se, no presente, a segurança você adotar.',
      'Respeite a vida, trabalhe com segurança!',
      'Segurança no Trabalho: cultive esta ideia!',
      'Viva com segurança. Trabalhe com confiança.',
      'Seja prudente. Sua família não quer você ausente.',
      'Uma empresa com acidente zero. Só depende de você!',
      'O momento de ter segurança é agora!',
      'Segurança no trabalho é atitude e responsabilidade.',
      'Prevenir acidentes é pensar no futuro.',
      'Um ambiente de trabalho seguro garante um trabalhador saudável.',
      'A proatividade também depende da segurança no trabalho.',
      'Funcionários inteligentes previnem acidentes.',
      'No trabalho de segurança, o ele mais importante é, sem dúvida, o trabalhador.',
      'Não espere o acidente acontecer, faça a prevenção agora.',
      'Não lamente o acidente que já aconteceu, comemore o acidente que você foi capaz de evitar.',
      'Segurança em primeiro lugar!',
      'Para a proteção, EPI é a solução!',
      'Pare, pense e pratique a segurança no trabalho.',
      'Prevenção de acidentes é vida!',
      'Reportar incidentes é prevenir acidentes!',
    ];

  }

  componentDidMount(){
    this.generateMessage();
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 4000);
  }

  generateMessage(){
    let number = Math.floor(Math.random() * this.prhases.length);
    this.setState({
      prhase: this.prhases[number],
    })
  }


  render(){
    return(
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
        <Text style={styles.loadingText}>{this.state.prhase}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004AAD',
  },
  logo: {
    width: 300,
    height: 300,
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffff',
    margin:40,
  },
});

export default Loading;
