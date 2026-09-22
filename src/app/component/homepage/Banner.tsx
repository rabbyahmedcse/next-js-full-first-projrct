import React from "react";
import Image from "next/image";
import img from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 items-center gap-8 rounded-3xl bg-slate-100 p-8 md:grid-cols-2 md:p-12">

        <div className="space-y-5">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600">
            📚 Discover Your Next Read
          </span>

          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Books to freshen up{" "}
            <span className="text-emerald-600">your bookshelf</span>
          </h1>

          <p className="max-w-lg text-slate-600">
            Discover amazing books and find your next favorite read.
          </p>

          <button className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
            Explore Books →
          </button>
        </div>

        <div className="flex justify-center">
          <Image
            src={img}
            alt="Books"
            width={600}
            height={500}
            priority
            className="rounded-2xl object-cover shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;