"use client";
import { BooksContext } from '@/context/BookContext';
import { IBook } from '@/type/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({ book }: { book: IBook }) => {
    const { wishlist, setWishList } = useContext(BooksContext);
    const alreadywish = wishlist.find((fbook:IBook)=> fbook.bookId === book.bookId );

    const handleWishListBook = () => {
        const alreadywish = wishlist.find((fbook: IBook) => fbook.bookId === book.bookId);
        if (alreadywish) {
            toast.success(`You already Add wishList (${book.bookName})`);
            return;
        }
        setWishList([...wishlist, book]);
        toast.success(`You have add wish "${book.bookName}"`)
    }
    return (

        <button onClick={() => handleWishListBook()} className={`btn w-full rounded-xl border-0 py-3 text-white transition duration-300 ${
            alreadywish
              ? "bg-emerald-500 cursor-not-allowed"
              : "bg-slate-700 hover:bg-emerald-600"
          }`}>
            {alreadywish?"✓ Added to Wishlist":"Wish List →"}
        </button>

    );
};

export default WishListButton;