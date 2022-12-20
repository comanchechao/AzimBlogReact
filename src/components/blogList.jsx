import { SquaresFour, Rows } from "phosphor-react";
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

export default function blogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstImage, setFirstImage] = useState(null);

  const getBlogs = async function () {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("blogs").select();
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
  }, []);

  if (loading) {
    return (
      <div className="rounded w-full h-full flex items-center justify-center flex-col space-y-28">
        <Box padding="10" boxShadow="lg" bg="white">
          <Stack>
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
        <SquaresFour className=" transition hover:bg-mainBlue" size={45} />
        <Rows className=" transition hover:bg-mainBlue" size={45} />
      </div>
      {blogs.map((blog) => {
        return (
          <div
            key={blog.id}
            className="flex flex-wrap justify-center rounded-sm space-y-10 p-12 w-full h-full my-14 bg-mainCream shadow-2xl"
          >
            <div className="flex flex-col   space-y-2 md:flex-row lg:flex-row    h-full">
              <div className="w-full">
                <BlogImage className=" " BlogImage={blog.firstImage} />
              </div>
              <div className="flex p-2 space-y-5 text-center flex-col justify-between pt-14 items-center w-1/2  ">
                <div>
                  <p className="text-xl lg:text-3xl">Sunday 2021</p>
                  <h1 className="text-3xl m-6 lg:text-6xl flex-col font-bold">
                    {blog.blogTitle}
                  </h1>
                  <p className="text-xl lg:text-3xl">{blog.firstInfo}</p>
                </div>
                <div className="flex justify-start p-5  items-end">
                  <Link to={`/blogs/${blog.id}`}>
                    <button className="px-12 transition ease-in duration-300  border-4 border-dashed border-CoolGray-900 py-2 text-4xl hover:text-mainBlue hover:bg-CoolGray-900 font-bold my-3 bg-mainCream  rounded-full  ">
                      Continue
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
