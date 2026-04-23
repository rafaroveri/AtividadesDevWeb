import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div style={{padding: "20px", fontFamily: "Arial"}}>
    
      <h1>Clínica Sorriso Saudável</h1>

      <nav style={{marginBottom: "20px"}}>
        <Link to="/">Cadastro</Link>
        <Link to="/resumo">Resumo</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;