import React from 'react';
import './AddBook.css';

const AddBook = () => (
  <div className="addContainer">
    <h2>ADD NEW BOOK</h2>
    <div className="formContainer">
      <form action="submit">
        <input className="bookTitle" type="text" placeholder="Book Title" />
        <select name="category" className="category">
          <option value="Economy">Category</option>
          <option value="Math">Math</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Comedy">Comedy</option>
        </select>
      </form>
      <button className="addBtn" type="button">ADD BOOK</button>
    </div>
  </div>
);

export default AddBook;
