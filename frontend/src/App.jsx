import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Clients from "./pages/Clients";
import Pets from "./pages/Pets";
import Appointments from "./pages/Appointments";
import PetProfile from "./pages/PetProfile";
import Inventory from "./pages/Inventory";
import Payments from "./pages/Payments";

import OwnerDashboard from "./pages/OwnerDashboard";
import OwnerPetProfile from "./pages/OwnerPetProfile";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
      path="/clients"
      element={
        <ProtectedRoute>
          <Clients />
        </ProtectedRoute>
      }
      />

      <Route 
      path="/pets" 
      element={
      <ProtectedRoute>
        <Pets />
      </ProtectedRoute>
      } 
      />
      
      <Route 
      path="/appointments" 
      element={
      <ProtectedRoute>
        <Appointments />
      </ProtectedRoute>
      } 
      />

      <Route
      path="/pets/:id"
      element={
      <ProtectedRoute>
       <PetProfile />
      </ProtectedRoute>
      }
      />

      <Route 
      path="/inventory" 
      element={
      <ProtectedRoute>
        <Inventory />
      </ProtectedRoute>
      } 
      />
      
      <Route 
      path="/payments" 
      element={<ProtectedRoute>
        <Payments />
      </ProtectedRoute>
      } 
      />

      <Route 
      path="/owner" 
      element={
      <OwnerDashboard />
      } 
      />

      <Route 
      path="/owner/pet/:id" 
      element={
      <OwnerPetProfile />
      } 
      />

    </Routes>
  );
}
