import { Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-primary">
      
      <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MiVet</h1>

        <div className="space-x-4">
          <Link to="/" className="hover:text-soft">Home</Link>
          <Link to="/login" className="hover:text-soft">Login</Link>
          <Link to="/register" className="hover:text-soft">Registro</Link>
        </div>
      </nav>

      <main className="p-6">
        <Outlet />
      </main>

    </div>
  );
}

export default MainLayout;
