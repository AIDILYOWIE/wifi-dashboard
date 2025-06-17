import { Box } from "@mui/material";
import { color } from "../../typhograpy";

export const MySearch = () => {
  const image = "../../../public/icon/search.svg";
  return (
    <div className="text-border w-full flex justify-start px-[20px] py-[10px] border-1 rounded-[50px] gap-[20px]">
      <div className="w-max">
        <Box
          sx={{
            width: 24,
            height: 24,
            backgroundColor: color.borderColor,
            WebkitMaskImage: `url(${image})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            maskImage: `url(${image})`,
            maskRepeat: "no-repeat",
            maskSize: "cover",
          }}
        />
      </div>
      <div className="w-full">
          <input type="text" placeholder="Search..." className=" w-full h-full focus:outline-none focus:text-text text-border text-[16px] font-light"/>
        </div>
    </div>
  );
};
