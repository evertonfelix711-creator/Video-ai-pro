import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    retornar (
  <div nomeDaClasse="min-h-screen bg-background">
    <Barra de navegação />
    <Herói />

    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Link to="/pricing">
        <button style={{ padding: "12px 24px", fontSize: "16px" }}>
          Ver Planos e Preços
        </button>
      </Link>
    </div>

  </div>
);

export default Index;
