import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Pets() {
  const pets = [
    { id: 1, name: "Firulais", species: "Perro", owner: "Ana López" },
    { id: 2, name: "Mishi", species: "Gato", owner: "Juan Pérez" }
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div className="p-4">
          <h2>Mascotas</h2>

          <div className="row mt-3">
            {pets.map((p) => (
              <div key={p.id} className="col-md-4 mb-3">
                <Link
                  to={`/pets/${p.id}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="card p-3 shadow-sm h-100">
                    <h5>{p.name}</h5>
                    <p>{p.species}</p>
                    <small>Dueño: {p.owner}</small>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
