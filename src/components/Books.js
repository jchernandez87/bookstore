import React from 'react';
import './Books.css';

const Books = () => {
  const BooksInfo = [
    {
      id: 1,
      genre: 'Action',
      name: 'The Hunger Games',
      author: 'Suzanne Collins',
      percentage: 64,
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      genre: 'Science Fiction',
      name: 'Dune',
      author: 'Frank Herbert',
      percentage: 8,
      chapter: 'Chapter 3:"A Lesson Learned"',
    },
    {
      id: 3,
      genre: 'Economy',
      name: 'Capital in the Twenty-first Century',
      author: 'Suzanne Collins',
      percentage: 0,
      chapter: 'Introduction',
    },
  ];

  return (
    <div className="books">
      {BooksInfo.map((book) => (
        <div className="container" key={book.id}>
          <div className="leftCont">
            <span className="genre">{book.genre}</span>
            <h2 className="bookName">{book.name}</h2>
            <span className="author">{book.author}</span>
            <div className="btns">
              <button className="firstBtn" type="button">Comments</button>
              <button type="button">Remove</button>
              <button type="button">Edit</button>
            </div>
          </div>
          <div className="rightCont">
            <div className="circle">
              <div className="oval" />
              <div className="ovalInfo">
                <h3 className="percentage">{`${book.percentage}%`}</h3>
                <span>Completed</span>
              </div>
            </div>
            <div className="line" />
            <div className="chapter">
              <span>CURRENT CHAPTER</span>
              <h5 className="chapterName">{book.chapter}</h5>
              <button type="button" className="updateBtn">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
