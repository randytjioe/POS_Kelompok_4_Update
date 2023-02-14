import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedPage({ children, needLogin = false }) {
  let navigate = useNavigate();
  const userSelector = useSelector((state) => state.auth);
  console.log(userSelector.isadmin);

  useEffect(() => {
    if (needLogin && !userSelector.id) {
      return navigate("/login", { replace: true });
    }

    if (userSelector.id && userSelector.isadmin) {
      return navigate("/adminpage");
    }

    if (userSelector.id && !userSelector.isadmin) {
      return navigate("/cashierpage");
    }
  }, []);

  return children;
}

export default ProtectedPage;
