import { Routes, Route } from "react-router-dom";
import PageAdmin from "./pages/adminpage";
import PageLogin from "./pages/loginpage";
import PageProduct from "./pages/productspage";
import PageCashier from "./pages/pagecashier";
import PageAddProducts from "./pages/pageaddproduct";
import ChartComponent from "./components/chart";
import PageRegister from "./components/register_cashier"

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<PageAdmin />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/products" element={<PageProduct />} />
        <Route path="/cashier" element={<PageCashier />} />
        <Route path="/add-product" element={<PageAddProducts />} />
        <Route path="/chart" element={<ChartComponent />} />
        <Route path="/register" element={<PageRegister />} />
      </Routes>
    </>
  );
}

export default App;
