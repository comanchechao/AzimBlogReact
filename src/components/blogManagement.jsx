import { useEffect, useState, useRef } from "react";
import { Trash, PlusCircle } from "phosphor-react";
import { supabase } from "../supabaseClient";
import BlogImage from "./blogImage";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Skeleton,
  Stack,
  Box,
  Button,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function blogManage() {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [capturedId, setCaptureId] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);

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

  const removeBlog = async function (id) {
    try {
      const { error } = await supabase.from("blogs").delete().eq("id", id);
      if (error) throw error;
      alert("removeds");
    } catch (error) {
      alert(error.message);
    } finally {
      getBlogs();
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div className="flex flex-col bg-blueGray-200 items-center space-y-5 w-full justify-center p-5 capitalize">
      <div className="flex w-full items-center justify-between px-3 bg-CoolGray h-20">
        <input
          className="rounded p-3 w-80"
          placeholder="Search ... "
          type="text"
        />
        <div className="flex p-2"></div>
      </div>

      <div className=" fixed bottom-5 right-5">
        <div className="flex justify-center items-center">
          <Link to={"/create/newblog"}>
            <PlusCircle
              className="w-14 h-14 justify-self-center text-white bg-blueGray-900 rounded-full"
              size={42}
            />
          </Link>
        </div>
      </div>

      {loading === false ? (
        <div className="flex flex-wrap space-x-2  items-center space-y-2 w-full justify-center font-bold text-xl  h-full shadow-2xl rounded">
          {blogs.map((blog) => {
            return (
              <div
                key={blog.id}
                className="flex flex-col items-center pb-2  justify-around bg-CoolGray w-full h-full lg:h-1/2 lg:w-1/2 space-y-5 rounded shadow-xl"
              >
                <BlogImage BlogImage={blog.firstImage} />
                <h2 className="text-3xl text-mainWhite font-bold">
                  {blog.blogTitle}
                </h2>
                <h2 className="text-xl text-mainWhite xs:hidden">
                  {blog.firstInfo}
                </h2>
                <div className="flex w-full justify-around">
                  <button
                    onClick={() => {
                      console.log(blog.id);
                    }}
                    className="transition font-bold text-xl  bg-mainWhite text-CoolGray hover:bg-mainCream p-3 rounded"
                  >
                    Edit
                  </button>

                  <Button
                    className="transition font-bold text-xl hover:text-white bg-red-500 text-white hover:bg-gray-600 p-9 rounded"
                    onClick={() => {
                      setCaptureId(blog.id);
                      console.log(capturedId);
                      onOpen();
                    }}
                  >
                    <Trash
                      onClick={() => {
                        setCaptureId(blog.id);
                        console.log(capturedId);
                      }}
                      className="text-red-500"
                      size={32}
                    />
                  </Button>
                  <Modal
                    className="bg-Cyan-400"
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Delete Action</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>Are you sure to delete?</ModalBody>

                      <ModalFooter>
                        <Button colorScheme="gray" mr={3} onClick={onClose}>
                          Close
                        </Button>
                        <Button
                          onClick={() => {
                            removeBlog(capturedId);
                            onClose();
                          }}
                          className="bg-red-500 text-white"
                          variant="ghost"
                        >
                          Yes , DELETE blog.
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-full h-64 rounded">
          <Box padding="10" boxShadow="xl" bg="white">
            <Stack>
              <Skeleton height="40px" />
              <Skeleton height="40px" />
              <Skeleton height="40px" />
            </Stack>
          </Box>
        </div>
      )}
    </div>
  );
}
