'use client'
import { IBook } from '@/type/books.type';
import React, { useContext } from 'react';

import { BooksContext } from '@/context/BookContext';
import { toast } from 'react-toastify';

const ReadButton = ({ book }: { book: IBook }) => {

    const { readBooks, setReadBooks } = useContext(BooksContext);

    const alreadyRead = readBooks.some(
      (item) => item.bookId === book.bookId
    );

    const handleReadBook = () => {
        const alreadyRead = readBooks.some(
          (item) => item.bookId === book.bookId
        );
       
        if (alreadyRead){
            toast.success(`you have Already read  "${book.bookName}"`);
            return;
        } 
      
        setReadBooks([...readBooks, book]);
        toast.success(`you have read "${book.bookName}"`);
      };

    return (
        
            <button  className={`btn w-full rounded-xl border-0 py-3 transition duration-300 ${ alreadyRead ? "bg-emerald-500 text-white cursor-not-allowed" : "bg-slate-900 text-white hover:bg-emerald-600" }`} onClick={() => handleReadBook()} >
                {alreadyRead? "✓ Already Read"  : "Read →"}
            </button>
       
    );
};

export default ReadButton;