import './Books.css';
import AddBook from './AddBook';
import Book from './Book';

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
        <Book
          key={book.id}
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
