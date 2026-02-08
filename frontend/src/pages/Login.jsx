import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulación SaaS
    if (user.startsWith("VET")) {
      navigate("/dashboard");
    } else {
      navigate("/owner");
    }
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center"
      style={{ background: "var(--mivet-background)" }}>

      <form onSubmit={submit} className="bg-white p-5 rounded shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">MiVet</h3>

        <input
          className="form-control mb-3"
          placeholder="Email o Matrícula"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn w-100 text-white"
          style={{ background: "var(--mivet-primary)" }}>
          Ingresar
        </button>
      </form>
    </div>
  );
}