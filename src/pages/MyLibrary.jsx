import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import waves from "../assets/images/waves.png";

function MyLibrary() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', shelf: 'wantToRead', image: null },
    { id: 2, title: 'Book 2', shelf: 'currentlyReading', image: null },
    { id: 3, title: 'Book 3', shelf: 'finishedReading', image: null },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [addBookModalOpen, setAddBookModalOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    dateOfPublish: '',
    genre: '',
    image: null,
  });

  const handleOpenModal = (shelf) => {
    const booksInShelf = books.filter((book) => book.shelf === shelf);
    setSelectedBooks(booksInShelf);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedBooks([]);
    setModalOpen(false);
  };

  const handleAddBookModal = () => {
    setAddBookModalOpen(true);
  };

  const handleCloseAddBookModal = () => {
    setAddBookModalOpen(false);
    setNewBook({
      title: '',
      author: '',
      dateOfPublish: '',
      genre: '',
      image: null,
    });
  };

  const handleAddBook = () => {
    // Handle adding a new book
    const bookId = books.length + 1;
    const updatedBooks = [
      ...books,
      {
        id: bookId,
        title: newBook.title,
        shelf: 'wantToRead',
        image: newBook.image,
      },
    ];
    setBooks(updatedBooks);
    handleCloseAddBookModal();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setNewBook((prevBook) => ({
      ...prevBook,
      image: URL.createObjectURL(file),
    }));
  };

  const handleDeleteBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
    setSelectedBooks(updatedBooks); // Update selectedBooks state as well
  };
  
  

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-20">
        <h2 className="text-3xl font-bold mb-6">My Library</h2>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 w-full max-w-screen-lg justify-center">
          {/* Want to Read Card */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Want to Read
            </h2>
            <button
              className="text-sm font-medium text-white bg-blue-700 rounded-lg px-3 py-2 mt-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
              onClick={() => handleOpenModal("wantToRead")}
            >
              Show Books
            </button>
            <button
              className="text-sm font-medium text-white bg-green-500 rounded-lg px-3 py-2 mt-2 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600 w-full"
              onClick={handleAddBookModal}
            >
              Add Book
            </button>
          </div>

          {/* Currently Reading Card */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Currently Reading
            </h2>
            <button
              className="text-sm font-medium text-white bg-blue-700 rounded-lg px-3 py-2 mt-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
              onClick={() => handleOpenModal("currentlyReading")}
            >
              Show Books
            </button>
            <button
              className="text-sm font-medium text-white bg-green-500 rounded-lg px-3 py-2 mt-2 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600 w-full"
              onClick={handleAddBookModal}
            >
              Add Book
            </button>
          </div>

          {/* Finished Reading Card */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Finished Reading
            </h2>
            <button
              className="text-sm font-medium text-white bg-blue-700 rounded-lg px-3 py-2 mt-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
              onClick={() => handleOpenModal("finishedReading")}
            >
              Show Books
            </button>
            <button
              className="text-sm font-medium text-white bg-green-500 rounded-lg px-3 py-2 mt-2 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600 w-full"
              onClick={handleAddBookModal}
            >
              Add Book
            </button>
          </div>
        </div>

        
{/* Modal */}
{modalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        Book List
      </h2>
      <ul className="mt-4">
        {selectedBooks.map((book, index) => (
          <li key={book.id} className={`flex items-center py-2 ${index !== selectedBooks.length - 1 ? 'border-b border-gray-200' : ''}`}>
            <img
              src={book.image}
              alt={book.title}
              className="h-24 w-24 object-cover rounded-lg mr-4"
            />
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{book.title}</h3>
              <p className="text-sm text-gray-500">{book.author}</p>
              <p className="text-sm text-gray-500">{book.dateOfPublish}</p>
              <p className="text-sm text-gray-500">{book.genre}</p>
            </div>
            <button
              className="text-sm font-medium text-white bg-red-600 rounded-lg px-3 py-2 ml-auto hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700"
              onClick={() => handleDeleteBook(book.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        className="text-sm font-medium text-white bg-blue-700 rounded-lg px-3 py-2 mt-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
        onClick={handleCloseModal}
      >
        Close
      </button>
    </div>
  </div>
)}

        {/* Add Book Modal */}
        {addBookModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Add Book
              </h2>
              <form className="mt-4">
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newBook.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-blue-300 dark:focus:border-blue-300"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="author"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Author
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={newBook.author}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-blue-300 dark:focus:border-blue-300"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="dateOfPublish"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Date of Publish
                  </label>
                  <input
                    type="date"
                    id="dateOfPublish"
                    name="dateOfPublish"
                    value={newBook.dateOfPublish}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-blue-300 dark:focus:border-blue-300"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="genre"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Genre
                  </label>
                  <input
                    type="text"
                    id="genre"
                    name="genre"
                    value={newBook.genre}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-blue-300 dark:focus:border-blue-300"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Book Cover Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full px-3 py-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-blue-300 dark:focus:border-blue-300"
                  />
                </div>
                <button
                  type="button"
                  className="text-sm font-medium text-white bg-blue-700 rounded-lg px-3 py-2 mt-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
                  onClick={handleAddBook}
                >
                  Add Book
                </button>
                <button
                  type="button"
                  className="text-sm font-medium text-white bg-red-600 rounded-lg px-3 py-2 mt-2 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700 w-full"
                  onClick={handleCloseAddBookModal}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

 
    </>
  );
}

export default MyLibrary;
