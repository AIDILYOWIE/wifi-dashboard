import { Box } from "@mui/material";
import DateInput from "../Elements/Input";
import { color } from "../../typhograpy";
import { NormalButton } from "../Elements/Button";

export const Form = () => {
  return (
    <div
    style={{
        boxShadow: `2px 2px 5px rgba(0, 0, 0, 25%)`
    }}
      className={`w-[543px] h-max flex flex-col justify-center items-start bg-[white] p-[40px] gap-[68px] rounded-[20px]`}
    >
      <div className="w-full">
        <h1 className="text-[24px] font-bold">
          FORM{" "}
          <span
            style={{
              color: color.primaryColor,
            }}
          >
            PEMBAYARAN
          </span>
        </h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-[38px]">
        <div className="w-full grid grid-cols-2 h-max gap-[20px]">
            <DateInput />
            <DateInput />
        </div>
        <div className="w-full grid grid-cols-2 h-max gap-[20px]">
            <DateInput />
            <DateInput />
        </div>
        <div className="w-full grid grid-cols-2 h-max gap-[20px]">
            <DateInput />
        </div>
      </div>
      <div className="w-full">
        <NormalButton text={"tambah"} />
      </div>
    </div>
  );
};
