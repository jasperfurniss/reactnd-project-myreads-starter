import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";

class Shelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  render() {
    const { books } = this.props;

    const shelves = {
      currentlyReading: "Currently Reading",
      wantToRead: "Want to Read",
      read: "Read"
    };

    for (var key in shelves) {
      if (shelves.hasOwnProperty(key)) {
        const filtered = this.props.books.filter(function(book) {
          console.log("the current book shelf is:" + book.shelf);
          console.log("the current key is" + key);
        });
      }
    }
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <li key={book.id} className="contact-list-item">
                <Book book={book} changeShelf={this.props.changeShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
