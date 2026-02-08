import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Inventory() {
  const [products, setProducts] = useState([
    { id: 1, name: "Vacuna Antirrábica", stock: 12, min: 5 },
    { id: 2, name: "Alimento Premium", stock: 3, min: 10 }
  ]);

  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [min, setMin] = useState("");

  const addProduct = () => {
    setProducts([
      ...products,
      { id: Date.now(), name, stock: Number(stock), min: Number(min) }
    ]);
    setName("");
    setStock("");
    setMin("");
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />

        <div className="p-4">
          <h2>Inventario</h2>

          <div className="card p-3 mb-4">
            <h5>Agregar producto</h5>
            <div className="d-flex gap-2">
              <input className="form-control" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />
              <input className="form-control" placeholder="Stock" value={stock} onChange={e => setStock(e.target.value)} />
              <input className="form-control" placeholder="Mínimo" value={min} onChange={e => setMin(e.target.value)} />
              <button className="btn text-white" style={{ background: "var(--mivet-primary)" }} onClick={addProduct}>
                Agregar
              </button>
            </div>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Stock</th>
                <th>Mínimo</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.stock}</td>
                  <td>{p.min}</td>
                  <td>
                    {p.stock < p.min ? <span className="text-danger">Bajo</span> : <span className="text-success">OK</span>}
                  </td>
                  <td>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteProduct(p.id)}>Eliminar</button>
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