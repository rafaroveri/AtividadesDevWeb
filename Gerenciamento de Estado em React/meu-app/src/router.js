import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Cadastro from "./context/Cadastro";
import Resumo from "./context/Resumo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Cadastro />},
      {path: "resumo", element: <Resumo />}
    ],
  }
]);

export default router;