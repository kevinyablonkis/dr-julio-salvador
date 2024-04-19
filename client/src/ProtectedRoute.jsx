import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  console.log(isAuthenticated, isLoading);

  if (isLoading) return <h1>Cargando...</h1>;

  if (!isLoading && !isAuthenticated) return <Navigate to={"/iniciar-sesion"} />;

  return <Outlet />;
}

export default ProtectedRoute;
