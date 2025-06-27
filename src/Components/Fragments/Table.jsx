import { TableBody, TableHead } from "../Elements/TableStructure";
import { dataPelanggan } from "../../data";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ButtonAction, ButtonStatus } from "../Elements/Button";
import { PopupDelete } from "../Elements/PopUp";
import { data } from "react-router-dom";
import { parse } from "date-fns";
import { useDateRange } from "../../Contexts/DateRangePickerContext";

export const TablePelanggan = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = useCallback((id) => {
    setSelectedId(id);
    setShowPopup(true);
  }, [selectedId])

  const handleConfirmDelete = useCallback(() => {
    setShowPopup(false);
  }, [[showPopup]])

  return (
    <>
      <div
        className="w-full flex rounded-[20px] overflow-hidden "
        style={{
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 20%)",
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
                <ButtonAction to={`/pelanggan/${item.index}`} type={"edit"} />
                <ButtonAction
                  to={`/pelanggan/${item.index}`}
                  type={"delete"}
                  onClick={() => handleClick(item.index)}
                />
              </TableBody>
            ))}
        </div>
      </div>

      <PopupDelete
        show={showPopup}
        onClose={() => setShowPopup(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};



// Simulasi data

export const TableTransaksi = () => {
  const {dateRange} = useDateRange()



  // Filter data jika ada range tanggal

    
    const filteredData = useMemo(() => {
      if (dateRange?.start && dateRange?.end) {
        const start = new Date(dateRange.start);
        const end = new Date(dateRange.end);
        return dataPelanggan.filter((d) => {
          const t = new Date(d.tanggal);
          return t >= start && t <= end;
        });
      }
      return dataPelanggan;
    }, [dateRange]);


  // Daftar kolom untuk efisiensi render
  const columns = [
    { label: "Nama Pelanggan", accessor: "namaPelanggan" },
    { label: "Kecamatan", accessor: "kecamatan" },
    { label: "Desa", accessor: "desa" },
    { label: "Dusun / Jalan", accessor: "dusunJalan" },
    { label: "Status", accessor: "status", isStatus: true },
  ];

  return (
    <div
      className="w-full flex rounded-[20px] overflow-hidden"
      style={{ boxShadow: "2px 2px 5px rgba(0,0,0,0.2)" }}
    >
      {columns.map((col) => (
        <div className="w-full" key={col.accessor}>
          <TableHead value={col.label} />
          {filteredData.map((item, i) => (
            <TableBody key={i} type={col.isStatus ? "status" : undefined} value={item[col.accessor]}>
              {col.isStatus && <ButtonStatus type={item.status} />}
            </TableBody>
          ))}
        </div>
      ))}
    </div>
  );
};

