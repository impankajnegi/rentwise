 

'use client'
import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { GiConverseShoe } from "react-icons/gi";
import { PiPantsBold } from "react-icons/pi";
import { TbJacket } from "react-icons/tb";
const Sidebar = () => {

    const [showSidemenu, setshowSidemenu] = useState<boolean>(true);

    return (
        <div
        className={` ${
          showSidemenu ? " w-1/5 p-4" : " w-20 p-1"
        }  transition-all duration-500 ease-in-out relative  bg-gray-800 text-white `}
      >
        <h2 className="text-xl font-bold mb-4">
          {showSidemenu ? "Dummy List" : ""}
        </h2>
        <ul className="space-y-2 mt-8">
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
             {showSidemenu  ? "Pant" : <PiPantsBold />}
          </li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
             {showSidemenu ? "Jacket" : <TbJacket></TbJacket>} 
          </li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
            {showSidemenu ? "Shoes" : <GiConverseShoe></GiConverseShoe>}
          </li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
           {showSidemenu ? "Mounts" : <FaScrewdriverWrench></FaScrewdriverWrench>} 
          </li> 
        </ul>
        <button
          className={`${
            showSidemenu ? "absolute top-2 right-2" : "absolute left-3 top-2"
          }`}
          onClick={() => setshowSidemenu(!showSidemenu)}
        >
          {showSidemenu ?<AiOutlineArrowLeft></AiOutlineArrowLeft>  :  <AiOutlineArrowRight></AiOutlineArrowRight> }
        </button>
      </div>
    );
}

export default Sidebar;
