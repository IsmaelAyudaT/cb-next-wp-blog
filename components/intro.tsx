import React from "react";
import ThemeToggler from "./ThemeToggler";

export default function Intro() {

  return (
    <>
      <div className="flex justify-end items-start">
        <ThemeToggler />
      </div>      <div className={'flex flex-col justify-center align-middle mt-16'}>
        <section className="flex-col text-center md:flex-row justify-center mb-16 md:mb-12">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            AyudatBlog.
          </h1>
          <h4 className="text-center text-lg mt-5 md:pl-8 !pl-0">
            Blog para AyudatPymes
          </h4>
        </section>
      </div>
    </>
  )
}
