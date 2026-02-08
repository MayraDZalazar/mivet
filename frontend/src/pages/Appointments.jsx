import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Appointments() {
  const appointments = [
    { pet: "Firulais", time: "10:00", vet: "Dr. Juan" },
    { pet: "Mishi", time: "11:30", vet: "Dra. Ana" },
    { pet: "Rocky", time: "13:00", vet: "Dr. Juan" }
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />

        <div className="p-4">
          <h2>Turnos de Hoy</h2>

          <div className="row mt-3">
            {appointments.map((a, i) => (
              <div key={i} className="col-md-4">
                <div className="card p-3 shadow-sm mb-3">
                  <h5>{a.time}</h5>
                  <p>{a.pet}</p>
                  <small>{a.vet}</small>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
