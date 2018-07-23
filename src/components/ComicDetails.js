import React, {Component} from 'react';
import ReactModal from 'react-modal';
import Moment from 'react-moment';

export default class ComicDetails extends Component {

    

    render() {

        let comicLen = this.props.details.comics.length;

        for(let i=0; i< comicLen;i++) {
            if(this.props.details.eventVal === this.props.details.comics[i].id) {
                return (
        <ReactModal 
           isOpen={this.props.details.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="Overlay"
        >  

        <div key={this.props.details.comics[i].id} className="row wrappy">

                <div className="detail-img col-md-4">
                    <img className="img-posters fade-in" id={this.props.details.comics[i].id} src={this.props.details.comics[i].thumbnail.path+".jpg"} alt=""/>
                </div>

                <div className="detail-text col-md-6">
                    <h2 className="detail-title">{this.props.details.comics[i].title}</h2>
                    <p >{this.props.details.comics[i].description}</p>

                    <div className="row">
                        <div className="detail-info col-md-6">
                            <p>Release Date: <Moment format="MMMM, DD, YYYY">{this.props.details.comics[i].dates[0].date}</Moment></p>
                        </div>
                        <div className="detail-info col-md-6">
                            <p>Print Price: $ {this.props.details.comics[i].prices[0].price}</p>
                        </div>
                    </div>

                    <div className="row">
                        <p className="col-md-2"> {this.props.details.comics[i].characters.items[0].name}</p>
                        <p className="col-md-2"> {this.props.details.comics[i].characters.items[1].name}</p>
                    </div>
                </div>

                <div className="col-xs-1 col-md-1 btn-closing">
                    <p onClick={this.props.handleclo}>X</p>
                </div>
        </div>           
                
                </ReactModal>
                )
            }
        }

        return(
            <div></div>
        )
        
    }
}