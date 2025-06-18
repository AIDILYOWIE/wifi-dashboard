import { TableBody, TableHead } from "../Elements/TableStructure";
import { dataPelanggan } from "../../data";
import { useEffect, useState } from "react";
import { ButtonAction } from "../Elements/Button";

export const TablePelanggan = () => {
  const Pelanggan = [
    ...new Set(dataPelanggan.map((customer) => customer.dusunJalan)),
  ];

  return (
    <div className="w-full flex rounded-[20px] overflow-hidden "
        style={{
            boxShadow: '1px 1px 4px rgba(0, 0, 0, 25%)'
        }}
    >
      {/* Nama Pelanggan */}
      <div className="w-full">
        <TableHead value="Nama Pelanggan" />

        {dataPelanggan &&
          dataPelanggan.map((item, i) => (
            <TableBody key={i} value={item.namaPelanggan} />
          ))}
      </div>

      {/* Kecamatan */}
      <div className="w-full">
        <TableHead value="Kecamatan" />
        {dataPelanggan &&
          dataPelanggan.map((item, i) => (
            <TableBody key={i} value={item.kecamatan} />
          ))}
      </div>

      {/* Desa */}
      <div className="w-full">
        <TableHead value="Desa" />
        {dataPelanggan &&
          dataPelanggan.map((item, i) => (
            <TableBody key={i} value={item.desa} />
          ))}
      </div>

      {/* Dusun / Jalan */}
      <div className="w-full">
        <TableHead value="Dusun / Jalan" />
        {dataPelanggan &&
          dataPelanggan.map((item, i) => (
            <TableBody key={i} value={item.dusunJalan} />
          ))}
      </div>

      {/* Action */}
      <div className="w-max">
        <TableHead value="Action" />
        {dataPelanggan &&
          dataPelanggan.map((item, i) => (
            <TableBody key={i} type="action">
              <ButtonAction type={"edit"} />
              <ButtonAction type={"delete"} />
            </TableBody>
          ))}
      </div>
    </div>
  );
};
