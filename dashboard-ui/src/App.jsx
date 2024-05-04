import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Report from "./pages/report";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <Layout>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
