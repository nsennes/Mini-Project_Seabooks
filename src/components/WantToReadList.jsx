import React from "react";

function WantToReadList({ books, setBooks, setListModal }) {
    const removeBook = (bookId) => {
        setBooks(books.filter((book) => book.id != bookId));
    };
    return (
        <div className="fixed max-w-sm w-full top-1/4 left-1/2 -translate-x-1/2 bg-gray-200 p-2 rounded-sm">
            <ul className="relative pt-4">
                <h3 className="text-md mb-4 px-2 border-b font-semibold text-blue-600">
                    Want to read books
                </h3>
                <i
                    onClick={() => setListModal(false)}
                    className="fa-solid fa-xmark cursor-pointer absolute top-1 right-1 hover:text-red-500 ease duration-200"
                ></i>
                {books.map((book) => {
                    return (
                        <li
                            key={book.id}
                            className="flex justify-between items-center p-2"
                        >
                            <p>{book.title}</p>
                            <i
                                onClick={() => removeBook(book.id)}
                                className="fa-solid fa-xmark cursor-pointer  hover:text-red-500 ease duration-200"
                            ></i>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default WantToReadList;
