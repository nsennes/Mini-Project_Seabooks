import React, { useEffect, useState } from "react";

function ListOfBooks({ books, setBooks, setModalBooks, shelf }) {
    const filteredBooks = books.filter((book) => book.shelf === shelf);

    const [title, setTitle] = useState("");
    
    useEffect(() => {
        console.log(shelf);
        if (shelf === "wantToRead") {
            setTitle("Want to read books");
        } else if (shelf === "currentlyReading") {
            setTitle("Currently reading books");
        } else {
            setTitle("Finished reading");
        }
    }, []);

    const removeBook = () => {
        
    }
    const closeModal = () => {
        setModalBooks(false);
    };

    return (
        <div className="fixed max-w-sm w-full top-1/4 left-1/2 -translate-x-1/2 bg-gray-200 p-2 rounded-sm">
            <ul className="relative pt-4">
                <h3 className="text-md mb-4 px-2 border-b font-semibold text-blue-600">
                    {title}
                </h3>
                <i
                    onClick={closeModal}
                    className="fa-solid fa-xmark cursor-pointer absolute top-1 right-1 hover:text-red-500 ease duration-200"
                ></i>
                {filteredBooks.map((book) => {
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

export default ListOfBooks;
