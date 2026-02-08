import { Link } from "react-router-dom";

export default function PetCard({ pet }) {
  return (
    <Link to={`/owner/pet/${pet.id}`} className="text-decoration-none">
      <div className="card text-center p-3 shadow-sm pet-card">
        <img
          src={pet.photo}
          alt={pet.name}
          className="pet-photo mb-2"
        />
        <h6>{pet.name}</h6>
      </div>
    </Link>
  );
}
