import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Components/Layouts/MainLayout";
import Pembayaran from "./Pages/Pembayaran";

 const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Pembayaran/>
      }
    ]
  }
])


