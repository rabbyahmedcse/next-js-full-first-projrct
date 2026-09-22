import { IBook } from "@/type/books.type";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import ReadButton from "@/app/component/BookReadButton/ReadButton";
import WishListButton from "@/app/component/BooksWishListButton/WishListButton";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

// const getBooks = async (): Promise<IBook[]> => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SARVER_BASE_URL}/booksData.json`);

//   if (!res.ok) {
//     throw new Error("Failed to fetch books");
//   }

//   return res.json();
// };
const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SARVER_BASE_URL}/booksData.json`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    throw new Error("Failed to load books");
  }
};



const BookDetailsPage = async ({
  params,
}: IBookDetailsPageProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (book: IBook) => book.bookId === Number(id)
  ) as IBook;

  if (!book) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl p-10">
      <div className="card lg:card-side overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition duration-300 hover:shadow-2xl">

        {/* Image */}
        <figure className="bg-gradient-to-br from-slate-100 to-slate-200 p-8 lg:w-2/5">
          <Image
            width={500}
            height={800}
            src={book.image}
            alt={book.bookName}
            className="h-[430px] w-auto rounded-2xl object-cover shadow-lg transition duration-300 hover:scale-105"
          />
        </figure>

        {/* Content */}
        <div className="card-body justify-center p-8 lg:w-3/5">

          {/* Category */}
          <span className="w-fit rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700">
            {book.category}
          </span>

          {/* Book Name */}
          <h2 className="card-title mt-3 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="text-lg font-medium text-slate-500">
            By {book.author}
          </p>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-2xl text-yellow-400">★</span>
            <span className="text-lg font-bold text-slate-800">
              {book.rating}
            </span>
            <span className="text-sm text-slate-400">
              / 5.0
            </span>
          </div>

          {/* Info */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-400">Pages</p>
              <p className="mt-1 font-semibold text-slate-800">
                {book.totalPages}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-400">Published</p>
              <p className="mt-1 font-semibold text-slate-800">
                {book.yearOfPublishing}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-400">Publisher</p>
              <p className="mt-1 font-semibold text-slate-800">
                {book.publisher}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-400">Book ID</p>
              <p className="mt-1 font-semibold text-slate-800">
                #{book.bookId}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Review */}
          <p className="mt-5 line-clamp-4 text-sm leading-6 text-slate-500">
            {book.review}
          </p>

          {/* Button */}
          <div className="grid grid-cols-2 card-actions mt-6">
           <ReadButton book={book}></ReadButton>
          <WishListButton book={book}></WishListButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;