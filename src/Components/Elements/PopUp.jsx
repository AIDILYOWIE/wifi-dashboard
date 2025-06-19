import { color } from "../../typhograpy";
import { Box } from "@mui/material";
import { ButtonActionDelete } from "./Button";

export const PopupDelete = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  const image = "../../../public/icon/delete.svg";

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-[20px] shadow-lg w-[450px] p-[20px] flex flex-col items-center gap-[18px]">
        <div className="w-full flex flex-col justify-center items-center gap-[8px]">
          <div className="w-max rounded-[50%] p-[10px] bg-delete">
            <Box
              sx={{
                width: 50,
                height: 50,
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
          <p className="text-text text-[24px] font-semibold">Hapus Pelanggan</p>
          <p className="text-text text-[14px] font-light">
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
};
