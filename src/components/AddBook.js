import React, { useState } from 'react';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import fetchBooks from '../redux/books/slice';
import './AddBook.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleBookTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const dispatch = useDispatch();

  const submitBook = async (e) => {
    e.preventDefault();
    const newBook = {
      id: uuid(),
      title,
      category,
    };

    setCategory('');
    setTitle('');

    await dispatch(addBook(newBook));

    await dispatch(fetchBooks());
    document.location.reload();
  };

  return (
    <div className="addContainer">
      <h2>ADD NEW BOOK</h2>
      <div className="formContainer">
        <form action="submit">
          <input
            value={title}
            className="bookTitle"
            name="bookTitle"
            type="text"
            placeholder="Book Title"
            onChange={handleBookTitleChange}
          />
          <select value={category} onChange={handleCategoryChange} name="category" className="category">
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
