export default function Navbar() {
  return (
    <div style={{
      height: "60px",
      background: "white",
      borderBottom: "1px solid #ddd",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px"
    }}>
      <strong>Panel de Veterinaria</strong>
      <span>Admin</span>
    </div>
  );
}
