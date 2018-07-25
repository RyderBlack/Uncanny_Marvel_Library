import React, { Component } from 'react';


export default class SeeAlso extends Component {

    render() {

        let randomized = Math.floor(Math.random() * 10);


        for (let j=0; j <= 5; j++) {
        return (
            <div className="zoomIn">
                <img onClick={this.props.action2} className="img-also" id={this.props.id[randomized].id} src={this.props.id[j].thumbnail.path+".jpg"} alt=""/>              
            </div>
        )}
    }
}


