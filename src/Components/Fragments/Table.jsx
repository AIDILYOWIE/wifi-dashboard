import { TableBody, TableHead } from "../Elements/TableStructure";
import { dataPelanggan } from "../../data";
import { useEffect, useMemo, useState } from "react";
import { ButtonAction, ButtonStatus } from "../Elements/Button";
import { PopupDelete } from "../Elements/PopUp";
import { data } from "react-router-dom";
import { parse } from "date-fns";

export const TablePelanggan = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id);
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    setShowPopup(false);
  };

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


export const TableTransaksi = () => {
  const [dateRange, setDateRange] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tanggalTrx")) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    function handleStorage(e) {
      if (e.key === "tanggalTrx") {
        setDateRange(e.newValue ? JSON.parse(e.newValue) : null);
      }
    }
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // --- 3) (OPSIONAL) patch setItem agar event juga muncul di tab sendiri --
  useEffect(() => {
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      originalSetItem.apply(this, arguments);
      if (key === "tanggalTrx") {
        window.dispatchEvent(
          new StorageEvent("storage", { key, newValue: value })
        );
      }
    };
    return () => {
      localStorage.setItem = originalSetItem; // bersihkan patch
    };
  }, []);

  // --- 4) FILTER data setiap kali dateRange berubah ----------
  const filteredData = useMemo(() => {
    if (dateRange?.start && dateRange?.end) {
      const start = new Date(dateRange.start);
      const end = new Date(dateRange.end);
      return dataPelanggan.filter((d) => {
        const t = new Date(d.tanggal);
        return t >= start && t <= end;
      });
    }
    // default: tampilkan semua transaksi
    return dataPelanggan;
  }, [dateRange]);

  // --- 5) RENDER --------------------------------------------
  return (
    <div
      className="w-full flex rounded-[20px] overflow-hidden"
      style={{ boxShadow: "2px 2px 5px rgba(0,0,0,0.2)" }}
    >
      {/* Nama Pelanggan */}
      <div className="w-full">
        <TableHead value="Nama Pelanggan" />
        {filteredData.map((item, i) => (
          <TableBody key={i} value={item.namaPelanggan} />
        ))}
      </div>

      {/* Kecamatan */}
      <div className="w-full">
        <TableHead value="Kecamatan" />
        {filteredData.map((item, i) => (
          <TableBody key={i} value={item.kecamatan} />
        ))}
      </div>

      {/* Desa */}
      <div className="w-full">
        <TableHead value="Desa" />
        {filteredData.map((item, i) => (
          <TableBody key={i} value={item.desa} />
        ))}
      </div>

      {/* Dusun / Jalan */}
      <div className="w-full">
        <TableHead value="Dusun / Jalan" />
        {filteredData.map((item, i) => (
          <TableBody key={i} value={item.dusunJalan} />
        ))}
      </div>

      {/* Status */}
      <div className="w-full">
        <TableHead value="Status" />
        {filteredData.map((item, i) => (
          <TableBody key={i} type="status">
            <ButtonStatus type={item.status} />
          </TableBody>
        ))}
      </div>
    </div>
  );
};
