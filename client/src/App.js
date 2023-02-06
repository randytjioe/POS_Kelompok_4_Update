import { Routes, Route } from "react-router-dom";
import PageAdmin from "./pages/adminpage";
import PageLogin from "./pages/loginpage";
import PageProduct from "./pages/productspage";
import PageCashier from "./pages/pagecashier"

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<PageAdmin />} />
        {/* <Route path="/login" element={<PageLogin />} /> */}
        <Route path="/products" element={<PageProduct />} />
        <Route path="/cashier" element={<PageCashier />} />
      </Routes>
    </>
  );
}

export default App;
