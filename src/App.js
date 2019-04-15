import React, { Component } from 'react';
import './App.css';
import GetImagen from './GetImagen';

const axios = require('axios');


class App extends Component {
  state = {
    gatitos: []
  }

  call() {
    // const catfoto = ''

    axios.get('http://aws.random.cat/meow')
      .then(response => {
        console.log('response.data', response.data);
        // catfoto = response.data;
        // console.log('catfoto', catfoto);
        let benis = ""
        benis = response.data.file

        console.log("BENIS", benis);
        return this.response.data.file
      })
      .catch(error => {
        console.log(error);

      })


  }
  componentDidMount() {
    this.setState({ gatitos: [...Array(10)] })
    // let elprop = this.call()
  }
  render() {
    return (
      <div className="App">
        {this.state.gatitos.map(() => {
          return this.printCat();
        })}
      </div>
    );
  }

  printCat = () => {
    return (
      // <GetImagen imagen={this.call()} />
      <GetImagen imagen={"https://bulma.io/images/placeholders/128x128.png"} />

    )
  }

}

export default App;
