import { useMemo } from "react";
import MainLayout from "../Layouts/MainLayout";
import { Box, Button, Typography } from "@mui/material";
import { color, fontSize } from "../../typhograpy";
import { ButtonnSidebar } from "../Elements/Button";

const Sidebar = () => {

  const menuSidebar = [
    {
      icon: '../../../public/icon/pembayaran.svg',
      text: 'Pembayaran',
      href: '/'
    },
    {
      icon: '../../../public/icon/pelanggan.svg',
      text: 'Pelanggan',
      href: '/pelanggan'
    },
    {
      icon: '../../../public/icon/transaksi.svg',
      text: 'Transaksi',
      href: '/transaksi'
    }
  ]

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: "40px",
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px'
      }}
    >
      <Box>
        <Typography variant="h2" fontSize={`${fontSize.Title}px`} fontWeight={'bold'} color={`${color.textColor}`}>Wifi Jenangan</Typography>
      </Box>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <Box>
          <Typography variant="h5" color={`${color.borderColor}`} fontSize={`${fontSize.subheaderSidebar}px`}>MAIN MENU</Typography>
        </Box>
        <Box>
            {menuSidebar && menuSidebar.map((item, i) => (
              <ButtonnSidebar icon={item.icon} text={item.text} href={item.href} key={i} />
            ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
