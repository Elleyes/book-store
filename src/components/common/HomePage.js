// ./src/components/common/HomePage.js
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>

        {this.props.books.map( (book, index) =>
          <div className="book" key={`book-${index}`}>
            <img src={book.image} />
            <div>{book.title}</div>
            <div>{book.author}</div>
          </div>
        )}
      </div>
    );
  }
}
//
// const Home = () => {
//   return (
//     <div>
//       <h1>Home Page</h1>
//
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architec sdfgdfg dfg to</p>
//     </div>
//   );
// };

export default connect( state => state )( Home );
