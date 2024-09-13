"use client";

import { useState } from "react";
import AnimatedSection, { Button } from "./button";

const First = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="  ">
        <div className="h-screen" />
        <AnimatedSection />
        <div className="h-screen" />
      </div>
    </>
  );
};

export default First;
