'use client'
import { IBook } from '@/type/books.type';
import React, { useContext } from 'react';

import { BooksContext } from '@/context/BookContext';
import { toast } from 'react-toastify';

const ReadButton = ({ book }: { book: IBook }) => {

    const { readBooks, setReadBooks } = useContext(BooksContext);



    const handleReadBook = () => {
        const alreadyRead = readBooks.some(
          (item) => item.bookId === book.bookId
        );
       
        if (alreadyRead){
            toast.success(`you have Already  "${book.bookName}"`);
            return;
        } 
      
        setReadBooks([...readBooks, book]);
        toast.success(`you have read "${book.bookName}"`);
      };

    return (
        
            <button className="btn w-full rounded-xl border-0 bg-slate-900 py-3 text-white transition duration-300 hover:bg-emerald-600" onClick={() => handleReadBook()} >
                Read →
            </button>
       
    );
};

export default ReadButton;