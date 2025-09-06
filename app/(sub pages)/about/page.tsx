"use client"
import Image from "next/image";
import RenderModel from "../../components/RenderModel";
import { Hat } from "../../components/models/Hat";
import AboutDetails from "@/app/components/about/AboutDetails";

export default function about() {
  return (
    <>
      <Image
        priority sizes="100vw"
        src="/background/about-background.png"
        alt="background-image"
        fill className=" -z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" 
      />
      <div className="w-full h-screen absolute top-1/4 -translate-y-1/2 left-0">
          <RenderModel>
            <Hat />
          </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-9xl text-[rgb(var(--accent))] my-5">Lungla Gael</h1>
          <p className="font-light text-[rgb(var(--foreground))] text-ls">Meet the wizard behind this portfolio</p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
