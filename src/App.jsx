import { createBrowserRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./styles/styles.css";
import DashboardProdi from "./pages/prodi/DashboardProdi";


function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/dashboard/prodi",
      element: (
        <>
          <DashboardProdi />
        </>
      ),
    },
  ]);

  return (
    <>
      <HelmetProvider>
        <RouterProvider router={myRouter} />
      </HelmetProvider>
    </>
  );
}

export default App;
