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
    <div className="container flex">
      <div className="leftCont flex">
        <span className="genre montserrat">{category}</span>
        <h2 className="bookName robotoSlab">{title}</h2>
        <span className="author robotoSlab">John Doe</span>
        <div className="btns">
          <button className="firstBtn robotoSlabLight" type="button">
            Comments
          </button>
          <button className="remove robotoSlabLight" onClick={handleBookRemoval} type="button">Remove</button>
          <button className="robotoSlabLight" type="button">Edit</button>
        </div>
      </div>
      <div className="rightCont flex">
        <div className="circle flex">
          <div className="oval" />
          <div className="ovalInfo">
            <h3 className="percentage montserrat">100%</h3>
            <span className="montserrat">Completed</span>
          </div>
        </div>
        <div className="line" />
        <div className="chapter robotoSlabLight flex">
          <span>CURRENT CHAPTER</span>
          <h5 className="chapterName robotoSlabLight">Introduction</h5>
          <button type="button" className="updateBtn robotoSlabLight">
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
