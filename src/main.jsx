import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Components/Layouts/MainLayout";
import Pembayaran from "./Pages/Pembayaran";
import Pelanggan from "./Pages/Pelanggan";
import Transaksi from "./Pages/Transaksi";
import AddPelanggan from "./Pages/AddPelanggan";
import EditPelanggan from "./Pages/EditPelanggan";
import Invoice from "./Components/Fragments/invoice";
import InvoicesPage from "./Pages/InvoicesPage";
import Login from "./Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Pembayaran />,
      },
      {
        path: '/invoice',
        element: <InvoicesPage/>
      },
      {
        path: '/pelanggan',
        element: <Pelanggan/>
      },
      {
        path: '/pelanggan/add',
        element: <AddPelanggan/>
      },
      {
        path: '/pelanggan/:id',
        element: <EditPelanggan/>
      },
      {
        path: '/transaksi',
        element: <Transaksi/>
      },
    ],
  },
  {
    path: '/login',
    element: <Login />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
