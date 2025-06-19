import { ButtonV2 } from "../Components/Elements/Button";
import { MySearch } from "../Components/Elements/Search";
import { TablePelanggan } from "../Components/Fragments/Table";

const Pelanggan = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center px-[40px] py-[20px] gap-[28px] overflow-hidden">
      <div className="w-full grid grid-cols-2">
        <div className="w-full">
          <MySearch />
        </div>
        <div className="w-full flex justify-end">
          <ButtonV2 icon='../../public/icon/add.svg' to={"/pelanggan/add"} type={'addPelanggan'} text={'Tambah Pelanggan'}/>
        </div>
      </div>
      <div
        style={{
          boxShadow: "1px 1px 1px rgba(0, 0, 0, 25%)",
        }}
        className="w-full rounded-[20px]"
      >
        <TablePelanggan />
      </div>
    </div>
  );
};

export default Pelanggan;
