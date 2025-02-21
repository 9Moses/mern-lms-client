"use client";
import React, { FC, useState } from "react";
import { Heading } from "./utils/heading";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection/heroSection"

interface Props {}

const App: FC<Props> = ({  }) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  return (
    <>
      <Heading
        title="LearnSys"
        description="LearnSys is a  platform for students to learn and gt hep from teachers"
        keywords="Programming,MERN,Redux"
      />
      <Navbar open={open} setOpen={setOpen} activeItem={activeItem} />
      <HeroSection/>
    </>
  );
};

export default App;
