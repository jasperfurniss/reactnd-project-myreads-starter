import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Book from "./Components/Book";
import Shelf from "./Components/Shelf";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false,
    shelves: []
  };

  componentWillMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books: books
      });
    });
  }

  render() {
    const shelves = ["Currently Reading", "Want to Read", "Read", "None"];

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a
                className="close-search"
                onClick={() =>
                  this.setState({
                    showSearchPage: false
                  })
                }
              >
                Close
              </a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                <Book test="awesome" className="hello" />
              </ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelves.map(item => (
                  <Shelf title={item} books={this.state.books} key={item.id} />
                ))}
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
