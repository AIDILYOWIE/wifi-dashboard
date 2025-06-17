import { Box, Typography } from "@mui/material";
import { useMemo } from "react";
import { color, fontSize } from "../../typhograpy";
import { Link } from "react-router-dom";

export const ButtonnSidebar = ({
  icon,
  text,
  href = "/",
  background = "transparent",
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
          background,
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
              backgroundColor: color.textColor,
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
            color={color.textColor}
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export const NormalButton = ({text}) => { 
  return (
    <button style={{
      backgroundColor: color.primaryColor,
      color: color.backgroundColor
    }} className={`w-full p-[10px] text-[16px] font-semibold rounded-[10px] cursor-pointer`}>
      {text}
    </button>
  )
}
