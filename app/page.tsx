import Image from "next/image";
import React, { useState } from "react";
import background from "../public/Background.webp";
import { links } from "@/constants/Data";
import Qrcode from "@/components/qrcode";


const page = () => {
 

  return (
    <main className=" flex justify-center items-center">
      <Image
        className=" w-screen select-none h-[170vh] fixed  object-cover -z-10 pointer-events-none bottom-0  left-0 "
        src={background}
        alt="Background"
      ></Image>
      <div className=" container max-w-5xl mx-auto px-6  ">
        <div className=" flex flex-col justify-center items-center mt-[10vh] ">
          <div className="flex gap-4">
            <Qrcode/>
            <div className=" flex-col justify-center items-center">
            <Image
              width={150}
              height={150}
              className=" rounded-full select-none object-cover"
              src={
                "https://heylink.me/cdn-cgi/image/f=auto,q=85,fit=crop,w=200/https://cdn-b.heylink.me/media/users/avatars/2e813f240bf24b4995d6c80f97bcd666.jpg"
              }
              alt="DP"
            ></Image>
            <div className="">
            <h1 className="text-3xl font-bold text-center mt-3 ">
              Nishant_Jii
            </h1>
          </div>
            </div>
          </div>

          
        </div>

        {/* Links Area */}
        <div>
          <div className=" flex flex-col justify-center items-center my-28 gap-3 ">
            {links.map((item, index) => {
              // {console.log(item.icon)}
              return (
                <a
                  href={item.url}
                  target="_blank"
                  className=" rounded-md justify-center gap-4 h-[70px]  items-center  cursor-pointer flex w-full text-white text-center py-5"
                  style={{background:item.background}}
                  key={index}
                >
                  
                  <Image width={30} height={30} className="  h-full" alt=" " src={item.icon.src} />
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
