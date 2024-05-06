import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Report from "./pages/report";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: (
            <div className="flex">
              <Sidebar />
              <Layout>
                <Outlet />
              </Layout>
            </div>
          ),
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
            {
              path: "/dashboard",
              element: <Dashboard />,
            },
            {
              path: "/report",
              element: <Report />,
            },
            {
              path: "/about",
              element: <About />,
            },
          ],
        },
      ])}
    />
  );
}

export default App;
