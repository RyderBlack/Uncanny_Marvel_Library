import React, { Component, Fragment } from 'react';
import ComicDetails from './ComicDetails';


export default class GridComics extends Component {

   
  
    render() {

        return(
           <div className="row">
           
           {this.props.com.comics.map((comic) => { 
             
            return( 
           
            <Fragment key={comic.id}>
            <div className="col-md-3" >
            <a onClick={this.props.action}><img className="img-posters fade-in" id={comic.id} src={comic.thumbnail.path+".jpg"} alt=""/> </a>
            </div>
            
            {this.props.com.eventVal === comic.id ? <ComicDetails details={this.props.com} handleclo={this.props.handleClose}/> : ''}
            </Fragment>
          )})}

            </div>
        )
    }
}