import { createBrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./styles/styles.css";
import LoginPage from "./pages/LoginPage";
import DashboardMahasiswa from "./pages/mahasiswa/DashboardMahasiswa";

const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl font-bold text-red-500">404 - Halaman Tidak Ditemukan</h1>
    <p className="mt-2 text-gray-600">Oops! URL yang kamu akses tidak ada.</p>
    <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Kembali ke Beranda</a>
  </div>
);

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <LoginPage /> },
        { path: "login", element: <LoginPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
    {
      path: "/mhs",
      children: [
        { index: true, element: <DashboardMahasiswa /> },
        { path: "dashboard", element: <DashboardMahasiswa /> },
        { path: "pengaduan", element: <DashboardMahasiswa /> },
        { path: "riwayat", element: <DashboardMahasiswa /> },
        { path: "pengaturan", element: <DashboardMahasiswa /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <HelmetProvider>
      <RouterProvider router={myRouter} />
    </HelmetProvider>
  );
}

export default App;
