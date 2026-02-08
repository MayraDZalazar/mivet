import { useParams } from "react-router-dom";

export default function OwnerPetProfile() {
  const { id } = useParams();

  const pet = {
    name: "Firulais",
    breed: "Labrador",
    age: 4,
    weight: "25kg",
    vaccines: ["Rabia", "Moquillo"],
    history: [
      { date: "2026-01-20", diagnosis: "Otitis" },
      { date: "2025-11-02", diagnosis: "Vacunación" }
    ],
    photo: "https://placedog.net/300"
  };

  return (
    <div className="container mt-4">
      <img src={pet.photo} className="pet-photo mb-3" />
      <h2>{pet.name}</h2>
      <p>{pet.breed} — {pet.age} años — {pet.weight}</p>

      <h4>Vacunas</h4>
      <ul>
        {pet.vaccines.map(v => <li key={v}>{v}</li>)}
      </ul>

      <h4>Historial clínico</h4>
      {pet.history.map((h,i) => (
        <div key={i} className="card p-2 mb-2">
          {h.date} — {h.diagnosis}
        </div>
      ))}
    </div>
  );
}
