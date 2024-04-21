import axios from "./axios";

export const registerRequest = (user) => axios.post("/registrar", user);

export const loginRequest = (user) => axios.post("/iniciar-sesion", user);

export const logoutRequest = () => axios.post("/cerrar-sesion");

export const verifyTokenRequest = () => axios.get("/verify");
