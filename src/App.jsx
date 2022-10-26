import './App.module.css';

import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    searchQuery: '',
  };

  handleSearchFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
          <ImageGallery searchQuery={this.state.searchQuery} />
          <ToastContainer />
      </div>
    );
  }
}