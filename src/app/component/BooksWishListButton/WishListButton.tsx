"use client";
import { BooksContext } from '@/context/BookContext';
import { IBook } from '@/type/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({book}:{book:IBook}) => {
    const {wishlist,setWishList} = useContext(BooksContext);
    const handleWishListBook =()=>{
        setWishList([...wishlist,book]);
        toast.success(`You have add wish "${book.bookName}"`)
    }
    return (
        
              <button onClick={()=> handleWishListBook()} className="btn w-full rounded-xl border-0 bg-slate-700 py-3 text-white transition duration-300 hover:bg-emerald-600">
              Whish List →
            </button>
       
    );
};

export default WishListButton;