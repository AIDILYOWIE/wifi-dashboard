import { Box, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { color, fontSize } from "../../typhograpy";
import { Link } from "react-router-dom";

export const ButtonnSidebar = ({
  icon,
  text,
  href = "/",
  background = "transparent",
  isActive = false,
}) => {
  const renderIcon = useMemo(() => {
    return icon;
  }, [icon]);

  return (
    <Link to={href}>
      <Box
        sx={{
          padding: "10px 20px",
          display: "flex",
          borderRadius: "10px",
          gap: "10px",
          alignItems: "center",
          cursor: "pointer",
          background: isActive ? color.primaryColor : background,
          justifyContent: "start",
          transition: "background-color 0.3s ease",

          "&:hover": {
            backgroundColor: color.primaryColor,

            ".sidebar-icon": {
              backgroundColor: color.backgroundColor,
              transition: "background-color .3s ease",
            },

            ".sidebar-text": {
              color: color.backgroundColor,
              transition: "background-color .3s ease",
            },
          },
        }}
      >
        <Box sx={{ width: "max-content" }}>
          <Box
            className="sidebar-icon"
            sx={{
              width: 24,
              height: 24,
              backgroundColor: isActive
                ? color.backgroundColor
                : color.textColor,
              WebkitMaskImage: `url(${renderIcon})`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              maskImage: `url(${renderIcon})`,
              maskRepeat: "no-repeat",
              maskSize: "cover",
            }}
          />
        </Box>
        <Box sx={{ fontSize: "16px", fontWeight: "regular" }}>
          <Typography
            className="sidebar-text"
            variant="h5"
            fontSize={`${fontSize.sidebarMenu}px`}
            fontWeight="regular"
            color={isActive ? color.backgroundColor : color.textColor}
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export const ButtonV2 = () => {
  const image = '../../../public/icon/add.svg'
  return (
    <button className="w-max flex items-center px-[20px] py-[10px] rounded-[10px] bg-primary gap-[10px] cursor-pointer">
      <Box
        sx={{
          width: 21,
          height: 21,
          backgroundColor: color.backgroundColor,
          WebkitMaskImage: `url(${image})`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage: `url(${image})`,
          maskRepeat: "no-repeat",
          maskSize: "cover",
        }}
      />
      <p className="text-[16px] text-background font-semibold">Tambah Pelanggan</p>
    </button>
  );
};

export const NormalButton = ({ text }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      className={`w-full p-[10px] text-[16px] font-semibold rounded-[10px] cursor-pointer
             bg-primary text-background
             hover:bg-transparent hover:text-text transition-colors duration-300`}
    >
      {text}
    </button>
  );
};
