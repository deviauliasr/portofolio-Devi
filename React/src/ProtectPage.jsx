import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectPage() {
  const user = useSelector((state) => state.user);

  if (user.username == null) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
}
