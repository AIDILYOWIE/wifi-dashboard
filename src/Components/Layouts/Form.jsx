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
      } h-max flex flex-col justify-center items-center max-[500px]:bg-[transparent] min-[500px]:bg-white min-[500px]:shadow-[2px_2px_3px_rgba(0,0,0,0.10)] p-[40px]  min-[450px]:gap-[78px] max-[450px]:gap-[38px] rounded-[20px] `}
    >
      <div className="w-full">
        <h1 className="text-[24px] font-bold max">{title}</h1>
      </div>
      <form action="" className="w-full flex flex-col min-[450px]:gap-[78px] max-[450px]:gap-[38px]">
        {children}
        <div className="w-full">
          <NormalButton text={textButton} />
        </div>
      </form>
    </div>
  );
});
