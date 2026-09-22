import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-white to-purple-50">
      
      {/* Spinner */}
      <div className="relative mb-6 h-16 w-16">
        <div className="absolute inset-0 rounded-full border-4 border-purple-100"></div>

        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-purple-600 border-r-pink-500"></div>

        <div className="absolute inset-3 flex items-center justify-center rounded-full bg-white shadow-sm">
          <span className="text-xl">📖</span>
        </div>
      </div>

      {/* Loading Text */}
      <h2 className="text-xl font-bold text-gray-800">
        Loading Books...
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Please wait while we bring your books.
      </p>

      {/* Dots */}
      <div className="mt-4 flex gap-1">
        <span className="h-2 w-2 animate-bounce rounded-full bg-purple-500"></span>
        <span className="h-2 w-2 animate-bounce rounded-full bg-pink-500 [animation-delay:150ms]"></span>
        <span className="h-2 w-2 animate-bounce rounded-full bg-purple-500 [animation-delay:300ms]"></span>
      </div>
    </div>
  );
};

export default Loading;