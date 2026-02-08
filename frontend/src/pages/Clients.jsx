import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Clients() {
  const clients = [
    { id: 1, name: "Ana López", email: "ana@gmail.com", pets: 2 },
    { id: 2, name: "Juan Pérez", email: "juan@gmail.com", pets: 1 }
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />

        <div className="p-4">
          <h2>Clientes</h2>

          <table className="table mt-3">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Mascotas</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(c => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.pets}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}
