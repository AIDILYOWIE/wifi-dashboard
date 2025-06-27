import { useLocation } from "react-router-dom";
import { ButtomBottomBar } from "./Button";

export const BottomBar = () => {
  const menuSidebar = [
    {
      icon: "../../../public/icon/pembayaran.svg",
      text: "Pembayaran",
      href: "/",
    },
    {
      icon: "../../../public/icon/pelanggan.svg",
      text: "Pelanggan",
      href: "/pelanggan",
    },
    {
      icon: "../../../public/icon/transaksi.svg",
      text: "Transaksi",
      href: "/transaksi",
    },
  ];

  const location = useLocation()

  return (
    <div className=" z-10 fixed rounded-tr-[20px] rounded-tl-[20px] bottom-0 right-0 left-0 bg-[white] flex px-[40px] py-[20px] justify-between items-center">
      {menuSidebar &&
        menuSidebar.map((item, i) => {
          const active = location.pathname == item.href;

          return (
            <ButtomBottomBar
              key={i}
              icon={item.icon}
              text={item.text}
              href={item.href}
              isActive={active}
            />
          );
        })}
    </div>
  );
};
