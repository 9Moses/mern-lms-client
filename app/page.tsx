"use client";
import React, { FC, useState } from "react";
import { Heading } from "./utils/heading";
import Navbar from "./components/navbar";

interface Props {}

const App: FC<Props> = ({ props }) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div>
      <Heading
        title="LearnSys"
        description="LearnSys is a  platform for students to learn and gt hep from teachers"
        keywords="Programming,MERN,Redux"
      />
      <Navbar open={open} setOpen={setOpen} activeItem={activeItem} />
    </div>
  );
};

export default App;
