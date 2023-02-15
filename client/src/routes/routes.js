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
import PageCoba from "../components/page";

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
    element: <PageProduct />,
  },
  {
    path: "/add-product",
    element: <PageAddProducts />,
  },
  {
    path: "/chart",
    element: <ChartComponent />,
  },
  {
    path: "/register",
    element: <PageRegister />,
  },
  {
    path: "/products/:id",
    element: <PageEditProduct />,
  },
  {
    path: "/edit-product",
    element: <PageEdit />,
  },
  {
    path: "/page",
    element: <PageCoba />,
  },
  {
    path: "/transaction",
    element: <PageTransaction />,
  },
];

export default routes;
