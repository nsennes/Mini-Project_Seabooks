import React, { useState, useEffect } from "react";

import AddBookForm from "./AddBookForm";
import WantToReadList from "./WantToReadList";

function WantToRead({
    books,
    setBooks,
    modalBooks,
    modalForm,
    setModalBooks,
    setModalForm,
}) {
    const modifiedList = books.filter((book) => book.shelf === "wantToRead");

    const [listModal, setListModal] = useState(false);
    const [formModal, setFormModal] = useState(false);
    return (
        <React.Fragment>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Want to Read
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
                <WantToReadList
                    books={modifiedList}
                    setBooks={setBooks}
                    setModalBooks={setListModal}
                    shelf="wantToRead"
                />
            ) : null}

            {formModal ? (
                <AddBookForm
                    books={books.filter((book) => book.id === "wantToRead")}
                    setBooks={setBooks}
                    setModalForm={setFormModal}
                    shelf="wantToRead"
                />
            ) : null}
        </React.Fragment>
    );
}

export default WantToRead;
