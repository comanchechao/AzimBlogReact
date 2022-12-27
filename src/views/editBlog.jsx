import EditableControls from "../components/editableControls";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { useState } from "react";
import { Spinner } from "phosphor-react";

export default function Edit(props) {
  let { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [firstImage, setFirstImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const [thirdImage, setThirdImage] = useState("");
  const [fourthImage, setFourthImage] = useState("");
  const [firstLoading, setFirstLoading] = useState(true);
  const [secondLoading, setSecondLoading] = useState(true);
  const [thirdLoading, setThirdLoading] = useState(true);
  const [forthLoading, setForthLoading] = useState(true);
  const [blogImages, setBlogImages] = useState([]);

  const getBlog = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select()
        .eq("id", id);
      if (error) throw error;
      setBlog(data[0]);
      downloadImage1(data[0].firstImage);
      downloadImage2(data[0].secondImage);
      downloadImage3(data[0].thirdImage);
      downloadImage4(data[0].forthImage);
    } catch (error) {
    } finally {
      blogImages.push(firstImage, secondImage, thirdImage ,fourthImage)
    }
  };

  const downloadImage1 = async (path) => {
    if (blog !== []) {
      console.log(path);
      setFirstLoading(true);
      try {
        const { data, error } = await supabase.storage
          .from("blog-images")
          .download(path);

        if (error) {
          throw error;
        }
        console.log(path);
        const url = URL.createObjectURL(data);
        setFirstImage(url);
      } catch (error) {
        console.log("Error downloading image: ", error.message);
      } finally {
        setFirstLoading(false);
      }
    }
  };
  const downloadImage2 = async (path) => {
    if (blog !== []) {
      console.log(path);
      setSecondLoading(true);
      try {
        const { data, error } = await supabase.storage
          .from("blog-images")
          .download(path);

        if (error) {
          throw error;
        }
        console.log(path);
        const url = URL.createObjectURL(data);
        setSecondImage(url);
      } catch (error) {
        console.log("Error downloading image: ", error.message);
      } finally {
        setSecondLoading(false);
      }
    }
  };
  const downloadImage3 = async (path) => {
    if (blog !== []) {
      console.log(path);
      setThirdLoading(true);
      try {
        const { data, error } = await supabase.storage
          .from("blog-images")
          .download(path);

        if (error) {
          throw error;
        }
        console.log(path);
        const url = URL.createObjectURL(data);
        setThirdImage(url);
      } catch (error) {
        console.log("Error downloading image: ", error.message);
      } finally {
        setThirdLoading(false);
      }
    }
  };
  const downloadImage4 = async (path) => {
    if (blog !== []) {
      console.log(path);
      setForthLoading(true);
      try {
        const { data, error } = await supabase.storage
          .from("blog-images")
          .download(path);

        if (error) {
          throw error;
        }
        console.log(path);
        const url = URL.createObjectURL(data);
        setFourthImage(url);
      } catch (error) {
        console.log("Error downloading image: ", error.message);
      } finally {
        setForthLoading(false);
      }
    }
  };

  useEffect(() => {
    getBlog();

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen h-full">
      <Navbar></Navbar>
      <div className="w-screen h-full pt-24 bg-CoolGray flex items-center justify-center">
        <EditableControls
          blogTitle={blog.blogTitle}
          blogImages={blogImages}
        ></EditableControls>
      </div>
    </div>
  );
}
