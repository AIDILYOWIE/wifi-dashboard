import { DateInput, DistrictInput } from "../Elements/Input";

const FormPembayaran = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[24px]">
      <div className="w-full grid grid-cols-1 h-max gap-[20px]">
        <DateInput />
      </div>
      <div className="w-full grid grid-cols-1 h-max gap-[20px]">
        <DistrictInput />
      </div>
    </div>
  );
};

export default FormPembayaran
