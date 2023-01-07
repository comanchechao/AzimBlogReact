import { supabase } from "../supabaseClient";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../Store/user/user";
import { useDisclosure } from "@chakra-ui/react";
import { SignIn, SignOut, User } from "phosphor-react";
import { Link } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function Auth() {
  const { t, i18n } = useTranslation();

  const [event, setEvent] = useState("");

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, showSignUp] = useState(false);
  const [isLogged, logState] = useState(false);
  const [loggedState, checkLog] = useState(false);
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [alert, setAlert] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [isOpen2, setIsOpen2] = useState(false);

  // modal functions

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal2() {
    setIsOpen2(false);
  }

  function openModal2() {
    setIsOpen2(true);
    setIsOpen(false);
  }

  // password recovery

  const [recoveryEmail, setRecoveryEmail] = useState("");

  const passwordRecovery = async () => {
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(
        recoveryEmail
      );
      if (error) throw error;
      alert("ایمیل خود را چک کنید.");
    } catch (error) {}
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == "PASSWORD_RECOVERY") {
        const newPassword = prompt(
          "What would you like your new password to be?"
        );
        const { data, error } = await supabase.auth.updateUser({
          password: newPassword,
        });

        if (data) alert("Password updated successfully!");
        if (error) alert("There was an error updating your password.");
      }
    });
  }, []);

  // sign actions
  const handleSignOut = async (e) => {
    try {
      let { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setAlert(true);
        window.location.reload();
      }, 3000);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      logState(true);
      setAlert(true);
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);

      setTimeout(() => {
        closeModal();
      }, 2000);
    }
  };

  return (
    <div className="w-full w-10/12   h-full  rounded-sm flex  flex-col justify-start shadow-2xl  items-between z-50">
      <div className=" flex items-center justify-end ">
        {isLogged ? (
          <button
            onClick={openModal}
            className="bg-CoolGray lg:hover:bg-mainYellow  text-mainWhite font-extrabold   transition  ease-in duration-200 lg:flex  active:text-CoolGray lg:hover:text-CoolGray lg:p-6 items-center"
          >
            <Link to="/create">
              {" "}
              <User size={35} />
            </Link>
          </button>
        ) : (
          <button
            onClick={openModal}
            className="bg-CoolGray lg:hover:bg-mainYellow  text-mainWhite font-extrabold   transition  ease-in duration-200 lg:flex  active:text-CoolGray lg:hover:text-CoolGray lg:p-6 items-center"
          >
            <SignIn size={35} />
          </button>
        )}
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 top-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full  bg-mainWhite text-gray-200 max-w-md transform overflow-hidden rounded-sm   text-center align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg self-center font-medium leading-6 "
                  >
                    <div className="flex w-full p-5 space-y-2 h-full flex-col align-center items-center justify-center">
                      <h1 className="text-7xl text-CoolGray capitalize font-extralight">
                        ورود
                      </h1>
                    </div>
                  </Dialog.Title>
                  <div
                    style={
                      isLogged ? { display: "none" } : { display: "block" }
                    }
                    className="flex items-around flex-col m-28"
                    aria-live="polite"
                  >
                    <div className="flex w-full  space-y-2 mb-8 h-full flex-col align-center items-center justify-center">
                      {/* <p className="text-8xl">کافه پینت</p> */}
                    </div>
                    {
                      (loading,
                      alert ? (
                        <Alert status="success" variant="solid">
                          <AlertIcon />
                          <span className="text-3xl text-CoolGray">
                            {t("loginSuccess")}
                          </span>
                        </Alert>
                      ) : (
                        <form
                          onSubmit={handleLogin}
                          className="flex flex-col mt-2"
                        >
                          <input
                            id="email"
                            className="inputField text-gray-900 my-2 text-right p-2 rounded"
                            type="email"
                            placeholder="آدرس ایمیل"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <input
                            id="password"
                            className="inputField text-gray-900 my-2 text-right p-2 rounded"
                            type="password"
                            placeholder="پسوورد"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <div className="lg:p-5 flex flex-col">
                            <button
                              onClick={handleLogin}
                              className="button block px-5 py-3 bg-CoolGray text-mainWhite mb-2 capitalize rounded font-bold text-2xl transition ease-in-out duration-200 hover:bg-mainCream hover:text-CoolGray  "
                              aria-live="polite"
                            >
                              ورود
                            </button>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                openModal2();
                              }}
                              className="button block px-5 py-3 bg-CoolGray text-mainWhite mb-2 capitalize rounded font-bold text-2xl transition ease-in-out duration-200 hover:bg-mainCream hover:text-CoolGray  "
                              aria-live="polite"
                            >
                              بازیابی رمز عبور
                            </button>
                          </div>
                        </form>
                      ))
                    }
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* password recovery section */}

      <Transition appear show={isOpen2} as={Fragment}>
        <Dialog as="div" className="absolute z-20" onClose={closeModal2}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 top-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full  bg-mainWhite text-gray-200 max-w-md transform overflow-hidden rounded-sm   text-center align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg self-center font-medium leading-6 "
                  >
                    <div className="flex w-full p-5 space-y-2 h-full flex-col align-center items-center justify-center">
                      <h1 className="text-5xl mt-20 text-CoolGray capitalize font-extralight">
                        بازیابی رمز عبور
                      </h1>
                    </div>
                  </Dialog.Title>
                  <div
                    style={
                      isLogged ? { display: "none" } : { display: "block" }
                    }
                    className="flex items-around flex-col m-28"
                    aria-live="polite"
                  >
                    <div className="flex w-full  space-y-2 mb-8 h-full flex-col align-center items-center justify-center">
                      {/* <p className="text-8xl">کافه پینت</p> */}
                    </div>
                    {
                      (loading,
                      alert ? (
                        <Alert status="success" variant="solid">
                          <AlertIcon />
                          <span className="text-3xl text-CoolGray">
                            {t("loginSuccess")}
                          </span>
                        </Alert>
                      ) : (
                        <form className="flex flex-col mt-2">
                          <input
                            id="email"
                            className="inputField text-gray-900 my-2 text-right p-2 rounded"
                            type="email"
                            placeholder="آدرس ایمیل"
                            value={recoveryEmail}
                            onChange={(e) => setRecoveryEmail(e.target.value)}
                          />
                          <button
                            onClick={passwordRecovery}
                            className="button px-10 my-6 py-1 bg-CoolGray text-mainWhite   capitalize rounded-full font-bold text-xl transition ease-in-out duration-200 hover:bg-mainCream hover:text-CoolGray  "
                            aria-live="polite"
                          >
                            <span>بازیابی رمز عبور</span>
                          </button>
                        </form>
                      ))
                    }
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* <div className="flex w-full">
        {loggedState ? <div>not logged</div> : <div>not logged</div>}
      </div> */}
    </div>
  );
}
