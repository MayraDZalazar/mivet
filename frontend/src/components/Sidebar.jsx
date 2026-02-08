import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{
      width: "240px",
      background: "var(--mivet-dark)",
      color: "white",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <h3 style={{ color: "var(--mivet-light)" }}>MiVet</h3>

      <nav className="d-flex flex-column gap-3 mt-4">
        <Link to="/dashboard" className="text-white text-decoration-none">Dashboard</Link>
        <Link to="/clients" className="text-white text-decoration-none">Clientes</Link>
        <Link to="/pets" className="text-white text-decoration-none">Mascotas</Link>
        <Link to="/appointments" className="text-white text-decoration-none">Turnos</Link>
        <Link to="/inventory" className="text-white text-decoration-none">Inventario</Link>
        <Link to="/payments" className="text-white text-decoration-none">Pagos</Link>
      </nav>
    </div>
  );
}
