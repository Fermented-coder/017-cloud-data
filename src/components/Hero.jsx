import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GoPaperAirplane, GoDatabase } from "react-icons/go";
import { CiServer } from "react-icons/ci";
import bgImg from "../assets/cyber-bg.png";

export const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech brand.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
        <div
          className=" mx-auto flex items-center justify-center flex-col  py-8 md:min-w-[760px] 
           bg-zinc-00
        border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p>Data Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <FaCloudUploadAlt className="h-6 text-indigo-600 text-[25px] " />
              App Security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <GoDatabase className="h-6 text-indigo-600 text-[25px] " />{" "}
              Dashboard Design
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <CiServer className="h-6 text-indigo-600 text-[25px] " /> Cloud
              Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <GoPaperAirplane className="h-6 text-indigo-600 text-[25px] " />{" "}
              API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
