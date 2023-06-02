import React, { useState } from "react";
import Navbar from "../components/Navbar";
import waves from "../assets/images/waves.png";

import CurrentlyReading from "../components/CurrentlyReading";
import FinishedReading from "../components/FinishedReading";
import WantToRead from "../components/WantToRead";

function MyLibrary() {
    const [books, setBooks] = useState([
        { id: 1, title: "Book 1", shelf: "wantToRead", image: null },
        { id: 2, title: "Book 2", shelf: "currentlyReading", image: null },
        { id: 3, title: "Book 3", shelf: "currentlyReading", image: null },
        { id: 4, title: "Book 4", shelf: "currentlyReading", image: null },
        { id: 5, title: "Book 5", shelf: "currentlyReading", image: null },
        { id: 6, title: "Book 6", shelf: "currentlyReading", image: null },
        { id: 7, title: "Book7", shelf: "finishedReading", image: null },
    ]);

    const [modalBooks, setModalBooks] = useState(false);
    const [modalForm, setModalForm] = useState(false);

    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center mt-20">
                <h2 className="text-3xl font-bold mb-6">My Library</h2>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3 w-full max-w-screen-lg justify-center">
                    {/* Want to Read Card */}
                    <WantToRead
                        books={books}
                        setBooks={setBooks}
                        modalBooks={modalBooks}
                        modalForm={modalForm}
                        setModalBooks={setModalBooks}
                        setModalForm={setModalForm}
                    />

                    {/* Currently Reading Card */}
                    <CurrentlyReading
                        books={books}
                        setBooks={setBooks}
                        modalBooks={modalBooks}
                        modalForm={modalForm}
                        setModalBooks={setModalBooks}
                        setModalForm={setModalForm}
                    />

                    {/* Finished Reading Card */}
                    <FinishedReading
                        books={books}
                        setBooks={setBooks}
                        modalBooks={modalBooks}
                        modalForm={modalForm}
                        setModalBooks={setModalBooks}
                        setModalForm={setModalForm}
                    />
                </div>
            </div>
        </>
    );
}

export default MyLibrary;
