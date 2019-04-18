import React, { Component } from 'react';
import './App.css';
import GetImagen from './GetImagen';

const axios = require('axios');


class App extends Component {
  state = {
    gatitos: [],
    imagen: "test"
  }

  componentDidMount() {
    this.setState({ gatitos: [...Array(2)] });
    console.log(this.state.gatitos);

    for (let i = 0; 1 < this.state.gatitos.length; i++) {

      console.log("for ");

    }
  }
  call = async () => {
    // const catfoto = ''
    let res = await axios.get('http://aws.random.cat/meow');
    let data = await res.data;
    console.log("data", data.file);
    data = data.file
    // this.setState({ imagen: data.file });
    let estado = data;
    console.log("estado", estado);
    return estado
  }
  render() {
    //funcion para visualizar, llama a el componente
    return (
      <div className="App">
        {this.state.gatitos.map(() => {

          return this.printCat()
        })}
      </div>
    );
  }
  printCat = () => {
    this.call()
    console.log("estado final", this.state)
    return (
      // <GetImagen cat={this.componentDidMount()} />
      <GetImagen cat={this.state.imagen} />

    )
  }
}
export default App;
