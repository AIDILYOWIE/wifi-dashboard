import { ButtonV2 } from "../Components/Elements/Button";
import { MySearch } from "../Components/Elements/Search";

const Pelanggan = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center px-[40px] py-[20px]">
      <div className="w-full grid grid-cols-2">
        <div className="w-full">
          <MySearch />
        </div>
        <div className="w-full flex justify-end">
            <ButtonV2/>
        </div>
      </div>
    </div>
  );
};

export default Pelanggan;
