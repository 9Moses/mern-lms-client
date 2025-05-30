import React, { FC } from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
type Props = {};

const HeroSection: FC<Props> = (props) => {
  return (
    <div className="w-full 1000px:flex items-center ">
      <div className="absolute ml-10 top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[550px] 1100px:w-[550px] 1000px:h-[600px] 1000px:w-[600px] h-[50vh] w-[50vh] hero_animation rounded-full" />
      <div className="800 1100px:w-[40%] 1000px:w-[40%] flex 1000px:min-h-screen  justify-end pt-[70px] 1000px:pt-[0] z-10">
        <Image
          src={require("../../assest/hero.png")}
          alt=""
          className="object-contain 1100px:max-w-[80%] 1000px:max-w-[90%] w-[70%] mr-6 1500px:max-w-[80%] h-[auto] z-20"
        />
      </div>
      <div className="1100px:w-[50%] 1100px:ml-40 1000px:w-[60%] flex flex-col items-center 1100px:items-start 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">
        <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1100px:text-[65px] 1000px:text-[70px] font-[600] py-2 1000px:leading-[75px] 1500px:w-[600]">
          Improve Your Online Learning Experience Better Instantly
        </h2>
        <br />
        <p className="dark:text-[#edfff4] text-[#000000ac] font-[400] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]">
          We have 40K+ Online courses & 500k+ Online registered student. Find
          your desired Courses from them.{" "}
        </p>
        <br />

        <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
          <input
            type="search"
            placeholder="Search Courses..."
            className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none"
          />
          <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
            <BiSearch className="text-white" size={30} />
          </div>
        </div>

        <br />
        <div className="1500px:w-[50%] 1100px:w-[78%] w-[90%] flex items-center">
          <Image
            src={require("../../assest/profile_user.jpg")}
            alt=""
            className="rounded-full size-8"
          />
          <Image
            src={require("../../assest/profile_user_2.jpg")}
            alt=""
            className="rounded-full size-8 ml-[-10px]"
          />
          <Image
            src={require("../../assest/profile_user_3.jpg")}
            alt=""
            className="rounded-full size-8 ml-[-10px]"
          />
          <p className="dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
            500K+ People already trust us.{" "}
            <Link href="/course" className="dark:text-[#46e256] text-[crimson]">
              View Course
            </Link>
          </p>
        </div>
        <br />
      </div>
    </div>
  );
};
export default HeroSection;
