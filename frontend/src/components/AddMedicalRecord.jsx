import { useState } from "react";

export default function AddMedicalRecord({ onAdd }) {
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");
  const [notes, setNotes] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onAdd({
      date: new Date().toISOString().slice(0, 10),
      diagnosis,
      treatment,
      notes,
      vet: "Dr. Juan"
    });

    setDiagnosis("");
    setTreatment("");
    setNotes("");
  };

  return (
    <form onSubmit={submit} className="card p-3 shadow-sm mt-3">
      <h5>Nuevo registro</h5>

      <input
        className="form-control mb-2"
        placeholder="Diagnóstico"
        value={diagnosis}
        onChange={(e) => setDiagnosis(e.target.value)}
        required
      />

      <input
        className="form-control mb-2"
        placeholder="Tratamiento"
        value={treatment}
        onChange={(e) => setTreatment(e.target.value)}
        required
      />

      <textarea
        className="form-control mb-2"
        placeholder="Observaciones"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button
        className="btn text-white"
        style={{ background: "var(--mivet-primary)" }}
      >
        Guardar
      </button>
    </form>
  );
}
