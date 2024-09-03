"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { BsQuestionCircle } from "react-icons/bs";

const About = () => {
    const [activeSection, setActiveSection] = useState("about");
    const focusRef = useRef(null);

    useEffect(() => {
        if (focusRef.current) {
            gsap.to(focusRef.current, {
                x:
                    activeSection === "about"
                        ? "0%"
                        : activeSection === "experiences"
                            ? "97%"
                            : "195%",
                duration: 0.5,
                ease: "power2.out",
            });
        }
    }, [activeSection]);

    return (
      <>
        <div className="flex h-1/2 bg-[#353C44] justify-around w-full rounded-2xl shadow-md shadow-black">
          <div className="h-full w-1 flex justify-center items-center">
            <div className="h-5/6">
              <BsQuestionCircle />
            </div>
          </div>

          <div className="w-10/12 py-4 flex flex-col gap-5">
            <div className="flex items-center w-full h-12 bg-[#171717] rounded-2xl justify-between text-sm font-light p-1 relative gap-3">
              <span
                ref={focusRef}
                id="focus"
                className="w-1/3 h-5/6 bg-[#28292E] rounded-xl absolute shadow-2xl shadow-cyan-900"
              ></span>
              <div
                className="w-1/3 flex justify-center z-10 cursor-pointer"
                onClick={() => setActiveSection("about")}
              >
                <p>About me</p>
              </div>
              <div
                className="w-1/3 flex justify-center z-10 cursor-pointer"
                onClick={() => setActiveSection("experiences")}
              >
                <p>Experiences</p>
              </div>
              <div
                className="w-1/3 flex justify-center z-10 cursor-pointer"
                onClick={() => setActiveSection("recommended")}
              >
                <p>Recommended</p>
              </div>
            </div>
            <div className="desc">
              <p className="text-sm text-zinc-300 font-light">
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now. <br /> <br />I
                was born and raised in Albany, NY, and have been living in Santa
                Carla for the past 10 years with my wife Tiffany and my
                4-year-old twin daughters, Emma and Ella. Both of them are just
                starting school, so my calendar is usually blocked between 9-10
                AM. This is a...
              </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default About;
