import Navbar from "../components/Navbar";
import PetCard from "../components/PetCard";

export default function OwnerDashboard() {
  const pets = [
  {
    id: 1,
    name: "Firulais",
    species: "Perro",
    breed: "Labrador",
    age: 4,
    photo: "https://placedog.net/300"
  },
  {
    id: 2,
    name: "Mishi",
    species: "Gato",
    breed: "Siames",
    age: 3,
    photo: "https://placekitten.com/300/300"
  }
];

  const appointments = [
  { id: 1, date: "2026-02-09", pet: "Firulais", status: "next" },
  { id: 2, date: "2026-01-10", pet: "Mishi", status: "past" }
];

  const payments = [
    { id: 1, service: "Consulta", amount: 8000, method: "Débito", status: "Pagado" }
  ];

    return (
    <div>
      <Navbar />

      <div className="container mt-4">

        {/* ===== MASCOTAS ===== */}
        <h4>Mis Mascotas</h4>

        <div className="row">
          {pets.map(p => (
            <div key={p.id} className="col-md-3 mb-3">
              <PetCard pet={p} />
            </div>
          ))}
        </div>

        {/* ===== TURNOS ===== */}
        <h4 className="mt-4">Turnos</h4>

        {appointments.map(a => (
          <div
            key={a.id}
            className={`card p-2 mb-2 ${
              a.status === "next"
                ? "border border-success bg-light"
                : "text-muted"
            }`}
          >
            {a.pet} — {a.date}
          </div>
        ))}

        <button
          className="btn btn-danger mt-3"
          onClick={() =>
            window.open("https://www.google.com/maps/search/veterinaria+cerca+de+mi")
          }
        >
          🚨 Urgencia
        </button>

      </div>
    </div>
  );
}