import { Box } from "@mui/material";
import { color } from "../../typhograpy";
import { NormalButton } from "../Elements/Button";
import { Outlet } from "react-router-dom";
import React from "react";

export const Form = React.memo(({ title, textButton, children }) => {
  return (
    <div
      style={{
        boxShadow: `2px 2px 5px rgba(0, 0, 0, 25%)`,
      }}
      className={`${
        title == "Pembayaran" ? "w-[450px]" : "w-[500px]"
      } h-max flex flex-col justify-center items-start bg-[white] p-[40px] gap-[68px] rounded-[20px] `}
    >
      <div className="w-full">
        <h1 className="text-[24px] font-bold">{title}</h1>
      </div>
      <form action="" className="w-full flex flex-col gap-[68px]">
        {children}
        <div className="w-full">
          <NormalButton text={textButton} />
        </div>
      </form>
    </div>
  );
})
