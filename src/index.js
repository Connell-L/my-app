import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// stateless functional component
// always return JSX

// function Greeting() {
//   return (
//     <div>
//       <h1>hello world</h1>
//     </div>
//   );
// }

// ReactDOM.render(<Greeting />, document.getElementById("root"));

// what is happening under the hood
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//   );
// };

// Nested Components, React Tools

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>john doe</h2>;

// const Message = () => {
//   return <p>this is my message</p>;
// };

// ReactDOM.render(<Greeting />, document.getElementById("root"));

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51xpPMR0dqL._SX398_BO1,204,203,200_.jpg"
    alt=""
  />
);

const Title = () => <h1>Charlie Cook's Favourite Book</h1>;

const Author = () => <h4>Julia Donaldson</h4>;

ReactDOM.render(<BookList />, document.getElementById("root"));
