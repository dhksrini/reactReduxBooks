import React, { Component } from 'react';
import BookList from '../containers/bookList';
import BookDetail from '../containers/bookDetail';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Books Available:</h2>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
