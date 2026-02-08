import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = (e) => {
    e.preventDefault();
    navigate("/owner");
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center"
      style={{ background: "var(--mivet-background)" }}>

      <form onSubmit={submit} className="bg-white p-5 rounded shadow" style={{ width: "400px" }}>
        <h3>Registro de Dueño</h3>

        <input className="form-control mb-2" placeholder="Nombre"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />

        <input className="form-control mb-2" placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />

        <input type="password" className="form-control mb-3" placeholder="Contraseña"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />

        <button className="btn w-100 text-white" style={{ background: "var(--mivet-primary)" }}>
          Crear cuenta
        </button>
      </form>
    </div>
  );
}
