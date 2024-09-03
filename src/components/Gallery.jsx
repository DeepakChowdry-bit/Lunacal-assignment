"use client";
import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselHeader,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { GoPlus } from "react-icons/go";
import Image from "next/image";
import { BsQuestionCircle } from "react-icons/bs";
import gsap from "gsap";

const Gallery = () => {
  // Create an array to hold refs for each image
  const imageRefs = useRef([]);

  useEffect(() => {
    // Add event listeners for each image ref
    imageRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.addEventListener("mouseenter", () => {
          gsap.to(ref, {
            scale: 1.15,
            rotate: -1.5,
            filter: 'saturate(110%)',
            duration: 0.5,
          });
          
        });

        

        ref.addEventListener("mouseleave", () => {
          gsap.to(ref, {
            scale: 1,
            rotate: 0,
            filter: "saturate(50%)",
          });
        });
      }
    });

    // Cleanup event listeners on component unmount
    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) {
          ref.removeEventListener("mouseenter", null);
          ref.removeEventListener("mouseleave", null);
        }
      });
    };
  }, []);

  const carouselImg = [
    { src: "/img/main.jpg" },
    { src: "/img/main.jpg" },
    { src: "/img/main.jpg" },
    { src: "/img/main.jpg" },
    { src: "/img/main.jpg" },
  ];

  return (
    <>
      <div className="flex h-1/2 bg-[#353C44] justify-around w-full rounded-2xl shadow-2xl shadow-black">
        <div className="h-full w-1 flex justify-center items-center">
          <div className="h-5/6">
            <BsQuestionCircle />
          </div>
        </div>
        <div className="w-10/12 py-4 flex flex-col items-center gap-5">
          <Carousel className="gap-5 flex flex-col">
            <CarouselHeader className="flex items-center justify-between ">
              <div className="flex items-center justify-between w-9/12">
                <h3>Gallery</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center text-xs rounded-full bg-[#40454C] shadow-2xl shadow-black"
                >
                  <GoPlus className="text-lg" />
                  Add Image
                </Button>
              </div>
              <div className="flex items-center justify-end gap-3 w-3/12">
                <CarouselPrevious variant="secondary" />
                <CarouselNext variant="secondary" />
              </div>
            </CarouselHeader>

            {/* Carousel Content */}
            <CarouselContent>
              {carouselImg.map((img, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="">
                    <div
                      ref={(el) => (imageRefs.current[index] = el)} // Set ref for each image
                      className="w-full saturate-50"
                    >
                      <Image
                        src={img.src}
                        alt=""
                        width={100}
                        height={100}
                        className="w-full h-32 object-cover rounded-lg "
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Gallery;
