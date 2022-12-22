import Navbar from "../components/navbar";
import nordGlasses from "../assets/images/nordGlasses.webp";
import { DotsThreeOutlineVertical, SquaresFour, Rows } from "phosphor-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../supabaseClient";
import BlogList from "../components/blogList";
import { useTranslation } from "react-i18next";

export default function blogs() {
  const { t, i18n } = useTranslation();

  return (
    <div className=" w-full  h-full bg-mainWhite">
      <Navbar />
      <div className="p-5 flex flex-col space-y-5 w-screen h-full items-center bg-CoolGray-900">
        <div className="mt-16 space-y-6 flex justify-end items-center flex-col   align-center">
          <div className="flex space-y-2 flex-col justify-center align-center items-center">
            <h1 className="font-bold text-mainWhite capitalize leading-tight mt-7 text-10xl text-center">
              Azim Blog
            </h1>
            <h2 className="text-xl text-mainWhite ">Monday 2022</h2>
          </div>
          {/* <div className="bg-white p-5 rounded-full">
            <DotsThreeOutlineVertical size={40} />
          </div> */}
        </div>
        <div className="w-screen h-carousel  px-32 py-24 flex items-center bg-CoolGray-800">
          <div className="w-1/2 h-auto text-mainWhite  flex items-start flex-col  text-left">
            <img className="  object-contain h-96" src={nordGlasses} alt="" />
            <div className="flex items-start mt-2 flex-col space-y-3">
              <h1 className="text-4xl font-bold pr-40 mt-3">
                Lorem ipsum dolor sit amet consectetur
              </h1>
              <h3 className="text-lg font-light text-mainCream pr-40">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore inventore a iusto nemo, asperiores quod veniam excepturi
                totam sit debitis magnam et accusamus dolores quo molestias
                voluptatibus atque. Delectus, tenetur.
              </h3>
            </div>
          </div>
          <div className="w-1/2  h-auto flex flex-col justify-center space-y-6 text-mainWhite items-center ">
            <div className="flex items-center justify-center space-x-5">
              <img className="  object-contain h-40" src={nordGlasses} alt="" />

              <h1 className="text-4xl font-bold pr-40">
                Lorem ipsum dolor sit amet consectetur
              </h1>
            </div>
            <div className="flex items-center justify-center space-x-5">
              <img className="  object-contain h-40" src={nordGlasses} alt="" />

              <h1 className="text-4xl font-bold pr-40">
                Lorem ipsum dolor sit amet consectetur
              </h1>
            </div>
            <div className="flex items-center justify-center space-x-5">
              <img className="  object-contain h-40" src={nordGlasses} alt="" />

              <h1 className="text-4xl font-bold pr-40">
                Lorem ipsum dolor sit amet consectetur
              </h1>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-center flex-col">
          <input
            className="p-4 w-80 rounded-full  mt-24 text-xl placeholder-gray-900"
            placeholder="Search Articles..."
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
