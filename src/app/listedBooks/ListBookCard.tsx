import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/type/books.type";

const ListBookCard = ({ book }: { book: IBook }) => {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:shadow-md">
      <div className="flex flex-col gap-5 sm:flex-row">
        {/* Book Image */}
        <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:w-40">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            className="object-contain p-2"
          />
        </div>

        {/* Book Information */}
        <div className="flex flex-1 flex-col">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="mt-2 text-sm text-gray-700">
            By : <span>{book.author}</span>
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="font-semibold text-sm text-gray-800">
              Tag
            </span>

            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
              >
                #{tag}
              </span>
            ))}

            <span className="ml-2 text-sm text-gray-500">
              ⦿ &nbsp; Year of Publishing: {book.yearOfPublishing}
            </span>
          </div>

          {/* Publisher + Pages */}
          <div className="mt-4 flex flex-wrap items-center gap-5 border-b border-gray-200 pb-3 text-sm text-gray-500">
            <span>
              ♧ &nbsp; Publisher: {book.publisher}
            </span>

            <span>
              ▧ &nbsp; Page {book.totalPages}
            </span>
          </div>

          {/* Bottom Section */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {/* Category */}
            <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-500">
              Category: {book.category}
            </span>

            {/* Rating */}
            <span className="rounded-full bg-orange-50 px-4 py-2 text-xs font-medium text-orange-500">
              Rating: {book.rating}
            </span>

            {/* View Details */}
            <Link
              href={`/books/${book.bookId}`}
              className="rounded-full bg-green-600 px-5 py-2 text-sm font-medium text-white transition duration-300 hover:bg-green-700"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBookCard;