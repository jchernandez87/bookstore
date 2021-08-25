import './Books.css';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const BooksInfo = useSelector((store) => store.booksReducer);

  return (
    <div className="books">
      {BooksInfo.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          genre={book.genre}
          name={book.name}
          author={book.author}
          percentage={book.percentage}
          chapter={book.chapter}
        />
      ))}
      <AddBook className="addBook" />
    </div>
  );
};

export default Books;
