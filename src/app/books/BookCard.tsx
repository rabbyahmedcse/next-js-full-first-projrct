import React from 'react';
import Image from 'next/image';
import { IBook } from "@/type/books.type";
import Link from 'next/link';

interface Ibookprops {
  book: IBook;
}
const BookCard = ({ book }: Ibookprops) => {
  return (
    <div
      key={book.bookId}
      className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-purple-200 hover:shadow-2xl"
    >

      {/* ================= IMAGE ================= */}
      <div className="relative h-72 overflow-hidden bg-gray-100">

        <Image
          src={book.image}
          alt={book.bookName}
          width={800}
          height={800}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-bold text-purple-600 shadow-lg backdrop-blur">
            {book.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
          <span>⭐</span>
          <span>{book.rating}</span>
        </div>

        {/* Book Name On Image */}
        <div className="absolute bottom-4 left-4 right-4">

          <h2 className="line-clamp-2 text-xl font-bold text-white drop-shadow-lg">
            {book.bookName}
          </h2>

          <p className="mt-1 text-sm text-gray-200">
            by {book.author}
          </p>

        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-5">

        {/* Tags */}
        <div className="flex flex-wrap gap-2">

          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600 transition hover:bg-purple-100"
            >
              #{tag}
            </span>
          ))}

        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-gray-100" />

        {/* Book Information */}
        <div className="grid grid-cols-2 gap-y-4">

          {/* Pages */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              📄
            </div>

            <div>
              <p className="text-[11px] text-gray-400">
                Pages
              </p>

              <p className="text-sm font-bold text-gray-800">
                {book.totalPages}
              </p>
            </div>
          </div>

          {/* Year */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              📅
            </div>

            <div>
              <p className="text-[11px] text-gray-400">
                Published
              </p>

              <p className="text-sm font-bold text-gray-800">
                {book.yearOfPublishing}
              </p>
            </div>
          </div>

          {/* Publisher */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-600">
              🏢
            </div>

            <div className="min-w-0">
              <p className="text-[11px] text-gray-400">
                Publisher
              </p>

              <p className="truncate text-sm font-bold text-gray-800">
                {book.publisher}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-50 text-yellow-500">
              ⭐
            </div>

            <div>
              <p className="text-[11px] text-gray-400">
                Rating
              </p>

              <p className="text-sm font-bold text-gray-800">
                {book.rating}/5
              </p>
            </div>
          </div>

        </div>

        {/* Button */}
        <Link
          href={`/books/${book.bookId}`}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-200"
        >
          View Details

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

      </div>
    </div>
  );
};

export default BookCard;