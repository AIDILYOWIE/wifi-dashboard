import { ButtonV2 } from "../Components/Elements/Button";
import { MySearch } from "../Components/Elements/Search";
import { TablePelanggan } from "../Components/Fragments/Table";
import iconTambah from "../../public/icon/add.svg"

const Pelanggan = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center min-[900px]:px-[40px] max-[900px]:px-[20px] py-[20px] gap-[28px] overflow-hidden">
      <div className="w-full grid  min-[500px]:grid-cols-2 max-[500px]:grid-cols-1 max-[500px]:gap-[8px]">
        <div className="w-full">
          <MySearch />
        </div>
        <div className="w-full flex justify-end">
          <ButtonV2 icon={iconTambah} to={"/pelanggan/add"} type={'addPelanggan'} text={'Tambah Pelanggan'}/>
        </div>
      </div>
      <div
        style={{
          boxShadow: "1px 1px 2px rgba(0, 0, 0, 25%)",
        }}
        className="w-full bg-white rounded-[20px] overflow-auto"
      >
        <TablePelanggan />
      </div>
    </div>
  );
};

export default Pelanggan;
