import { ButtonV2 } from "../Components/Elements/Button";
import DateRangePicker from "../Components/Elements/DateRangePicker";
import { MySearch } from "../Components/Elements/Search";
import { TablePelanggan, TableTransaksi } from "../Components/Fragments/Table";
import { DateRangeProvider } from "../Contexts/DateRangePickerContext";

const Transaksi = () => {
  return (
    <DateRangeProvider>
      <div className="w-full h-full flex flex-col justify-start items-center px-[40px] py-[20px] gap-[28px] overflow-hidden">
        <div className="w-full grid grid-cols-2">
          <div className="w-full">
            <MySearch />
          </div>
          <div className="w-full flex justify-end">
            <DateRangePicker />
          </div>
        </div>
        <div
          style={{
            boxShadow: "1px 1px 1px rgba(0, 0, 0, 25%)",
          }}
          className="w-full rounded-[20px]"
        >
          <TableTransaksi />
        </div>
      </div>
    </DateRangeProvider>
  );
};

export default Transaksi;
