"use client"
import Image from "next/image";
import React, { useState } from "react";
import {FaRegClipboard,FaClipboardCheck} from 'react-icons/fa'
import {LuQrCode} from 'react-icons/lu'
import qr from '@/public/qrcode.png'
import logo from '@/public/Logo.svg'

const Qrcode = () => {
    const [isqropen, setisqropen] = useState(false)
    const [iscopied,setiscopied] = useState(false)

    const toggleqr = () => {
        setisqropen(prev => !prev)
        setiscopied(false)
    }

    const handlecopy = () => {
      navigator.clipboard.writeText(window.location.href)
      setiscopied(true)
    }
  return (
    <div className=" relative ">
      <div className=" cursor-pointer text-3xl" onClick={toggleqr}><LuQrCode/></div>
      {isqropen && <div className=" absolute max-sm:fixed max-sm:left-1/2 translate-x-[-50%] min-w-[300px] shadow-2xl select-none py-6 px-2 bg-white rounded-md flex flex-col items-center justify-center right-0 w-max   ">
        <span className=" text-2xl font-bold flex items-center ">
          
          Nishant Jii
        </span>
        <span className="  text-md flex  items-center gap-2 cursor-pointer font-bold text-gray-800" onClick={handlecopy}>{window.location.href} {iscopied?<FaClipboardCheck/>:<FaRegClipboard/>}</span>

        <Image width={250} height={250} src={qr} className=" mt-3" alt="qr" />
      </div>}
      
    </div>
  );
};

export default Qrcode;
