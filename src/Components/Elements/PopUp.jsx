import { color } from "../../typhograpy";
import { Box } from "@mui/material";

export const PopupDelete = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  const image = "../../../public/icon/delete.svg";

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-[20px] shadow-lg w-[470px] p-[40px] flex flex-col items-center gap-[10px]">
        <div className="w-full flex flex-col justify-center items-center gap-[8px]">
          <div className="w-max rounded-[50%] p-[10px] bg-delete">
            <Box
              sx={{
                width: 80,
                height: 80,
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
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};
