import Auth from "./auth";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useRef, useEffect, Suspense, lazy } from "react";
import { supabase } from "../supabaseClient";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
const PhoneDrawer = lazy(() => import("./phoneDrawer"));

import {
  SignIn,
  House,
  Alien,
  Eyeglasses,
  Sunglasses,
  Globe,
  Article,
  Eye,
  User,
  SignOut,
} from "phosphor-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { user } from "../Store/user/user";

const lngs = {
  en: { cut: "En", nativeName: "English" },
  fa: { cut: "Fa", nativeName: "Farsi" },
};

export default function navbar() {
  const [alert, setAlert] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // log check
 const [isLogged , setIsLogged] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      supabase.auth.onAuthStateChange((event, session) => {
        if (event == "SIGNED_IN") console.log("SIGNED_IN", session);
      });
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
      setAlert(true);
      setTimeout(() => {
        closeModal();
      }, 2000);
    }
  };
  const listenSignin = async function () {
    try {
      supabase.auth.onAuthStateChange((event, session) => {
        if (event == "SIGNED_IN") console.log("SIGNED_IN", session);
      });
    } catch (error) {
      alert(error.message);
    }
  };

  function closeModal() {
    setIsOpen(false);
  }
  const boxRef = useRef();

  function openModal() {
    setIsOpen(true);
  }
  const handleSignOut = async (e) => {
    try {
      let { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    } finally {
      setAlert(true);
      setTimeout(() => {
        console.log("fuck yeah");
        window.location.reload();
      }, 2000);
    }
  };

  const { t, i18n } = useTranslation();

  return (
    <div
      ref={boxRef}
      className="w-screen bg-CoolGray  z-20 Navbar h-20 flex flex-col fixed  lg:px-8 lg:justify-between  text-2xl  "
    >
      <div className="flex  h-full justify-between lg:justify-around px-4 lg:px-0 items-center lg:py-7">
        <div className="lg:hidden flex">
          <Suspense>
            <PhoneDrawer></PhoneDrawer>
          </Suspense>
        </div>

        <Link
          to={"/"}
          className="text-mainWhite font-extrabold   transition  ease-in duration-200 hidden lg:flex  active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray lg:hover:text-CoolGray lg:p-6 items-center"
        >
          {" "}
          <h1 className="pr-3 font-extralight hidden lg:flex">خونه</h1>
          <House size={35} />
        </Link>
        <Link
          to={"/create"}
          className="text-mainWhite font-extrabold  transition  ease-in duration-200 hidden lg:flex  active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray lg:hover:text-CoolGray lg:p-6 items-centerr"
        >
          <h1 className="pr-3 font-extralight hidden lg:flex">بلاگ ها</h1>
          <Eyeglasses size={35} />
        </Link>

        {isLogged ? (
          <Link
            to={"/admin"}
            className="  text-mainWhite transition  ease-in duration-200 hidden lg:flex  active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray lg:hover:text-CoolGray lg:p-6 items-center"
          >
            <Alien size={35} />
          </Link>
        ) : null}
        {isLogged ? (
          <div className="flex items-center space-x-2">
            <Link
              to={"/ProfilePage"}
              className="  text-mainWhite transition  ease-in duration-200    active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray lg:hover:text-CoolGray lg:p-6 items-center"
            >
              <User size={30} />
            </Link>
            <button
              onClick={handleSignOut}
              className="  text-mainWhite transition  ease-in duration-200  flex  active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray lg:hover:text-CoolGray lg:p-6 items-center"
            >
              <SignOut size={30} weight="fill" />
            </button>
          </div>
        ) : (
          <button ><Auth /></button>
        )}
        {/* <div className="flex space-x-4">
          {Object.keys(lngs).map((lng) => (
            <button
              className="text-mainWhite transition   items-center ease-in duration-200  flex   active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray lg:hover:text-CoolGray lg:p-6  "
              key={lng}
              style={{
                display: i18n.resolvedLanguage === lng ? "none" : "block",
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              <span className="flex space-x-2">
                <Globe size={35}></Globe>
                {lngs[lng].cut}
              </span>
            </button>
          ))}
          {isLogged ? (
            <div className="flex items-center space-x-2">
              <Link
                to={"/ProfilePage"}
                className="  text-mainWhite transition  ease-in duration-200    active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray lg:hover:text-CoolGray lg:p-6 items-center"
              >
                <User size={30} />
              </Link>
              <button
                onClick={handleSignOut}
                className="  text-mainWhite transition  ease-in duration-200  flex  active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray lg:hover:text-CoolGray lg:p-6 items-center"
              >
                <SignOut size={30} weight="fill" />
              </button>
            </div>
          ) : (
            <button
              onClick={openModal}
              className="  text-mainWhite transition  ease-in duration-200  flex  active:bg-mainBlue lg:hover:bg-mainBlue active:text-CoolGray lg:hover:text-CoolGray lg:p-6 items-center"
            >
              <SignIn size={35} />
            </button>
          )}
        </div> */}

      
      </div>
      {alert ? (
        <div className="mx-auto flex items-center justify-center">
          <Alert status="success" variant="solid">
            <AlertIcon />
            <span className="text-3xl text-CoolGray">
              {t("signOutSuccess")}
            </span>
          </Alert>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
