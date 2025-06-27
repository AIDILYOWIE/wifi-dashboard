import { Box, Grid } from "@mui/material";
import { color, fontSize } from "../../typhograpy";
import Sidebar from "../Fragments/Sidebar";
import { Outlet } from "react-router-dom";
import React from "react";
import { BottomBar } from "../Elements/BottomBar";

const MainLayout = React.memo(({ children }) => {
  return (
    <Box
      sx={{
        display: {
          sm: "grid",
          xs: "flex",
        },
        gridTemplateColumns: {
          xs: "none",
          sm: "repeat(12, 1fr)",
        },

        flexDirection: {
          xs: "column",
        },

        position: {
          xs: "relative",
        },

        width: "100vw",
        height: "100vh",
        backgroundColor: `${color.backgroundColor}`,
      }}
    >
      <Box
        sx={{
          display: "grid",
          background: "white",
          gridColumn: {
            lg: " 1 / 3",
            md: "1 / 3",
            sm: "1 / 4",
          },
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          <Sidebar />
        </Box>

        <Box
          sx={{
            display: {
              xs: "flex",
              sm: "none",
            },
          }}
        >
          <BottomBar />
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            xs: "flex",
          },

          gridColumn: {
            lg: "3 / 13",
            md: "3 / 13",
            sm: "4 / 13",
          },

          width: "100%",

          height: "100%",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
});

export default MainLayout;
