import React, { useEffect } from 'react';
import './Books.css';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';
import fetchBooks from '../redux/books/slice';

const Books = () => {
  const bookStore = [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const booksInfo = useSelector((store) => store.booksReducer.data);

  const bookList = Object.keys(booksInfo);

  bookList.forEach((id) => {
    booksInfo[id].map((item) => (
      bookStore.push(
        <Book
          key={id}
          id={id}
          category={item.category}
          title={item.title}
        />,
      )));
  });

  return (
    <div className="books">
      { bookStore }
      <AddBook className="addBook" />
    </div>
  );
};

export default Books;
