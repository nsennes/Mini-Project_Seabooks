import React, { useState, useEffect } from "react";

import ListOfBooks from "./ListOfBooks";
import AddBookForm from "./AddBookForm";

function FinishedReading({
    books,
    setBooks,
    modalBooks,
    modalForm,
    setModalBooks,
    setModalForm,
}) {
    const modifiedList = books.filter(
        (book) => book.shelf === "finishedReading"
    );

    const [listModal, setListModal] = useState(false);
    const [formModal, setFormModal] = useState(false);
    return (
        <React.Fragment>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Finished Reading
                </h2>
                <button
                    className="text-sm font-medium text-white bg-blue-700 rounded-lg px-3 py-2 mt-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
                    onClick={() => setModalBooks(true)}
                >
                    Show Books
                </button>
                <button
                    onClick={() => setModalForm(true)}
                    className="text-sm font-medium text-white bg-green-500 rounded-lg px-3 py-2 mt-2 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600 w-full"
                >
                    Add Book
                </button>
            </div>

            {listModal ? (
                <ListOfBooks
                    books={modifiedList}
                    setBooks={setBooks}
                    setModalBooks={setListModal}
                    shelf="finishedReading"
                />
            ) : null}

            {modalForm ? (
                <AddBookForm
                    books={books.filter(
                        (book) => book.id === "finishedReading"
                    )}
                    setBooks={setBooks}
                    setModalForm={setModalForm}
                    shelf="finishedReading"
                />
            ) : null}
        </React.Fragment>
    );
}

export default FinishedReading;
