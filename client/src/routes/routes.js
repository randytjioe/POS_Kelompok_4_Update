import PageAdmin from "../pages/adminpage";
import PageLogin from "../pages/loginpage";
import PageProduct from "../pages/productspage";
import PageCashier from "../pages/pagecashier";
import PageAddProducts from "../pages/pageaddproduct";
import ChartComponent from "../components/chart";
import PageRegister from "../components/register_cashier";
import PageEdit from "../pages/pageeditproduct";
import PageEditProduct from "../components/edit_product_per_unit";
import PageTransaction from "../pages/pagetransaction";
import ProtectedPage from "./protected";

const routes = [
  {
    path: "/login",
    element: (
      <ProtectedPage>
        <PageLogin />
      </ProtectedPage>
    ),
  },
  {
    path: "/",
    element: <ProtectedPage needLogin={true}></ProtectedPage>,
  },
  {
    path: "/adminpage",
    element: (
      <ProtectedPage needLogin={true}>
        <PageAdmin />
      </ProtectedPage>
    ),
  },
  {
    path: "/cashierpage",
    element: (
      <ProtectedPage needLogin={true}>
        <PageCashier />
      </ProtectedPage>
    ),
  },
  {
    path: "/products",
    element: (
      <ProtectedPage needLogin={true}>
        <PageProduct />
      </ProtectedPage>
    ),
  },
  {
    path: "/add-product",
    element: (
      <ProtectedPage needLogin={true}>
        <PageAddProducts />
      </ProtectedPage>
    ),
  },
  {
    path: "/chart",
    element: <ChartComponent />,
  },
  {
    path: "/register",
    element: (
      <ProtectedPage needLogin={true}>
        <PageRegister />
      </ProtectedPage>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <ProtectedPage needLogin={true}>
        <PageEditProduct />
      </ProtectedPage>
    ),
  },
  {
    path: "/edit-product",
    element: (
      <ProtectedPage needLogin={true}>
        <PageEdit />
      </ProtectedPage>
    ),
  },

  {
    path: "/transaction",
    element: (
      <ProtectedPage needLogin={true}>
        <PageTransaction />
      </ProtectedPage>
    ),
  },
];

export default routes;
