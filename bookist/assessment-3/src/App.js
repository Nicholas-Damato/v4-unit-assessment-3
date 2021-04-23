import './App.css';
import React, { Component } from 'react'
import Header from './components/Header'
import BookList from './components/BookList'
import Shelf from './components/Shelf'
import data from './data'
import SearchBar from './components/SearchBar'

class App extends Component {
  constructor() {
    super()

    this.state = {
      books: data,
      shelf: []
    }
  }

  addToShelf = (title) => {
    this.setState({ shelf: [...this.state.shelf, title] })
  }

  clearShelf = () => {
    this.setState({ shelf: [] })
  }

  filterBooks = (input) => {
    console.log(input)
    let books = this.state.books
    let filteredBooks = []

    for (let i = 0; i < books.length; i++) {
      if (books[i].title.includes(input)) {
        filteredBooks.push(books[i])
      }
    }
    this.setState({ books: filteredBooks })
  }

  reset = () => {
    this.setState({ books: data })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar filterBooks={this.filterBooks} reset={this.reset} />
        <BookList books={this.state.books} addToShelf={this.addToShelf} />
        <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf} />
      </div>
    );
  }
}

export default App;
