import React, { Component, Fragment } from 'react';
import ComicDetails from './ComicDetails';
import Loader from 'react-loader-spinner';


export default class GridComics extends Component {

   
  
    render() {

        if (this.props.com.comics === undefined || this.props.com.comics.length === 0) {
            return (
               <div className="loader-box">
                <Loader 
                    type="Puff"
                    color="red"
                    height="100"	
                    width="100"
                /> 
               </div>    
                
            )
        } else {

        return(
           <div className="row">
           
           {this.props.com.comics.map((comic) => { 
             
            return( 
           
            <Fragment key={comic.id}>
            <div className={comic.dates[0].date === "2029-12-31T00:00:00-0500" ? "hidy" : "col-md-3"}>
            <a onClick={this.props.action}>
                <img className="img-posters fade-in" id={comic.id} src={comic.thumbnail.path+".jpg"} alt=""/>
                <p className={this.props.darkmode ? "comic-darkmode-title" : "comic-title"}>{comic.title}</p>
            </a>
            </div>
            
            {this.props.com.eventVal === comic.id ? <ComicDetails details={this.props.com} handleclo={this.props.handleClose} action2={this.props.action}/> : ''}
            </Fragment>
          )})}

            </div>
        )
        }
    }
}