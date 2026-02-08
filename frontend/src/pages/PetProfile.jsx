import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { useState } from "react";
import AddMedicalRecord from "../components/AddMedicalRecord";

export default function PetProfile() {
  const pet = {
    name: "Firulais",
    species: "Perro",
    breed: "Labrador",
    age: 5,
    weight: "22kg"
  };

  const [records, setRecords] = useState([
  {
    date: "2025-01-10",
    diagnosis: "Otitis",
    treatment: "Gotas óticas",
    vet: "Dr. Juan"
  }
  ]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />

        <div className="p-4">
          <h2>{pet.name}</h2>
          <p>
            {pet.species} · {pet.breed} · {pet.age} años · {pet.weight}
          </p>

          <h4 className="mt-4">Historia Clínica</h4>

          {records.map((r, i) => (
            <div key={i} className="card p-3 mb-3 shadow-sm">
              <strong>{r.date}</strong>
              <p>Diagnóstico: {r.diagnosis}</p>
              <p>Tratamiento: {r.treatment}</p>
              <small>Veterinario: {r.vet}</small>
            </div>
          ))}

          <button
            className="btn mt-3 text-white"
            style={{ background: "var(--mivet-primary)" }}
          >
            + Agregar registro
          </button>

          <AddMedicalRecord onAdd={(r) => setRecords([r, ...records])} />

        </div>
      </div>
    </div>
  );
}
