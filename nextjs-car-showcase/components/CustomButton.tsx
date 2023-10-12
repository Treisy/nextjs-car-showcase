"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({containerStyles, title, handleClick}: CustomButtonProps) => {
  return (
    <button 
      disabled={false}
      type={'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton