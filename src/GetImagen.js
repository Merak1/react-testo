import React, { Component } from 'react';

class GetImagen extends Component {
    state = {
        cat: ''
    }

    componentDidMount() {
        const estado1 = this.props.cat;
        console.log("estado :)", this.state);
        console.log("props :o ", estado1);

        this.setState({ cat: estado1 })

        // return estado
    }

    render() {
        // const { imagen } = this.state.cat;
        const imagen = this.state.cat
        return (
            <div  >

                <div className="Image-div">
                    <img src={imagen} alt={imagen + "a"} />
                </div>
                {/* <p> imagen = {imagen}  </p>￼ */}
            </div>
        )
    }

}


export default GetImagen;