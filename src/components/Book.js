import React from 'react';
import './Book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (
  {
    id, category, title,
  },
) => {
  const dispatch = useDispatch();

  const handleBookRemoval = async () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="container">
      <div className="leftCont">
        <span className="genre">{category}</span>
        <h2 className="bookName">{title}</h2>
        <span className="author">John Doe</span>
        <div className="btns">
          <button className="firstBtn" type="button">
            Comments
          </button>
          <button className="remove" onClick={handleBookRemoval} type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="rightCont">
        <div className="circle">
          <div className="oval" />
          <div className="ovalInfo">
            <h3 className="percentage">100%</h3>
            <span>Completed</span>
          </div>
        </div>
        <div className="line" />
        <div className="chapter">
          <span>CURRENT CHAPTER</span>
          <h5 className="chapterName">Introduction</h5>
          <button type="button" className="updateBtn">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
