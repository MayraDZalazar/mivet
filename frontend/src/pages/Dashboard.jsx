import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div className="p-4">
          <h2>Dashboard</h2>

          <div className="row mt-4">
            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                <h6>Turnos hoy</h6>
                <h3>12</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                <h6>Mascotas</h6>
                <h3>320</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                <h6>Clientes</h6>
                <h3>180</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                <h6>Ingresos</h6>
                <h3>$240.000</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
