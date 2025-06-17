import { Box, Grid } from "@mui/material";
import { color, fontSize } from "../../typhograpy";
import Sidebar from "../Fragments/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{ display: 'flex', background: 'white', gridColumn: "1 / 3", borderTopRightRadius: '20px', borderBottomRightRadius: '20px', boxShadow: '' }}
      >
        <Sidebar />
      </Box>
      <Box sx={{ background: `${color.backgroundColor}`, gridColumn: "3 / 13" }}><Outlet/></Box>
    </Box>
  );
};

export default MainLayout;
