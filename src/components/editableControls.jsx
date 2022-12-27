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

export default function EditableControls() {
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
    <div className="h-full w-full justify-center items-center flex  flex-col lg:px-24 text-4xl space-y-8 my-4 ">
      <Editable
        className="bg-mainCream rounded-md"
        defaultValue="Title"
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
        className="bg-mainCream rounded-md"
        defaultValue="Author Name"
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
        className="bg-mainCream rounded-md"
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
      <div className="flex items-center justify-center space-x-6">
        <button className="px-12 transition ease-in text-white duration-300 py-2 text-3xl hover:text-mainBlue hover:bg-CoolGray font-bold my-3 bg-red-500  rounded-full  ">
          Delete Article
        </button>
        <button className="px-12 transition ease-in duration-300 py-2 text-3xl hover:text-mainBlue hover:bg-CoolGray font-bold my-3 bg-mainWhite  rounded-full  ">
          Confirm Changes
        </button>
      </div>
    </div>
  );
}
