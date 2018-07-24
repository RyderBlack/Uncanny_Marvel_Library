import React, { Component, Fragment } from 'react';


export default class SearchBar extends Component {


    render() {
        return(
           <Fragment>
           <input type="text" placeholder="Enter a comic name" onChange={this.props.changeOn} className="search-input"
           /> 
            </Fragment>
        )
    }
}
