import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useEffect } from "react";
import BlogImage from "./blogImage.jsx";
import {
  Skeleton,
  Stack,
  SkeletonCircle,
  SkeletonText,
  Box,
} from "@chakra-ui/react";

import { SortDescending, SortAscending } from "phosphor-react";

export default function blogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstImage, setFirstImage] = useState(null);
  const [ascending, setAscention] = useState(false);
  const [page, setPage] = useState(1);
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(2);

  const getBlogs = async function () {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("blogs")
        .select()
        .order("created_at", { ascending: ascending })
        .range(from - 1, to * 2);
      if (error) throw error;
      setBlogs(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, [ascending, to]);

  if (loading) {
    return (
      <div className="rounded w-full h-full flex items-center justify-center flex-col">
        <Box padding="10" boxShadow="lg" bg="white">
          <Stack className=" space-y-28">
            <SkeletonCircle size="250" />
            <SkeletonCircle size="250" />
            <SkeletonCircle size="250" />
          </Stack>
        </Box>
      </div>
    );
  }

  if (blogs === []) {
    return (
      <div className="w-full h-54 flex justify-center items-center">
        <h2 className="text-4xl">No blogs posted</h2>
      </div>
    );
  }

  return (
    <div className="w-full lg:p-24 flex justify-center flex-wrap items-center h-full">
      <div className="flex bg-white items-center rounded justify-end w-full h-12">
        {ascending ? (
          <SortAscending
            className="transition"
            size={32}
            onClick={() => {
              setAscention(false);
            }}
          />
        ) : (
          <SortDescending
            className="transition"
            onClick={() => {
              setAscention(true);
            }}
            size={32}
          />
        )}
      </div>
      {blogs.map((blog) => {
        return (
          <div
            key={blog.id}
            className="flex flex-wrap justify-center rounded-sm space-y-10 lg:p-12 w-full h-full my-14 bg-mainCream shadow-2xl"
          >
            <div className="flex flex-col   space-y-2 md:flex-row lg:flex-row    h-full">
              <div className="w-full">
                <BlogImage className=" " BlogImage={blog.firstImage} />
              </div>
              <div className="flex p-2 space-y-5 text-center flex-col justify-between pt-14 items-center w-full lg:w-1/2  ">
                <div>
                  <p className="text-xl lg:text-3xl">Sunday 2021</p>
                  <h1 className="text-3xl m-6 lg:text-6xl flex-col font-bold">
                    {blog.blogTitle}
                  </h1>
                  <p className="text-xl lg:text-3xl">{blog.firstInfo}</p>
                </div>
                <div className="flex justify-start p-5  items-end">
                  <Link to={`/blogs/${blog.id}`}>
                    <button className="px-12 transition ease-in duration-300  border-4 border-dashed border-CoolGray py-2 text-4xl hover:text-mainBlue hover:bg-CoolGray font-bold my-3 bg-mainCream  rounded-full  ">
                      Continue
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="w-full flex justify-center">
        <div className="flex  w-72 justify-around">
          <div className="flex justify-center items-center">
            <p
              className="p-5 rounded-full flex flex-col space-y-4 text-2xl items-center my-6 transition ease-in hover:text-mainBlue hover:bg-CoolGray duration-300 px-7 py-2 bg-mainWhite text-CoolGray border-2 border-dashed border-CoolGray justify-center align-center cursor-pointer"
              onClick={(e) => {
                setTo(to + 1);
              }}
            >
              <span>بیشتر نشونم بده</span>
              {/* <ArrowDown size={30} weight="fill" /> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
