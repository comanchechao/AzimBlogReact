import Navbar from "../components/navbar";
import nordGlasses from "../assets/images/nordGlasses.webp";
import { Eyeglasses } from "phosphor-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../supabaseClient";
import BlogList from "../components/blogList";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.png";

export default function blogs() {
  const { t, i18n } = useTranslation();

  return (
    <div className=" w-screen  h-full bg-mainWhite">
      <Navbar />
      <div className="p-5 flex flex-col space-y-5 w-screen h-full items-center bg-CoolGray">
        <div className="mt-16 space-y-6 w-full flex justify-end items-center flex-col   align-center">
          <div className="flex w-full space-y-2 flex-col justify-center align-center items-center">
            <div className="flex w-10/12 flex-col-reverse py-5 lg:flex-row justify-around ">
              <img
                className="bg-mainCream p-5 rounded-full w-96 h-96 object-contain"
                src={logo}
                alt=""
              />
              <h1
                className="font-bold text-mainWhite font-SultanFont capitalize leading-tight
              mb-20  mt-40 text-5xl lg:text-8xl text-center"
              >
                فروشگاه شانل
              </h1>
            </div>
            <h1
              className="font-bold text-mainWhite font-SultanFont capitalize leading-tight
                mt-40 text-xl lg:text-2xl text-center"
            >
              وبلاگ های بروز
            </h1>
          </div>
          {/* <div className="bg-white p-5 rounded-full">
            <DotsThreeOutlineVertical size={40} />
          </div> */}
        </div>
        <div className="w-screen h-auto lg:h-carousel   lg:px-32 lg:py-24 lg:flex-row flex-col flex items-center bg-CoolGray"></div>
        <div className="flex w-full justify-center items-center flex-col">
          <input
            className="p-4 w-80 rounded-full  mt-24 text-xl text-right placeholder-gray-900"
            placeholder="جستوجو..."
            type="text"
          />
        </div>
        <div className="w-full h-full">
          <BlogList />
        </div>
      </div>
    </div>
  );
}
