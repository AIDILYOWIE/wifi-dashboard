import { Box } from "@mui/material";
import { color } from "../../typhograpy";
import { NormalButton } from "../Elements/Button";
import { Outlet } from "react-router-dom";
import React from "react";

export const Form = React.memo(({ title, textButton, children }) => {
  return (
    <div
      className={`${
        title == "Pembayaran" ? "w-[450px]" : "w-[500px]"
      } h-max max-[576px]:h-full flex flex-col justify-center max-[576px]:justify-start min-[576px]:items-center  max-[576px]:bg-[transparent] min-[576px]:bg-white min-[576px]:shadow-[2px_2px_3px_rgba(0,0,0,0.10)] p-[40px]  min-[576px]:gap-[78px] max-[576px]:${title != 'PEMBAYARAN' ? 'gap-[48px]' : 'gap-[68px]' }  rounded-[20px] `}
    >
      <div className="w-full">
        <h1 className="text-[24px] font-bold max">{title}</h1>
      </div>
      <form action="" className="w-full flex flex-col ">
        {children}
      </form>
        <div className="w-full">
          <NormalButton text={textButton} />
        </div>
    </div>
  );
});
