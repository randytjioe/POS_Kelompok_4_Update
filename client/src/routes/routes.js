import LoginPage from "../pages/loginpage"
import AdminPage from "../pages/adminpage"
import CashierPage from "../pages/cashierpage"


const routes = [
    {
        path:"/login",
        element : <LoginPage/>
    },
    {
        path:"/adminpage",
        element : <AdminPage/>
    },
    {
        path:"/cashierpage",
        element : <CashierPage/>
    },
]

export default routes;