import Navbar from "../components/navbar";
import nordGlasses from "../assets/images/nordGlasses.webp";
import { Eyeglasses } from "phosphor-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../supabaseClient";
import BlogList from "../components/blogList";
import { useTranslation } from "react-i18next";
import BlogImage from "../components/blogImage";
import logo from "../assets/images/logo.png";

export default function blogs() {
  const { t, i18n } = useTranslation();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstBlog, setFirstBlog] = useState({});
  const [secondBlog, setSecondBlog] = useState({});
  const [thirdBlog, setThirdBlog] = useState({});
  const [fourthBlog, setFourthBlog] = useState({});
  const getBlogs = async function () {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("blogs")
        .select()
        .order("created_at", { ascending: false })
        .limit(4);
      if (error) throw error;
      data.forEach((blog) => {
        blogs.push(blog);
      });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      console.log(blogs);
      setFirstBlog(blogs[0]);
      setSecondBlog(blogs[1]);
      setThirdBlog(blogs[2]);
      setFourthBlog(blogs[3]);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className=" w-screen  h-full bg-mainWhite">
      <Navbar />
      <div className="p-5 flex flex-col space-y-5 w-screen h-full items-center bg-CoolGray">
        <div className="mt-16 space-y-6 w-full flex justify-end items-center flex-col   align-center">
          <h1
            className="font-bold text-mainWhite font-SultanFont capitalize leading-tight
              mb-20  mt-40 text-5xl lg:text-10xl text-center"
          >
            Azim Blog
          </h1>
          <div className="flex w-full space-y-2 flex-col justify-center align-center items-center">
            <div className="w-screen h-auto lg:h-carousel mt-12  lg:px-32 lg:py-24 lg:flex-row space-x-5 flex-col flex items-center bg-CoolGray">
              <div className="lg:w-1/2 w-full h-auto text-mainWhite  flex items-center lg:items-end flex-col text-center lg:text-right">
                {!loading ? (
                  <BlogImage
                    className="h-96 object-contain  "
                    BlogImage={firstBlog.firstImage}
                  />
                ) : null}
                <div className="flex items-center lg:items-end mt-2 flex-col space-y-3 lg:px-0 px-5">
                  <h1 className="lg:text-4xl text-2xl font-bold  mt-0 lg:mt-3">
                    {firstBlog.blogTitle}
                  </h1>
                  <h3 className="text-lg font-light text-mainCream ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore inventore a iusto nemo, asperiores quod veniam
                    excepturi totam sit debitis magnam et accusamus dolores quo
                    molestias voluptatibus atque. Delectus, tenetur.
                  </h3>
                </div>
              </div>
              <div className="lg:w-1/2 w-full lg:mt-0 my-8  h-auto flex flex-col justify-center space-y-7 text-mainWhite items-center ">
                <div className="flex w-full  flex-col items-center justify-center space-y-5 lg:space-x-5">
                  {!loading ? (
                    <BlogImage className='w-52 h-52 object-contain' BlogImage={secondBlog.firstImage} />
                  ) : null}

                  <h1 className="lg:text-4xl text-2xl font-bold lg:pr-40">
                    {secondBlog.blogTitle}
                  </h1>
                </div>
                <div className="flex w-full  flex-col items-center justify-center space-y-5 lg:space-x-5">
                  {!loading ? (
                    <BlogImage className='w-52 h-52 object-contain' BlogImage={thirdBlog.firstImage} />
                  ) : null}
                  <h1 className="lg:text-4xl text-2xl font-bold lg:pr-40">
                    {thirdBlog.blogTitle}
                  </h1>
                </div>
                {/* <div className="flex w-full lg:flex-row flex-col items-center justify-center space-y-5 lg:space-x-5">
                  <h1 className="lg:text-4xl text-2xl font-bold lg:pr-40">
                    {!loading ? (
                      <BlogImage BlogImage={fourthBlog.firstImage} />
                    ) : null}
                  </h1>

                  <h1 className="lg:text-4xl text-2xl font-bold lg:pr-40">
                    {fourthBlog.blogTitle}
                  </h1>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="bg-white p-5 rounded-full">
            <DotsThreeOutlineVertical size={40} />
          </div> */}
        </div>
        <div className="flex pt-10 flex-col w-full justify-center items-center ">
          <input
            className="p-4 w-80 rounded-full  mt-24 text-xl text-right placeholder-gray-900"
            placeholder="جستجو..."
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
