import { color } from "../../typhograpy";
import { Box } from "@mui/material";
import { ButtonActionDelete } from "./Button";
import React from "react";

export const PopupDelete = React.memo(({ show, onClose, onConfirm }) => {
  if (!show) return null;

  const image = "../../../public/icon/delete.svg";

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-[20px] shadow-lg min-[500px]:w-[450px] max-[500px]:w-[300px] p-[20px] flex flex-col items-center gap-[18px]">
        <div className="w-full flex flex-col justify-center items-center min-[500px]:gap-[8px] max-[500px]:gap-[4px]">
          <div className="w-max rounded-[50%] p-[10px] bg-delete">
            <Box
              sx={{
                width: {
                  xs: 40
                },
                height: {
                  xs: 40
                },
                backgroundColor: color.backgroundColor,
                WebkitMaskImage: `url(${image})`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                maskImage: `url(${image})`,
                maskRepeat: "no-repeat",
                maskSize: "cover",
              }}
            />
          </div>
          <p className="text-text min-[500px]:text-[24px] max-[500px]:text-[18px] font-semibold">Hapus Pelanggan</p>
          <p className="text-text text-center min-[500px]:text-[14px] max-[500px]:text-[12px] font-light">
            Apakah anda serius untuk menghapus pelanggan ini
          </p>
        </div>
        <div className="grid grid-cols-2 items-center justify-center gap-8 w-full">
            <ButtonActionDelete type={'Cancel'} onClick={onClose}/>
            <ButtonActionDelete type={'Delete'} onClick={onConfirm}/>
        </div>
      </div>
    </div>
  );
})
