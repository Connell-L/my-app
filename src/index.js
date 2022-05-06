import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// import js files. Named export then relative path to file
import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

// );

// const Title = () => <h1>Charlie Cook's Favourite Book</h1>;

// const Author = () => <h4 style {{color: '#617d98'}}>Julia Donaldson</h4>;

ReactDOM.render(<BookList />, document.getElementById("root"));
