import React from 'react';
import './bookcard.css';
import Card_data from './data';
function BookCard() {
  return (
    <div className="card_container">
      {Card_data.map((data, index) => (
        <div className="container" key={index}>
          <div className="overlay">
            <div className="items"></div>
            <div className="items head">
              <p>{data.Bname}</p>
              <p>{data.Aname}</p>
              <hr />
            </div>
            <div className="items price">
              <p>{data.Details}</p>
            </div>
            <div className="items cart">
              <i className="fa fa-shopping-cart"></i>
              <span>{data.Rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookCard;
