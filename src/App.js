import React, { Component } from 'react';
import logo from './Marvel-comics-logo-vector.png';
import {FaGithub, FaUser, FaTwitter} from 'react-icons/lib/fa';
import GridComics from './components/GridComics';
//import ComicDetails from './components/ComicDetails';
import './App.css';
import axios from 'axios';


class App extends Component {

  constructor (props) {
    super(props)
    this.state =  { 
      query: 'Thor',
      comics: [],
      showModal: false,
      eventVal: 0,
      showDarkMode: false
    }
    this.searchComics()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.toggleDark = this.toggleDark.bind(this);
  }

  searchComics() {

    axios.get(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${this.state.query}&limit=28&apikey=7db6ef89ac98e1a615b902a069b08e27`)
      .then(res => {
        let comicsRes = res.data.data.results;
        this.setState({comics : comicsRes})
      })
      
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length >= 3) {
          this.searchComics()
      } 
    })
  }

  handleOpenModal(event) {
    
    console.log("clicked")
    let idAttrib = event.target.getAttributeNode('id')
    let idAtribValue = parseInt(idAttrib.value,10)

    this.setState({
        showModal: true,
        eventVal: idAtribValue
      })
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

toggleDark() {
  this.setState({ showDarkMode: !this.state.showDarkMode });
}
  

  render() {
    return (
      <div className={this.state.showDarkMode ? "darkmode" : "App"}>
        <header className="App-header container-fluid">

          <nav className="navbar navbar-expand-lg navbar-light">
            <a href="https://marvel.com" className="App-logo col-md-2"><img src={logo} className="App-logo" alt="logo" /></a>
            <h1 className={this.state.showDarkMode ? "darkmode-title col-md-8" : "col-md-8 App-title"} >Welcome To Marvel Comics !</h1>
          </nav>

          <div className="row">
          <input type="text" placeholder="Enter a comic name" onChange={this.handleInputChange} className="search-input" ref={input => this.search = input}
           /> 
          </div>

          <div className="row">
            <div className="col-md-12 linkss">
              <button onClick={this.toggleDark} className="btn btn-dark buttonDarkMode">Dark Mode</button>
              <a href="https://ryhad.com" className={this.state.showDarkMode ? "darkmode-href" : "link-href"}><FaUser className="melogo"/></a>
              <a href="https://github.com/RyderBlack" className={this.state.showDarkMode ? "darkmode-href" : "link-href"}><FaGithub className="tweetlogo"/></a>
              <a href="https://twitter.com/RyhadB" className={this.state.showDarkMode ? "darkmode-href" : "link-href"}><FaTwitter className="githublogo"/></a>
            </div>
          </div>
          
          
          
        </header>
        {/*
        <ul className="App-intro">
          {this.state.comics.map(comic => { return( 
  
            <li key={comic.id}>{comic.title}</li>
          
          )})}
        </ul>
        */}
        <div className="container-fluid">
        <GridComics com={this.state} action={this.handleOpenModal} handleClose={this.handleCloseModal}/>
        </div>
        <footer>"Data provided by Marvel. © 2014-2018 Marvel"</footer>
      </div>
    );
  }
}

export default App;
