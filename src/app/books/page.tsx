
import React from "react";
import Image from "next/image";
import BookCard from "./BookCard";
import { IBook } from "@/type/books.type";
const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await res.json();
  return data;
};

const Books = async () => {
  const books = await getBooks();

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-12">

      {/* Main Container */}
      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 text-center">

          <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-600">
            📚 Explore Our Collection
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Discover Your Next
            <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Favorite Book
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Explore our collection of amazing books, timeless classics,
            inspiring stories, and unforgettable characters.
          </p>

          <div className="mt-5 text-sm font-medium text-gray-400">
            Showing{" "}
            <span className="font-bold text-purple-600">
              {books.length}
            </span>{" "}
            books
          </div>
        </div>

        {/* Book Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {books.map((book:IBook) => (

           <BookCard key={book.bookId} book={book}></BookCard>

          ))}

        </div>
      </div>
    </section>
  );
};

export default Books;
