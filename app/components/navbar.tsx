import Link from "next/link";
import React, { FC, useState, useEffect } from "react";
import NavItems from "./navItems";
import { ThemeSwitcher } from "../context/themeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import CustomModal from "../utils/customModal";
import Login from "./auth/login";
import SignUp from "./auth/signUp";
import VerifyToken from "./auth/verifyToken";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
};

const Navbar: FC<Props> = ({ activeItem, setOpen, open, route, setRoute }) => {
  const [active, setActiveItem] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleClose = (e: any) => {
    if (e.target.id === "screen") {
      setOpenSidebar(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
          setActiveItem(true);
        } else {
          setActiveItem(false);
        }
      });
    }
  }, []);

  return (
    <div className="w-full relative">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[60px] z-30 border-b dark:border-[#ffffff1c] shadow-xl transition duration-500  "
            : "w-full border-b dark:border-[#ffffff1c] h-[60px] z-[80] dark:shadow"
        } `}
      >
        <div className="w-[95%] 800px:w-[92%] m-auto  h-full">
          <div className="w-full h-[60px] flex items-center justify-between ">
            <div>
              <Link
                href={"/"}
                className={`text-[18px] font-Montserrat font-[500] text-black dark:text-white`}
              >
                LearnSys
              </Link>
            </div>
            <div className="flex items-center">
              <NavItems activeItem={activeItem} isMobile={false} />
              <ThemeSwitcher />

              {/* only mobile */}
              <div className="800px:hidden ">
                <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer mr-2 dark:text-white text-black"
                  onClick={() => setOpenSidebar(true)}
                />
              </div>
              <HiOutlineUserCircle
                size={25}
                className="hidden 800px:block cursor-pointer dark:text-white text-black"
                onClick={() => {
                  setOpen(true);
                  console.log("click");
                }}
              />
            </div>
          </div>

          {/* Mobile sidebar */}
          {openSidebar && (
            <div
              className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
              onClick={handleClose}
              id="screen"
            >
              <div className="w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
                <NavItems activeItem={activeItem} isMobile={true} />
                <HiOutlineUserCircle
                  size={25}
                  className="cursor-pointer ml-5 my-2 text-white"
                  onClick={() => setOpen(true)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {route === "Sign-Up" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={SignUp}
            />
          )}
        </>
      )}
      {route === "Login" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Login}
            />
          )}
        </>
      )}
      {route === "verification" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={VerifyToken}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Navbar;
