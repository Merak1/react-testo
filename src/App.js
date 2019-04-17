import React, { Component } from 'react';
import './App.css';
import GetImagen from './GetImagen';

const axios = require('axios');


class App extends Component {
  state = {
    gatitos: []
    ,
    // cat: []
    // ,
    // imagen: "https://bulma.io/images/placeholders/128x128.png"
    imagen: " "

  }

  // call() {
  //   const estado = this.state.imagen;
  //   console.log("estado", estado);
  //   return estado
  // }

  call = async () => {
    // const catfoto = ''
    let res = await axios.get('http://aws.random.cat/meow');
    let data = await res.data;
    console.log("data", data.file);
    // data = data.file
    this.setState({ imagen: data.file });
    let estado = this.state.imagen;
    console.log("estado", estado);
    return estado

    // return data


  }
  // call() {
  //   let cat = ""
  //   axios.get('http://aws.random.cat/meow')
  //     .then(response => {
  //       console.log('response.data', response.data);
  //       // catfoto = response.data;
  //       // console.log('catfoto', catfoto);
  //       cat = '"' + response.data.file + '"'
  //       // 
  //       console.log("cat", cat);
  //       this.setState({ imagen: cat })
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  //   // console.log("cat", cat);
  //   // return cat
  // }


  componentDidMount() {
    this.setState({ gatitos: [...Array(5)] })

  }
  // estado() {
  //   // console.log(this.call())
  //   // let estado = (this.call()).file

  //   estado = this.state.imagen;
  //   console.log("estado", estado);
  //   return estado
  // }
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
    // this.call()
    return (
      <GetImagen cat={this.call()} />
      // <GetImagen cat="benis" />

    )
  }

}

export default App;
