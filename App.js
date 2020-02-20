import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Quando você nasceu, você chorou e o mundo alegrou. Viva sua vida de forma que quando você morrer, o mundo chore e você se alegre.(Autor desconhecido)',
      'Alguém disse que a vida é uma festa. A gente chega depois que começou e sai antes que acabe.(Elsa Maxwell)',
      'Quando eu ouço alguém suspirar, "A vida é dura", eu sempre sou tentado a perguntar, "Comparado a que ? (Sydney J. Harris)',
      'O que você deixa para trás não é o que é gravado em monumentos de pedra, mas o que é tecido nas vidas de outros.(Péricles)',
      'A vida é a infância da nossa imortalidade.(Goethe)',
      'A vida, para os desconfiados e os temerosos, não é vida, mas uma morte constante.(Juan Luis Vives)',
      'A vida é o filme que você vê através dos seus próprios olhos. Faz pouca diferença o que está acontecendo. É como você percebe que conta.(Denis Waitley)',
      'A vida é mais simples do que a gente pensa; basta aceitar o impossível, dispensar o indispensável e suportar o intolerável.(Kathleen Norris)',
      'Se eu tivesse que viver minha vida novamente, eu cometeria os mesmos erros, só que mais cedo.(Tallulah Bankhead)',
      'Estar cheio de vida é respirar profundamente, mover-se livremente e sentir com intensidade.(Alexander Lowen)'
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png')
    });

  }

  render() {
    return (
      <View style={styles.container} >
        <Image
          source={this.state.img}
          style={styles.img}
        />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito} >
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#FF8C00',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#FF8C00',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF8C00'
  }

});

export default App;