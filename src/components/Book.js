/* eslint-disable react/prop-types */
import React from 'react';
import './Book.css';

const Book = (props) => {
  const {
    id, genre, name, author, percentage, chapter,
  } = props;

  return (
    <div className="container" key={id}>
      <div className="leftCont">
        <span className="genre">{genre}</span>
        <h2 className="bookName">{name}</h2>
        <span className="author">{author}</span>
        <div className="btns">
          <button className="firstBtn" type="button">
            Comments
          </button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="rightCont">
        <div className="circle">
          <div className="oval" />
          <div className="ovalInfo">
            <h3 className="percentage">
              (
              {`${percentage}%`}
              )
            </h3>
            <span>Completed</span>
          </div>
        </div>
        <div className="line" />
        <div className="chapter">
          <span>CURRENT CHAPTER</span>
          <h5 className="chapterName">{chapter}</h5>
          <button type="button" className="updateBtn">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
