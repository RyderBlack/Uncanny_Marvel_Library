import React, {Component} from 'react';
import ReactModal from 'react-modal';
import Moment from 'react-moment';

export default class ComicDetails extends Component {

    

    render() {

        let comicLen = this.props.details.comics.length;
        let randomized = Math.floor(Math.random() * 10);

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

                
                    <p style={{'font-size':22,'font-weight': 'bold'}}>See also:</p>
                    <div className="zoomIn">
                        <img onClick={this.props.action2} className="img-also" id={this.props.details.comics[randomized].id} src={this.props.details.comics[randomized].thumbnail.path+".jpg"} alt=""/>
                        <img onClick={this.props.action2} className="img-also" id={this.props.details.comics[randomized+1].id} src={this.props.details.comics[randomized+1].thumbnail.path+".jpg"} alt=""/>
                        <img onClick={this.props.action2} className="img-also" id={this.props.details.comics[randomized+2].id} src={this.props.details.comics[randomized+2].thumbnail.path+".jpg"} alt=""/>
                        <img onClick={this.props.action2} className="img-also" id={this.props.details.comics[randomized+3].id} src={this.props.details.comics[randomized+3].thumbnail.path+".jpg"} alt=""/>
                        <img onClick={this.props.action2} className="img-also" id={this.props.details.comics[randomized+4].id} src={this.props.details.comics[randomized+4].thumbnail.path+".jpg"} alt=""/>
                    </div>
                {/*<SeeAlso action2={this.props.action2} id={this.props.details.comic[i]} />*/}
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