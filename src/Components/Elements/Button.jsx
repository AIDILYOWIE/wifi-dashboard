import { Box, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { color, fontSize } from "../../typhograpy";
import { data, Link, useParams } from "react-router-dom";
import { dataPelanggan } from "../../data";
import React from "react";

export const ButtonnSidebar = React.memo(
  ({
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
  }
);

export const ButtonV2 = React.memo(({ icon, to = "/", type, text }) => {
  return type == "addPelanggan" ? (
    <Link to={to}>
      <button className="w-max flex items-center px-[20px] py-[10px] rounded-[10px] bg-primary gap-[10px] cursor-pointer">
        <Box
          sx={{
            width: 21,
            height: 21,
            backgroundColor: color.backgroundColor,
            WebkitMaskImage: `url(${icon})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            maskImage: `url(${icon})`,
            maskRepeat: "no-repeat",
            maskSize: "cover",
          }}
        />
        <p className="text-[16px] text-background font-semibold">{text}</p>
      </button>
    </Link>
  ) : (
    <button className="w-max flex flex-row-reverse items-center px-[20px] py-[10px] rounded-[10px] bg-primary gap-[10px] cursor-pointer">
      <Box
        sx={{
          width: 24,
          height: 24,
          backgroundColor: color.backgroundColor,
          WebkitMaskImage: `url(${icon})`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage: `url(${icon})`,
          maskRepeat: "no-repeat",
          maskSize: "cover",
        }}
      />
      <p className="text-[14px] text-background font-semibold">{text}</p>
    </button>
  );
});

export const NormalButton = React.memo(({ text }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      className={`w-full p-[10px] text-[16px] font-semibold rounded-[10px] cursor-pointer
             bg-primary text-background
             hover:bg-transparent hover:text-text transition-colors duration-300 tracking-[.5px]`}
    >
      {text}
    </button>
  );
});

export const ButtonAction = React.memo(({ type, to, onClick }) => {
  const imageEdit = "../../../public/icon/edit.svg";
  const imageDelete = "../../../public/icon/delete.svg";
  let image;
  let colorText;
  let background;

  if (type == "edit") {
    image = imageEdit;
    colorText = color.editColor;
    background = "bg-edit-background";
  } else {
    image = imageDelete;
    colorText = color.deleteColor;
    background = "bg-delete-background";
  }

  return type == "edit" ? (
    <Link to={to}>
      <button
        className={`w-max h-max p-[10px] rounded-[10px] flex justify-center items-center ${background} cursor-pointer `}
      >
        <Box
          sx={{
            width: 18,
            height: 18,
            backgroundColor: colorText,
            WebkitMaskImage: `url(${image})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            maskImage: `url(${image})`,
            maskRepeat: "no-repeat",
            maskSize: "cover",
          }}
        />
      </button>
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`w-max h-max p-[10px] rounded-[10px] flex justify-center items-center ${background} cursor-pointer `}
    >
      <Box
        sx={{
          width: 18,
          height: 18,
          backgroundColor: colorText,
          WebkitMaskImage: `url(${image})`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage: `url(${image})`,
          maskRepeat: "no-repeat",
          maskSize: "cover",
        }}
      />
    </button>
  );
});

export const ButtonActionDelete = ({ type, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`w-full rounded-[50px] font-light ${
        type == "Cancel"
          ? "border-1 border-border text-other bg-white"
          : "bg-delete-background text-delete"
      } px-[10px] py-[8px] cursor-pointer`}
    >
      {type}
    </button>
  );
};

export const ButtonStatus = ({type}) => {
  return (
        <button
      className={`w-full flex justify-center items-center h-full rounded-[50px] text-[16px] font-light ${
        type == "LUNAS"
          ? "text-success bg-success-background"
          : "bg-delete-background text-delete"
      } px-[20px] py-[10px] cursor-pointer`}
    >
      {type}
    </button>
  )
} 
