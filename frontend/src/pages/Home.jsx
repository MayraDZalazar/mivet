import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ background: "var(--mivet-background)", minHeight: "100vh" }}>
      <nav className="d-flex justify-content-between p-4">
        <h3 style={{ color: "var(--mivet-dark)" }}>MiVet</h3>
        <Link to="/login" className="btn text-white" style={{ background: "var(--mivet-primary)" }}>
          Ingresar
        </Link>
      </nav>

      <div className="container text-center mt-5">
        <h1 style={{ color: "var(--mivet-dark)" }}>
          Gestión inteligente para tu veterinaria
        </h1>
        <p className="mt-3">
          Turnos, pacientes, pagos y stock en una sola plataforma.
        </p>

        <Link to="/login" className="btn btn-lg mt-4 text-white"
          style={{ background: "var(--mivet-primary)" }}>
          Comenzar ahora
        </Link>
      </div>
    </div>
  );
}
