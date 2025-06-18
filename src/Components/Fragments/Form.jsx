import { DateInput, DistrictInput, NormalInput } from "../Elements/Input";

export const FormPembayaran = () => {
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

export const FormAddPelanggan = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[18px]">
      <div className="w-full grid grid-cols-1 h-max">
        <DateInput label={'Tanggal Masuk'}/>
      </div>
      <div className="w-full grid grid-cols-2 h-max gap-[20px]">
        <NormalInput
          label={"Nama Pelanggan"}
          placeholder={"Masukan Nama Pelanggan"}
        />
        <NormalInput label={"Kecamatan"} placeholder={"Masukan Kecamatan"} />
      </div>
      <div className="w-full grid grid-cols-2 h-max gap-[20px]">
        <NormalInput label={"Desa"} placeholder={"Masukan Desa"} />
        <NormalInput
          label={"Dusun / Jalan"}
          placeholder={"Masukan Dusun / Jalan"}
        />
      </div>
    </div>
  );
};
