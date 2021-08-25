import React, { useState } from 'react';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import './AddBook.css';

const AddBook = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookCategory, setBookCategory] = useState('');

  const handleBookTitleChange = (e) => {
    setBookTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setBookCategory(e.target.value);
  };

  const dispatch = useDispatch();

  const submitBook = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuid(),
      genre: bookCategory,
      name: bookTitle,
      author: 'John Doe',
      chapter: 'introduction',
      percentage: 100,
    };

    dispatch(addBook(newBook));
    setBookCategory('');
    setBookTitle('');
  };

  return (
    <div className="addContainer">
      <h2>ADD NEW BOOK</h2>
      <div className="formContainer">
        <form action="submit">
          <input
            value={bookTitle}
            className="bookTitle"
            name="bookTitle"
            type="text"
            placeholder="Book Title"
            onChange={handleBookTitleChange}
          />
          <select value={bookCategory} onChange={handleCategoryChange} name="category" className="category">
            <option value="Economy">Category</option>
            <option value="Math">Math</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Comedy">Comedy</option>
          </select>
        </form>
        <button onClick={submitBook} className="addBtn" type="submit">
          ADD BOOK
        </button>
      </div>
    </div>
  );
};

export default AddBook;
