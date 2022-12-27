import {
  EditablePreview,
  Box,
  useColorModeValue,
  IconButton,
  Input,
  useDisclosure,
  useEditableControls,
  ButtonGroup,
  SlideFade,
  Editable,
  Tooltip,
  EditableInput,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { Spinner } from "phosphor-react";

export default function EditableControls(props) {
  let { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [isLoaded, setLoad] = useState(true);
  const [firstImage, setFirstImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const [thirdImage, setThirdImage] = useState("");
  const [fourthImage, setFourthImage] = useState("");
  const [firstLoading, setFirstLoading] = useState(true);
  const [secondLoading, setSecondLoading] = useState(true);
  const [thirdLoading, setThirdLoading] = useState(true);
  const [forthLoading, setForthLoading] = useState(true);
  const [blogImages, setBlogImages] = useState([]);

  // updating values

  const [blogTitle, setBlogTitle] = useState(props.blogTitle);
  const [author, setAuthor] = useState(props.author);
  const [firstTitle, setFirstTitle] = useState(props.firstTitle);
  const [firstInfo, setFirstInfo] = useState(props.firstInfo);
  const [firstContent, setFirstContent] = useState(props.firstContent);
  const [secondTitle, setSecondTitle] = useState(props.secondTitle);
  const [secondInfo, setSecondInfo] = useState(props.secondInfo);
  const [secondContent, setSecondContent] = useState(props.secondContent);
  const [thirdTitle, setThirdTitle] = useState(props.thirdTitle);
  const [thirdInfo, setThirdInfo] = useState(props.thirdInfo);
  const [thirdContent, setThirdContent] = useState(props.thirdContent);
  const [forthTitle, setForthTitle] = useState(props.forthTitle);
  const [forthInfo, setForthInfo] = useState(props.forthInfo);
  const [forthContent, setForthContent] = useState(props.forthContent);

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
      blogImages.push(firstImage, secondImage, thirdImage, fourthImage);
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
        setLoad(false);
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
    console.log(blog);
    window.scrollTo(0, 0);
  }, []);

  const handleUpdate = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .update({
          blogTitle: blogTitle,
          firstTitle: firstTitle,
          firstContent: firstContent,
          firstInfo: firstInfo,
          secondTitle: secondTitle,
          secondInfo: secondInfo,
          secondContent: secondContent,
          thirdTitle: thirdTitle,
          thirdContent: thirdContent,
          thirdInfo: thirdInfo,
          forthTitle: forthTitle,
          forthInfo: forthInfo,
          forthContent: forthContent,
        })
        .eq("id", id);
      if (error) throw error;
      alert("work is done");
    } catch (error) {}
  };

  /* Here's a custom control */
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="end" size="sm" w="full" spacing={2} mt={2}>
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton
          icon={<CloseIcon boxSize={3} />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : null;
  }

  return (
    <div className="w-full h-full">
      {isLoaded ? (
        <div> nothing</div>
      ) : (
        <div className="h-full w-full justify-center items-center flex  flex-col lg:px-24 text-4xl space-y-8 my-4 ">
          <div className="h-full w-full justify-center items-center flex  flex-col lg:px-24 text-4xl space-y-8 my-4 ">
            <div className="flex text-white border-b-2 w-full font-bold justify-center items-center">
              <h1>blog detail</h1>
            </div>
            <Editable
              className="bg-mainCream rounded-sm"
              defaultValue={blog.blogTitle}
              isPreviewFocusable={true}
              selectAllOnFocus={false}
              onSubmit={(e) => {
                setBlogTitle(e);
              }}
            >
              <Tooltip label="برای ادیت کلیک کنید">
                <EditablePreview
                  py={2}
                  px={4}
                  _hover={{
                    background: useColorModeValue("gray.100", "gray.700"),
                  }}
                />
              </Tooltip>
              <Input py={2} px={4} as={EditableInput} />
              <EditableControls />
            </Editable>
            <Editable
              className="bg-mainCream rounded-sm"
              defaultValue={blog.author}
              isPreviewFocusable={true}
              selectAllOnFocus={false}
            >
              <Tooltip label="برای ادیت کلیک کنید">
                <EditablePreview
                  py={2}
                  px={4}
                  _hover={{
                    background: useColorModeValue("gray.100", "gray.700"),
                  }}
                />
              </Tooltip>
              <Input py={2} px={4} as={EditableInput} />
              <EditableControls />
            </Editable>
            <Editable
              className="bg-mainCream rounded-sm"
              defaultValue="Article Edit"
              isPreviewFocusable={true}
              selectAllOnFocus={false}
            >
              <Tooltip label="برای ادیت کلیک کنید">
                <EditablePreview
                  py={2}
                  px={4}
                  _hover={{
                    background: useColorModeValue("gray.100", "gray.700"),
                  }}
                />
              </Tooltip>
              <Input py={2} px={4} as={EditableInput} />
              <EditableControls />
            </Editable>
          </div>
          <div className="h-full w-full justify-center items-center flex  flex-col lg:px-24 text-4xl space-y-8 my-4 ">
            <div className="flex text-white border-b-2 w-full font-bold justify-center items-center">
              <h1>first section</h1>
            </div>
            <Editable
              className="bg-mainCream rounded-sm"
              defaultValue={blog.firstTitle}
              isPreviewFocusable={true}
              selectAllOnFocus={false}
              onSubmit={(e) => {
                setFirstTitle(e);
              }}
            >
              <Tooltip label="برای ادیت کلیک کنید">
                <EditablePreview
                  py={2}
                  px={4}
                  _hover={{
                    background: useColorModeValue("gray.100", "gray.700"),
                  }}
                />
              </Tooltip>
              <Input py={2} px={4} as={EditableInput} />
              <EditableControls />
            </Editable>
            <Editable
              className="bg-mainCream rounded-sm"
              defaultValue={blog.firstInfo}
              isPreviewFocusable={true}
              selectAllOnFocus={false}
              onSubmit={(e) => {
                setFirstInfo(e);
              }}
            >
              <Tooltip label="برای ادیت کلیک کنید">
                <EditablePreview
                  py={2}
                  px={4}
                  _hover={{
                    background: useColorModeValue("gray.100", "gray.700"),
                  }}
                />
              </Tooltip>
              <Input py={2} px={4} as={EditableInput} />
              <EditableControls />
            </Editable>
            <Editable
              className="bg-mainCream rounded-sm"
              defaultValue={blog.firstContent}
              isPreviewFocusable={true}
              selectAllOnFocus={false}
              onSubmit={(e) => {
                setFirstContent(e);
              }}
            >
              <Tooltip label="برای ادیت کلیک کنید">
                <EditablePreview
                  py={2}
                  px={4}
                  _hover={{
                    background: useColorModeValue("gray.100", "gray.700"),
                  }}
                />
              </Tooltip>
              <Input py={2} px={4} as={EditableInput} />
              <EditableControls />
            </Editable>
          </div>
          <div className="h-full w-full justify-center items-center flex  flex-col lg:px-24 text-4xl space-y-8 my-4 ">
            <div className="flex text-white border-b-2 w-full font-bold justify-center items-center">
              <h1>second section</h1>
            </div>
            <Editable
              className="bg-mainCream rounded-sm"
              defaultValue={blog.secondTitle}
              isPreviewFocusable={true}
              selectAllOnFocus={false}
              onSubmit={(e) => {
                setSecondTitle(e);
              }}
            >
              <Tooltip label="برای ادیت کلیک کنید">
                <EditablePreview
                  py={2}
                  px={4}
                  _hover={{
                    background: useColorModeValue("gray.100", "gray.700"),
                  }}
                />
              </Tooltip>
              <Input py={2} px={4} as={EditableInput} />
              <EditableControls />
            </Editable>
            <Editable
              className="bg-mainCream rounded-sm"
              defaultValue={blog.secondInfo}
              isPreviewFocusable={true}
              selectAllOnFocus={false}
              onSubmit={(e) => {
                setSecondInfo(e);
              }}
            >
              <Tooltip label="برای ادیت کلیک کنید">
                <EditablePreview
                  py={2}
                  px={4}
                  _hover={{
                    background: useColorModeValue("gray.100", "gray.700"),
                  }}
                />
              </Tooltip>
              <Input py={2} px={4} as={EditableInput} />
              <EditableControls />
            </Editable>
            <Editable
              className="bg-mainCream rounded-sm"
              defaultValue={blog.secondContent}
              isPreviewFocusable={true}
              selectAllOnFocus={false}
              onSubmit={(e) => {
                setSecondContent(e);
              }}
            >
              <Tooltip label="برای ادیت کلیک کنید">
                <EditablePreview
                  py={2}
                  px={4}
                  _hover={{
                    background: useColorModeValue("gray.100", "gray.700"),
                  }}
                />
              </Tooltip>
              <Input py={2} px={4} as={EditableInput} />
              <EditableControls />
            </Editable>
          </div>
          <div className="h-full w-full justify-center items-center flex  flex-col lg:px-24 text-4xl space-y-8 my-4 ">
            <div className="flex text-white border-b-2 w-full font-bold justify-center items-center">
              <h1>third section</h1>
            </div>
            <Editable
              className="bg-mainCream rounded-sm"
              defaultValue={blog.thirdTitle}
              isPreviewFocusable={true}
              selectAllOnFocus={false}
              onSubmit={(e) => {
                setThirdTitle(e);
              }}
            >
              <Tooltip label="برای ادیت کلیک کنید">
                <EditablePreview
                  py={2}
                  px={4}
                  _hover={{
                    background: useColorModeValue("gray.100", "gray.700"),
                  }}
                />
              </Tooltip>
              <Input py={2} px={4} as={EditableInput} />
              <EditableControls />
            </Editable>
            <Editable
              className="bg-mainCream rounded-sm"
              defaultValue={blog.thirdInfo}
              isPreviewFocusable={true}
              selectAllOnFocus={false}
              onSubmit={(e) => {
                setThirdInfo(e);
              }}
            >
              <Tooltip label="برای ادیت کلیک کنید">
                <EditablePreview
                  py={2}
                  px={4}
                  _hover={{
                    background: useColorModeValue("gray.100", "gray.700"),
                  }}
                />
              </Tooltip>
              <Input py={2} px={4} as={EditableInput} />
              <EditableControls />
            </Editable>
            <Editable
              className="bg-mainCream rounded-sm"
              defaultValue={blog.thirdContent}
              isPreviewFocusable={true}
              selectAllOnFocus={false}
              onSubmit={(e) => {
                setThirdContent(e);
              }}
            >
              <Tooltip label="برای ادیت کلیک کنید">
                <EditablePreview
                  py={2}
                  px={4}
                  _hover={{
                    background: useColorModeValue("gray.100", "gray.700"),
                  }}
                />
              </Tooltip>
              <Input py={2} px={4} as={EditableInput} />
              <EditableControls />
            </Editable>
          </div>
          <div className="h-full w-full justify-center items-center flex  flex-col lg:px-24 text-4xl space-y-8 my-4 ">
            <div className="flex text-white border-b-2 w-full font-bold justify-center items-center">
              <h1>forth section</h1>
            </div>
            <Editable
              className="bg-mainCream rounded-sm"
              defaultValue={blog.forthTitle}
              isPreviewFocusable={true}
              selectAllOnFocus={false}
              onSubmit={(e) => {
                setForthTitle(e);
              }}
            >
              <Tooltip label="برای ادیت کلیک کنید">
                <EditablePreview
                  py={2}
                  px={4}
                  _hover={{
                    background: useColorModeValue("gray.100", "gray.700"),
                  }}
                />
              </Tooltip>
              <Input py={2} px={4} as={EditableInput} />
              <EditableControls />
            </Editable>
            <Editable
              className="bg-mainCream rounded-sm"
              defaultValue={blog.forthInfo}
              isPreviewFocusable={true}
              selectAllOnFocus={false}
              onSubmit={(e) => {
                setForthInfo(e);
              }}
            >
              <Tooltip label="برای ادیت کلیک کنید">
                <EditablePreview
                  py={2}
                  px={4}
                  _hover={{
                    background: useColorModeValue("gray.100", "gray.700"),
                  }}
                />
              </Tooltip>
              <Input py={2} px={4} as={EditableInput} />
              <EditableControls />
            </Editable>
            <Editable
              className="bg-mainCream rounded-sm"
              defaultValue={blog.forthContent}
              isPreviewFocusable={true}
              selectAllOnFocus={false}
              onSubmit={(e) => {
                setForthContent(e);
              }}
            >
              <Tooltip label="برای ادیت کلیک کنید">
                <EditablePreview
                  py={2}
                  px={4}
                  _hover={{
                    background: useColorModeValue("gray.100", "gray.700"),
                  }}
                />
              </Tooltip>
              <Input py={2} px={4} as={EditableInput} />
              <EditableControls />
            </Editable>
          </div>
          <div className="flex items-center justify-center space-x-6">
            <button className="px-12 transition ease-in text-white duration-300 py-2 text-3xl hover:text-mainBlue hover:bg-CoolGray font-bold my-3 bg-red-500  rounded-full  ">
              Delete Article
            </button>
            <button
              onClick={handleUpdate}
              className="px-12 transition ease-in duration-300 py-2 text-3xl hover:text-mainBlue hover:bg-CoolGray font-bold my-3 bg-mainWhite  rounded-full  "
            >
              Confirm Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
