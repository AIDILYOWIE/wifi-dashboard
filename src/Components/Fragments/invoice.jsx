import React from "react";

const Invoice = React.memo(
  ({ no, tanggal, tglTempo, nama, kecamatan, desa, dusunJalan, tagihan }) => {
    return (
      <div style={{
         boxShadow: "1px 1px 3px rgba(0,0,0,0.2)"
      }} id="container" class="w-[362px] flex flex-col">
        <div id="header-container" class="w-full py-3 bg-[#008bba]">
          <div
            id="header"
            class="w-full flex flex-col px-2.5 py-1.5 bg-[#15256e]"
          >
            <div
              id="header-content"
              class="w-full flex items-center justify-between"
            >
              <div>
                <p id="pt" class="text-[10px] font-bold text-white">
                  PT. ARSYA BINTANG NUSANTARA
                </p>
              </div>
              <div>
                <p id="invc" class="text-base font-extrabold text-white">
                  INVOICE
                </p>
              </div>
            </div>

            <div
              id="header-content"
              class="w-full flex items-center justify-between"
            >
              <div id="hc1">
                <p id="h-txt" class="text-[7px] font-normal text-white">
                  RT 01 RW 01 Dkh Wonorejo Ds Bedrug
                </p>
              </div>
              <div
                id="hc-2"
                class="flex items-center text-[8px] font-normal text-white gap-2.5"
              >
                <p id="h-txt">No :</p>
                <div
                  id="inpt"
                  class="w-[57px] flex items-center text-[8px] font-normal text-white pb-1.5 border-b border-dashed border-white"
                >
                  p022
                </div>
              </div>
            </div>

            <div
              id="header-content"
              class="w-full flex items-center justify-between"
            >
              <div id="hc1">
                <p id="h-txt" class="text-[7px] font-normal text-white">
                  Kecamatan Pulung Kabupaten Ponorogo Kode Pos 63481
                </p>
              </div>
              <div
                id="hc-2"
                class="flex items-center text-[8px] font-normal text-white gap-2.5"
              >
                <p id="h-txt">Tanggal :</p>
                <div
                  id="inpt"
                  class="w-[57px] flex items-center text-[8px] font-normal text-white pb-1.5 border-b border-dashed border-white"
                >
                  13/10/2025
                </div>
              </div>
            </div>

            <div
              id="header-content"
              class="w-full flex items-center justify-between"
            >
              <div id="hc1">
                <p id="h-txt" class="text-[7px] font-normal text-white">
                  No Tlp / Hand phone : (0352)5730278 / 0813-3178-8779
                </p>
              </div>
              <div
                id="hc-2"
                class="flex items-center text-[8px] font-normal text-white gap-2.5"
              >
                <p id="h-txt">Tgl Jatuh Tempo :</p>
                <div
                  id="inpt"
                  class="w-[57px] flex items-center text-[8px] font-normal text-white pb-1.5 border-b border-dashed border-white"
                >
                  20/11/2025
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="body-container" class="w-full bg-white flex flex-col">
          <div id="body-1" class="w-full px-5 py-2.5 flex flex-col gap-1.5">
            <div id="b-1" class="w-full flex flex-col">
              <p id="b-txt" class="text-[7px] font-normal text-[#15256e]">
                Kepada YTH
              </p>
              <p id="b-txt-bld" class="text-[10px] font-bold text-[#15256e]">
                SETIAWAN JOKO
              </p>
            </div>

            <div id="b-2" class="grid grid-cols-3 gap-2.5">
              <div>
                <p id="b-txt" class="text-[7px] font-normal text-[#15256e]">
                  No Pelanggan
                </p>
              </div>
              <div class="flex justify-end">
                <p id="b-txt" class="text-[7px] font-bold text-[#15256e]">
                  :
                </p>
              </div>
              <div>
                <p class="font-bold text-[7px] text-[#15256e]">p022</p>
              </div>
            </div>

            <div id="b-2" class="grid grid-cols-3 gap-2.5">
              <div>
                <p id="b-txt" class="text-[7px] font-normal text-[#15256e]">
                  Kecamatan
                </p>
              </div>
              <div class="flex justify-end">
                <p id="b-txt" class="text-[7px] font-bold text-[#15256e]">
                  :
                </p>
              </div>
              <div>
                <p class="font-bold text-[7px] text-[#15256e]">Jenangan</p>
              </div>
            </div>

            <div id="b-2" class="grid grid-cols-3 gap-2.5">
              <div>
                <p id="b-txt" class="text-[7px] font-normal text-[#15256e]">
                  Desa
                </p>
              </div>
              <div class="flex justify-end">
                <p id="b-txt" class="text-[7px] font-bold text-[#15256e]">
                  :
                </p>
              </div>
              <div>
                <p class="font-bold text-[7px] text-[#15256e]">Jimbe</p>
              </div>
            </div>

            <div id="b-2" class="grid grid-cols-3 gap-2.5">
              <div>
                <p id="b-txt" class="text-[7px] font-normal text-[#15256e]">
                  Dusun / Jalan
                </p>
              </div>
              <div class="flex justify-end">
                <p id="b-txt" class="text-[7px] font-bold text-[#15256e]">
                  :
                </p>
              </div>
              <div>
                <p class="font-bold text-[7px] text-[#15256e]">Jimbe</p>
              </div>
            </div>

            <div id="b-2" class="grid grid-cols-3 gap-2.5">
              <div>
                <p id="b-txt" class="text-[7px] font-normal text-[#15256e]">
                  Biaya Per Bulan
                </p>
              </div>
              <div class="flex justify-end">
                <p id="b-txt" class="text-[7px] font-bold text-[#15256e]">
                  :
                </p>
              </div>
              <div>
                <p class="font-bold text-[7px] text-[#15256e]">Rp 100.000</p>
              </div>
            </div>
          </div>

          <div id="body-2" class="w-full flex gap-1.5 flex-col py-1.5">
            <div
              id="b-h"
              class="w-full px-5 py-1.5 flex justify-start items-center bg-[#008bba]"
            >
              <p id="b-h-text" class="text-[10px] font-semibold text-[#15256e]">
                RINCIAN PEMBAYARAN
              </p>
            </div>

            <div id="b-2" class="px-5 grid grid-cols-3 gap-2.5">
              <div>
                <p id="b-txt" class="text-[7px] font-normal text-[#15256e]">
                  Tagihan Per Bulan Juni
                </p>
              </div>
              <div class="flex justify-end">
                <p id="b-txt" class="text-[7px] font-bold text-[#15256e]">
                  :
                </p>
              </div>
              <div>
                <p class="font-bold text-[7px] text-[#15256e]">Rp 100.000</p>
              </div>
            </div>

            <div id="b-2" class="px-5 grid grid-cols-3 gap-2.5">
              <div>
                <p id="b-txt" class="text-[7px] font-normal text-[#15256e]">
                  Tagihan Per Bulan Juli
                </p>
              </div>
              <div class="flex justify-end">
                <p id="b-txt" class="text-[7px] font-bold text-[#15256e]">
                  :
                </p>
              </div>
              <div>
                <p class="font-bold text-[7px] text-[#15256e]">Rp 100.000</p>
              </div>
            </div>
          </div>

          <div id="body-2" class="w-full flex gap-1.5 flex-col py-1.5">
            <div
              id="b-h"
              class="w-full px-5 py-1.5 flex justify-start items-center bg-[#008bba]"
            >
              <p id="b-h-text" class="text-[10px] font-semibold text-[#15256e]">
                POTONGAN PEMBAYARAN
              </p>
            </div>

            <div id="b-2" class="px-5 grid grid-cols-3 gap-2.5">
              <div>
                <p id="b-txt" class="text-[7px] font-normal text-[#15256e]">
                  Promo Loyalty Program
                </p>
              </div>
              <div class="flex justify-end">
                <p id="b-txt" class="text-[7px] font-bold text-[#15256e]">
                  :
                </p>
              </div>
              <div>
                <p class="font-bold text-[7px] text-[#15256e]">Rp 5.000</p>
              </div>
            </div>

            <div id="b-2" class="px-5 grid grid-cols-3 gap-2.5">
              <div>
                <p id="b-txt" class="text-[7px] font-normal text-[#15256e]">
                  Leave Payment
                </p>
              </div>
              <div class="flex justify-end">
                <p id="b-txt" class="text-[7px] font-bold text-[#15256e]">
                  :
                </p>
              </div>
              <div>
                <p class="font-bold text-[7px] text-[#15256e]">Rp -</p>
              </div>
            </div>

            <div id="b-2" class="px-5 grid grid-cols-3 gap-2.5">
              <div>
                <p id="b-txt" class="text-[7px] font-normal text-[#15256e]">
                  Cost Reduction
                </p>
              </div>
              <div class="flex justify-end">
                <p id="b-txt" class="text-[7px] font-bold text-[#15256e]">
                  :
                </p>
              </div>
              <div>
                <p class="font-bold text-[7px] text-[#15256e]">Rp 10.000</p>
              </div>
            </div>
          </div>

          <div id="body-3" class="w-full grid grid-cols-2 gap-1.5 px-5">
            <div class="flex items-center justify-start">
              <p class="text-sm font-bold text-[#15256e]">TOTAL PEMBAYARAN</p>
            </div>
            <div class="flex items-center justify-end">
              <p class="text-sm font-bold text-[#15256e]">Rp 205.000</p>
            </div>
          </div>

          <div id="body-4" class="w-full flex flex-col px-5 py-1.5">
            <p class="text-text font-normal text-[7px]">Catatan</p>
            <p class="text-text font-normal text-[7px]">
              1. Pembayaran bisa dilakukan melalui transfer ke nomor
              rekening:171-00-1162504-6 MANDIRI An. PT. ARSYA BINTANG NUSANTARA
            </p>
            <p class="text-text font-normal text-[7px]">
              2. Setelah melakukan transaksi silahkan konfirmasi pembayaran
              dengan menghubungi nomor 085xxxxxxxx
            </p>
          </div>
        </div>
      </div>
    );
  }
);

export default Invoice;
