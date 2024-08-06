"use client";

import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-accent padded text-white py-4 flex justify-between items-center">
      <div className="logo hover-spinner">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Blog Sayfam"
            className="max-w-[80px]"
          />
        </a>
      </div>
      <div className="">
        <div
          className="md:hidden cursor-pointer"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? (
            <MdMenuOpen className="text-5xl" />
          ) : (
            <IoMdMenu className="text-5xl" />
          )}
        </div>
        <ul
          className={`main-menu ${!isOpen ? "hidden" : "fixed left-0 bg-[rgba(0,0,0,0.7)] i top-20 w-full px-4 text-xl flex flex-col gap-4 py-5"} md:flex gap-3 `}
        >
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li>
            <a href="/blog">Yazılarım</a>
          </li>
          <li>
            <a href="/aboutme">Hakkımda</a>
          </li>
          <li>
            <a href="/contact">İletişim</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
