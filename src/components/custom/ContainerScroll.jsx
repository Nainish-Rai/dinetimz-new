import React from "react";
import { ContainerScroll } from "./Container-Scroll-Animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1
              className="text-4xl font-bold text=[#2a4365] font-display
            "
            >
              Your Tiffin <br />
              <span className="text-4xl md:text-[6rem] font-extrabold mt-1 leading-none">
                Match Maker
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/img1.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto hidden lg:block rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
        <img
          src={`/standee.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto lg:hidden block rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
