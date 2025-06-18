import { useParams } from "react-router-dom";
import { DateInput, DistrictInput, NormalInput } from "../Elements/Input";
import { useEffect, useState } from "react";
import { dataPelanggan } from "../../data";
import { useCallback } from "react";

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
        <DateInput label={"Tanggal Masuk"} />
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

export const FormEditPelanggan = () => {
  const [pelanggan, setPelanggan] = useState({
    namaPelanggan: "",
    kecamatan: "",
    desa: "",
    dusunJalan: "",
  });
  const { id } = useParams();
  useEffect(() => {
    const findPelanggan = dataPelanggan.find(
      (data) => data.index == Number(id)
    );

    if (findPelanggan) setPelanggan(findPelanggan);
  }, [dataPelanggan, id]);

  const handleChange = useCallback((field) => (e) => {
    setPelanggan((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  });

  return (
    <div className="w-full flex flex-col justify-center items-center gap-[18px]">
      {pelanggan && (
        <>
          <div className="w-full grid grid-cols-2 h-max gap-[20px]">
            <NormalInput
              label="Nama Pelanggan"
              placeholder="Masukan Nama Pelanggan"
              value={pelanggan.namaPelanggan}
              onChange={handleChange("namaPelanggan")}
            />
            <NormalInput
              label="Kecamatan"
              placeholder="Masukan Kecamatan"
              value={pelanggan.kecamatan}
              onChange={handleChange("kecamatan")}
            />
          </div>
          <div className="w-full grid grid-cols-2 h-max gap-[20px]">
            <NormalInput
              label="Desa"
              placeholder="Masukan Desa"
              value={pelanggan.desa}
              onChange={handleChange("desa")}
            />
            <NormalInput
              label="Dusun / Jalan"
              placeholder="Masukan Dusun / Jalan"
              value={pelanggan.dusunJalan}
              onChange={handleChange("dusunJalan")}
            />
          </div>
        </>
      )}
    </div>
  );
};
