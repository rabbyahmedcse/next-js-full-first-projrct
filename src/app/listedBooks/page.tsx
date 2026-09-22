'use client'
import { BooksContext } from '@/context/BookContext';
import { IBook } from '@/type/books.type';
import React, { useContext, useState } from 'react';
import ListBookCard from './ListBookCard';

const ShowReadBooks = () => {
    const { readBooks, wishlist } = useContext(BooksContext);
   const [sortBY,setSortBy]= useState<"rating" | "year"| "pages">();

const sortBooks=(books:IBook[])=>{
   const sortedbook = [...books];
   if(sortBY === "rating"){
     sortedbook.sort((a,b)=> b.rating - a.rating);
   }
   else if(sortBY==="year"){
    sortedbook.sort((a,b)=>b.yearOfPublishing - a.yearOfPublishing);
   }
   else if(sortBY === "pages"){
        sortedbook.sort((a,b)=> b.totalPages - a.totalPages);
   }
   return sortedbook;
}


const sortedReadBooks = sortBooks(readBooks);
const sortedWishBooks = sortBooks(wishlist);


    return (
        <div className='container mx-auto py-[20px]'>
            <h2 className='my-4 bg-amber-200 rounded-3xl py-16 font-bold text-4xl text-center'> Listed books</h2>

            <div className='text-center'>
                <select
                value={sortBY}
                onChange={(e)=>setSortBy(e.target.value as "rating"|"year"|"pages")}
                defaultValue="See type of sort by" className="select select-success">
                    <option disabled={true}>Sort By</option>
                    <option value={"rating"}>Rating</option>
                    <option value={"year"}>Public Year</option>
                    <option value={"pages"}>Number of Pages</option>
                </select>

            </div>





            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`} />
                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-2">
                    {
                        sortedReadBooks.length > 0 ? (
                            sortedReadBooks.map((book: IBook) => {
                                return (
                                    <ListBookCard key={book.bookId} book={book}></ListBookCard>
                                )
                            })
                        ) : (
                            <div className="flex min-h-[250px] flex-col items-center justify-center rounded-2xl border border-dashed border-blue-200 bg-gradient-to-br from-blue-50 via-white to-emerald-50 px-6 py-10 text-center">

                                {/* Icon */}
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl shadow-sm">
                                    📚
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800">
                                    No Read Books Found
                                </h3>

                                {/* Description */}
                                <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                                    You haven't read any books yet. Start reading your favorite
                                    books and keep track of your reading journey here.
                                </p>

                                {/* Small text */}
                                <span className="mt-4 rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-600">
                                    📖 Start Reading Today →
                                </span>

                            </div>
                        )
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Whish List Book (${wishlist.length})`} defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6 space-y-2">
                    {
                        sortedWishBooks.length > 0 ? (
                            sortedWishBooks.map((book: IBook) => {
                                return (
                                    <ListBookCard key={book.bookId} book={book} />
                                )
                            })
                        ) : (
                            <div className="flex min-h-[250px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gradient-to-br from-pink-50 via-white to-purple-50 px-6 py-10 text-center">

                                {/* Icon */}
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 text-3xl shadow-sm">
                                    ♡
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800">
                                    No Wishlist Books Found
                                </h3>

                                {/* Description */}
                                <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                                    You haven't added any books to your wishlist yet.
                                    Explore our collection and save your favorite books here.
                                </p>

                                {/* Small text */}
                                <span className="mt-4 rounded-full bg-pink-100 px-4 py-2 text-xs font-semibold text-pink-600">
                                    Start building your wishlist ❤️
                                </span>
                            </div>
                        )
                    }

                </div>


            </div>
        </div>
    );
};

export default ShowReadBooks;