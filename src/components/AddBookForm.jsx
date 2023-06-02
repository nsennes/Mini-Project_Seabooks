import React, { useRef } from "react";

function AddBookForm({ books, setBooks, setModalForm, shelf }) {
    const title = useRef();
    const author = useRef();
    const date = useRef();
    const genre = useRef();

    const addBook = (e) => {
        e.preventDefault();
        const id = Math.random().toString(16).slice(2);

        const bookObject = {
            id: id,
            title: title.current.value,
            date: date.current.value,
            genre: genre.current.value,
            shelf: shelf,
        };
        setBooks([...books, bookObject]);
        closeForm();
    };

    const closeForm = () => {
        setModalForm(false);
    };
    return (
        <div className="fixed top-[10%] left-1/2 -translate-x-1/2 bg-gray-200 max-w-sm w-full rounded-sm p-4">
            <form onSubmit={addBook} className="relative pt-4">
                <i
                    onClick={closeForm}
                    className="fa-solid fa-xmark cursor-pointer absolute top-1 right-1 hover:text-red-500 ease duration-200"
                ></i>
                <div class="mb-6">
                    <label
                        for="title"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Book title
                    </label>
                    <input
                        ref={title}
                        type="text"
                        id="title"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Hary Potter"
                        required
                    />
                </div>
                <div class="mb-6">
                    <label
                        for="author"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Author
                    </label>
                    <input
                        ref={author}
                        type="text"
                        id="author"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="J.K Rowling"
                        required
                    />
                </div>
                <div class="mb-6">
                    <label
                        for="date"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Date published
                    </label>
                    <input
                        ref={date}
                        type="date"
                        id="date"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    />
                </div>
                <div class="mb-6">
                    <label
                        for="genre"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Genre
                    </label>
                    <input
                        ref={genre}
                        type="text"
                        id="genre"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Fantasy"
                        required
                    />
                </div>

                <button
                    type="submit"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Add book
                </button>
            </form>
        </div>
    );
}

export default AddBookForm;
