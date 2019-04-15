import React, { Component } from 'react';

class GetImagen extends Component {
    render() {
        const { imagen } = this.props;
        return (

            <div className="Image-div">
                <img src={imagen} alt={imagen} />￼
            </div>
        )
    }

}


export default GetImagen;