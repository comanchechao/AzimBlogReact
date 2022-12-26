import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  House,
  Alien,
  Eyeglasses,
  Sunglasses,
  Eye,
  List,
} from "phosphor-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useTranslation, Trans } from "react-i18next";

export default function PhoneDrawer() {
  const { t, i18n } = useTranslation();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <div>
      <>
        <button
          ref={btnRef}
          onClick={onOpen}
          className="text-mainWhite font-extrabold flex transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray lg:hover:text-CoolGray lg:p-6 p-2 items-center"
        >
          <List size={35} />
        </button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton className="text-mainWhite" />
            <div className="bg-CoolGray h-full w-full">
              {/* <DrawerHeader>Create your account</DrawerHeader> */}

              <DrawerBody>
                <div className=" w-full h-full text-2xl flex justify-start items-center flex-col bg-CoolGray p-10">
                  <Link
                    to={"/"}
                    className="text-mainWhite border-b-2 border-mainBlue pb-3 font-extrabold  my-3  transition  ease-in duration-200 flex flex-col  leading-none active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray lg:hover:text-CoolGray lg:p-4 items-center"
                  >
                    <span className=" font-SultanFont text-6xl font-bold leading-10 ">
                      Azim
                    </span>
                    <h4 className="text-2xl font-SultanFont leading-10   font-extralight  lg:ml-0 ml-28  flex items-center">
                      Eyewear <Eye className="ml-1" size={23}></Eye>
                    </h4>
                  </Link>
                  <Link
                    to={"/"}
                    className="text-mainWhite font-extrabold flex transition border border-mainBlue my-3  rounded-sm  ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray lg:hover:text-CoolGray lg:p-6 p-2 items-center"
                  >
                    <House size={35} />
                    <h1 className="pl-2 font-extralight  flex">{t("home")}</h1>
                  </Link>
                  <Link
                    to={"/ShoppingPage"}
                    className="text-mainWhite font-extrabold  border border-mainBlue rounded-sm my-3 flex transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray lg:hover:text-CoolGray lg:p-6 p-2 items-centerr"
                  >
                    <Eyeglasses size={35} />
                    <h1 className="pl-2 font-extralight  flex">
                      {t("eyeGlasses")}
                    </h1>
                  </Link>
                  <Link
                    to={"/ShoppingPage"}
                    className="flex transition ease-in duration-200 border border-mainBlue rounded-sm my-3 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray lg:hover:text-CoolGray lg:p-6 p-2 items-center text-mainWhite"
                  >
                    <Sunglasses size={35} />
                    <h1 className="pl-2  font-extralight  flex  ">
                      {t("sunGlasses")}
                    </h1>
                  </Link>
                  <Link
                    to={"/ShoppingPage"}
                    className="flex text-mainWhite transition border border-mainBlue rounded-sm my-3 ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray lg:hover:text-CoolGray lg:p-6 p-2 items-center"
                  >
                    <Eye size={30} />
                    <h1 className="pl-2 font-extralight  flex ">
                      {t("lenses")}
                    </h1>
                  </Link>

                  <Link
                    to={"/admin"}
                    className="flex text-mainWhite transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray lg:hover:text-CoolGray lg:p-6 p-2 items-center"
                  >
                    <Alien size={35} />
                  </Link>
                  {/* <Link
                    to={"/blogs"}
                    className="flex text-mainWhite transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray lg:hover:text-CoolGray lg:p-6 p-2 justify-center items-center"
                  >
                    <Copyright size={18} />
                    <h1 className=" font-extralight text-center flex">
                      Premium Brands
                    </h1>
                  </Link>
                  <Link
                    to={"/blogs"}
                    className="flex text-mainWhite transition ease-in duration-200 active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray lg:hover:text-CoolGray lg:p-6 p-2 items-center"
                  >
                    <h1 className=" font-extralight text-mainWhite  ">Blog</h1>
                  </Link> */}
                </div>
              </DrawerBody>

              <DrawerFooter>
                <button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </button>
                <button colorScheme="blue">Save</button>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </>
    </div>
  );
}
