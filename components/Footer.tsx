import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

export function Footer() {
  return (
    <div className="flex flex-col md:grid grid-cols-3 items-center bg-gray-900 padded py-6 text-gray-200">
      <div className="hidden md:block">
        <img
          src="/images/logo.png"
          alt={process.env.SITE_NAME}
          className="max-w-[70px] hover-spinner"
        />
      </div>
      <div className="text-center text-gray-400 text-sm">
        Copyright © 2024. All rights reserved.
      </div>
      <div className="flex mt-4 md:mt-0 justify-center md:justify-end gap-3 text-4xl [&>a:hover]:scale-125 [&>a]:duration-300">
        <a href={process.env.SOCIAL_FACEBOOK}>
          <FaFacebookSquare />
        </a>
        <a href={process.env.SOCIAL_YOUTUBE}>
          <FaYoutube />
        </a>
        <a href={process.env.SOCIAL_INSTAGRAM}>
          <FaInstagramSquare />
        </a>
      </div>
    </div>
  );
}
