import { Upload } from "phosphor-react";
import { useState } from "react";
import { useRef } from "react";
import Navbar from "../components/navbar";
import { supabase } from "../supabaseClient";
import { Tab } from "@headlessui/react";
import { Spinner } from "@chakra-ui/react";

export default function newBlog() {
  const [section, setSection] = useState(1);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const firstImageUpload = async (event) => {
    try {
      event.preventDefault();
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      setFirstImage(filePath);

      let { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  const secondImageUpload = async (event) => {
    try {
      event.preventDefault();
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      setSecondImage(filePath);

      let { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  const thirdImageUpload = async (event) => {
    try {
      event.preventDefault();
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      setThirdImage(filePath);

      let { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }
      console.log(thirdImage);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  const forthImageUpload = async (event) => {
    try {
      event.preventDefault();
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      setForthImage(filePath);

      let { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const { data, error } = await supabase.from("blogs").insert([
        {
          blogTitle,
          firstTitle,
          firstInfo,
          firstContent,
          firstImage,
          secondTitle,
          secondImage,
          secondInfo,
          secondContent,
          thirdTitle,
          thirdInfo,
          thirdContent,
          thirdImage,
          forthTitle,
          forthInfo,
          forthContent,
          forthImage,
        },
      ]);
      console.log(firstImage, secondImage, thirdImage, forthImage);
      if (error) throw error;
      alert("blog added");
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  const [blogTitle, setBlogTitle] = useState("");

  const [firstTitle, setFirstTitle] = useState("");
  const [firstImage, setFirstImage] = useState(null);
  const [firstInfo, setFirstInfo] = useState("");
  const [firstContent, setFirstContent] = useState("");

  const [secondTitle, setSecondTitle] = useState("");
  const [secondImage, setSecondImage] = useState(null);
  const [secondInfo, setSecondInfo] = useState("");
  const [secondContent, setSecondContent] = useState("");

  const [thirdTitle, setThirdTitle] = useState("");
  const [thirdImage, setThirdImage] = useState(null);
  const [thirdInfo, setThirdInfo] = useState("");
  const [thirdContent, setThirdContent] = useState("");

  const [forthTitle, setForthTitle] = useState("");
  const [forthImage, setForthImage] = useState(null);
  const [forthInfo, setForthInfo] = useState("");
  const [forthContent, setForthContent] = useState("");

  const [fifthTitle, setFifthTitle] = useState("");
  const [fifthImage, setFifthImage] = useState(null);
  const [fifthInfo, setFifthInfo] = useState("");
  const [fifthContent, setFifthContent] = useState("");

  const [sixthTitle, setSixthTitle] = useState("");
  const [sixthImage, setSIxthImage] = useState(null);
  const [sixthInfo, setSixthInfo] = useState("");
  const [sixthContent, setSixthContent] = useState("");

  const [seventhTitle, setSevenTitle] = useState("");
  const [seventhImage, setSeventhImage] = useState(null);
  const [seventhInfo, setSeventhInfo] = useState("");
  const [seventhContent, setSeventhContent] = useState("");

  const [eighthTitle, setEighthTitle] = useState("");
  const [eightImage, setEightImage] = useState(null);
  const [eightInfo, setEightInfo] = useState("");
  const [eightContent, setEightContent] = useState("");

  const [ninethTitle, setNinethTitle] = useState("");
  const [ninethImage, setNinethImage] = useState(null);
  const [ninethInfo, setNinethInfo] = useState("");
  const [ninethContent, setNinethContent] = useState("");

  const [tenTitle, setTenTitle] = useState("");
  const [tenImage, setTenImage] = useState(null);
  const [tenInfo, setTenInfo] = useState("");
  const [tenContent, setTenContent] = useState("");

  return (
    <div className="w-screen h-full bg-CoolGray">
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-col h-full w-full"
      >
        <div className="flex flex-wrap w-full h-52 justify-around mt-24 items-center">
          <label className="text-6xl text-mainWhite font-bold">
            Blog Title
          </label>
          <input
            placeholder="type ... "
            type="text"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            className="py-8 w-2/3 px-4 rounded text-left text-CoolGray text-xl bg-mainWhite"
          />
        </div>
        <div className="flex my-4 mt-36  lg:mx-20 bg-CoolGray border-2 border-mainWhite p-3 space-y-6 flex-col justify-center  items-center">
          <div className="flex space-y-4 w-full h-full flex-col justify-center items-center">
            <label
              htmlFor="file1"
              className=" cursor-pointer hover:bg-mainYellow hover:text-CoolGray transition p-5 bg-CoolGray rounded-full text-white"
            >
              {uploading ? <Spinner /> : <Upload size={40}></Upload>}
            </label>
            <input
              onChange={firstImageUpload}
              disabled={uploading}
              id="file1"
              type="file"
              className="hidden"
            />
            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray-200 font-bold text-3xl"
            >
              Enter Title
            </label>
            <input
              value={firstTitle}
              onChange={(e) => setFirstTitle(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-5 lg:w-1/2 w-full text-CoolGray bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>
          <div className="p-4 flex w-full h-full flex-col justify-center items-center">
            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray-200 font-bold text-3xl"
            >
              more info
            </label>
            <input
              value={firstInfo}
              onChange={(e) => setFirstInfo(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-3 lg:w-2/3 h-24 w-full text-CoolGray bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray-100 font-bold text-3xl"
            >
              content
            </label>
            <textarea
              value={firstContent}
              onChange={(e) => setFirstContent(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-3 lg:w-2/3 h-52 w-full text-CoolGray bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="sticky flex justify-start p-5 items-center w-full">
            <div className="sticky w-14 h-14 bg-mainYellow text-CoolGray-50 text-4xl rounded-full font-bold flex justify-center align-center items-center">
              1
            </div>
          </div>
        </div>

        <div className="flex space-y-6 p-5 bg-mainCream lg:mx-20 shadow-2xl rounded flex-col justify-center items-center">
          <div className="flex space-y-4 w-full h-full flex-col justify-center items-center">
            <label
              htmlFor="file2"
              className=" cursor-pointer hover:bg-mainYellow hover:text-CoolGray transition p-5 bg-CoolGray rounded-full text-white"
            >
              {uploading ? <Spinner /> : <Upload size={40}></Upload>}
            </label>
            <input
              onChange={secondImageUpload}
              disabled={uploading}
              placeholder="type ... "
              id="file2"
              type="file"
              className="hidden"
            />
            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray font-bold text-3xl"
            >
              Enter Title
            </label>
            <input
              value={secondTitle}
              onChange={(e) => setSecondTitle(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-5 lg:w-1/2 w-full text-CoolGray-100 bg-CoolGray rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>
          <div className="p-4 flex w-full h-full flex-col justify-center items-center">
            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray font-bold text-3xl"
            >
              more info
            </label>
            <input
              value={secondInfo}
              onChange={(e) => setSecondInfo(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-3 lg:w-2/3 h-24 w-full text-CoolGray-100 bg-CoolGray rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray font-bold text-3xl"
            >
              content
            </label>
            <textarea
              value={secondContent}
              onChange={(e) => setSecondContent(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-3 lg:w-2/3 h-52 w-full text-CoolGray-100 bg-CoolGray rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="sticky flex justify-start p-5 items-center w-full">
            <div className="sticky w-14 h-14 bg-mainYellow text-CoolGray-50 text-4xl rounded-full font-bold flex justify-center align-center items-center">
              2
            </div>
          </div>
        </div>

        <div className="flex space-y-6 flex-col justify-center bg-CoolGray border-2 border-mainWhite p-3 rounded lg:mx-20 items-center">
          <div className="flex space-y-4 w-full h-full flex-col justify-center items-center">
            <label
              htmlFor="file3"
              className=" cursor-pointer hover:bg-mainYellow hover:text-CoolGray transition p-5 bg-CoolGray rounded-full text-white"
            >
              {uploading ? <Spinner /> : <Upload size={40}></Upload>}
            </label>
            <input
              onChange={thirdImageUpload}
              disabled={uploading}
              placeholder="type ... "
              id="file3"
              type="file"
              className="hidden"
            />
            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray-100 font-bold text-3xl"
            >
              Enter Title
            </label>
            <input
              value={thirdTitle}
              onChange={(e) => setThirdTitle(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-5 lg:w-1/2 w-full text-CoolGray bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>
          <div className="p-4 flex w-full h-full flex-col justify-center items-center">
            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray-100 font-bold text-3xl"
            >
              more info
            </label>
            <input
              value={thirdInfo}
              onChange={(e) => setThirdInfo(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-3 lg:w-2/3 h-24 w-full text-CoolGray bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray-100 font-bold text-3xl"
            >
              content
            </label>
            <textarea
              value={thirdContent}
              onChange={(e) => setThirdContent(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-3 lg:w-2/3 h-52 w-full text-CoolGray bg-mainCream rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="flex justify-start p-5 items-center w-full">
            <div className="sticky w-14 h-14 bg-mainYellow text-CoolGray-50 text-4xl rounded-full font-bold flex justify-center align-center items-center">
              3
            </div>
          </div>
        </div>

        <div className="flex space-y-6 bg-mainCream lg:mx-20 shadow-2xl rounded my-8 p-5 flex-col justify-center items-center">
          <div className="flex space-y-4 w-full h-full flex-col justify-center items-center">
            <label
              htmlFor="file4"
              className=" cursor-pointer hover:bg-mainYellow hover:text-CoolGray transition p-5 bg-CoolGray rounded-full text-white"
            >
              {uploading ? <Spinner /> : <Upload size={40}></Upload>}
            </label>
            <input
              onChange={forthImageUpload}
              disabled={uploading}
              placeholder="type ... "
              id="file4"
              type="file"
              className="hidden"
            />
            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray font-bold text-3xl"
            >
              Title
            </label>
            <input
              value={forthTitle}
              onChange={(e) => setForthTitle(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-5 rounded-full lg:w-1/2 w-full text-CoolGray bg-mainWhite border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>
          <div className="p-4 flex w-full h-full flex-col justify-center items-center">
            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray font-bold text-3xl"
            >
              more info
            </label>
            <input
              value={forthInfo}
              onChange={(e) => setForthInfo(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-3 lg:w-2/3 h-24 w-full text-CoolGray-100 bg-CoolGray rounded-lg border border-gray-800 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label
              htmlFor="large-input"
              className="block mb-2 text-CoolGray font-bold text-3xl"
            >
              content
            </label>
            <textarea
              value={forthContent}
              onChange={(e) => setForthContent(e.target.value)}
              placeholder="type ... "
              type="text"
              id="large-input"
              className="block p-3 lg:w-2/3 h-52 w-full text-CoolGray-100 bg-CoolGray rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-CoolGray-500  dark:placeholder-gray-400 text-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex justify-start p-5 items-center w-full">
            <div className="sticky w-14 h-14 bg-mainYellow text-CoolGray-50 text-4xl rounded-full font-bold flex justify-center align-center items-center">
              4
            </div>
          </div>
        </div>

        <div className="p-5 flex flex-wrap space-y-5 justify-around space-x-5">
          <div className="flex flex-col space-y-5 justify-center ">
            <input
              placeholder="Author"
              type="text"
              className="p-5  rounded-sm shadow-md focus:text-CoolGray text-CoolGray   hover:text-CoolGray font-bold text-2xl hover:bg-mainCream transition bg-mainWhite"
            />
            <input
              placeholder="Refrence"
              className="p-5 rounded-sm placeholder-gray-400 shadow-md focus:text-CoolGray text-CoolGray   hover:text-CoolGray font-bold text-2xl hover:bg-mainCream transition bg-mainWhite"
            />
          </div>

          <div className="flex justify-center items-center">
            <button
              className="px-10 py-4 my-3 rounded-full  font-black  text-CoolGray hover:text-CoolGray hover:bg-mainCream text-2xl  duration-300
transition bg-mainYellow"
            >
              Publish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
