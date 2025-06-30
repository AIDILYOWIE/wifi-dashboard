import { useMemo } from "react";
import MainLayout from "../Layouts/MainLayout";
import { Box, Button, Typography } from "@mui/material";
import { color, fontSize } from "../../typhograpy";
import { ButtonnSidebar } from "../Elements/Button";
import { useLocation } from "react-router-dom";
import iconPembayaran from "../../../public/icon/pembayaran.svg";
import iconPelanggan from "../../../public/icon/pelanggan.svg";
import iconTransaksi from "../../../public/icon/transaksi.svg";

const Sidebar = () => {
  const menuSidebar = [
    {
      icon: iconPembayaran,
      text: "Pembayaran",
      href: "/",
    },
    {
      icon: iconPelanggan,
      text: "Pelanggan",
      href: "/pelanggan",
    },
    {
      icon: iconTransaksi,
      text: "Transaksi",
      href: "/transaksi",
    },
  ];

  const location = useLocation();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: "40px",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
    >
      <Box>
        <Typography
          variant="h2"
          fontSize={`${fontSize.Title}px`}
          fontWeight={"bold"}
          color={`${color.textColor}`}
        >
          Wifi Jenangan
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            color={`${color.borderColor}`}
            fontSize={`${fontSize.subheaderSidebar}px`}
          >
            MAIN MENU
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1px'
        }}>
          {menuSidebar &&
            menuSidebar.map((item, i) => {
              const active = location.pathname == item.href;

              return (
                <ButtonnSidebar
                  icon={item.icon}
                  text={item.text}
                  href={item.href}
                  key={i}
                  isActive={active}
                />
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
