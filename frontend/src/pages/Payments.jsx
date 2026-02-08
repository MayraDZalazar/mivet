import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Payments() {
  const payments = [
    { client: "Ana López", amount: 12000, method: "Efectivo", status: "Pagado" },
    { client: "Juan Pérez", amount: 8000, method: "Débito", status: "Pagado" },
    { client: "Carlos Díaz", amount: 15000, method: "Transferencia", status: "Pendiente" }
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />

        <div className="p-4">
          <h2>Pagos</h2>

          <table className="table">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Monto</th>
                <th>Método</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p, i) => (
                <tr key={i}>
                  <td>{p.client}</td>
                  <td>${p.amount}</td>
                  <td>{p.method}</td>
                  <td>
                    <span className={p.status === "Pagado" ? "text-success" : "text-warning"}>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}
