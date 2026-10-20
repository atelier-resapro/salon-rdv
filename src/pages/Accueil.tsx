import { Link } from "react-router-dom";

export default function Accueil() {
  return (
    <main className="page">
      <h1>Salon de coiffure</h1>
      <p>Prenez rendez-vous en ligne, en quelques clics.</p>
      <nav className="liens">
        <Link to="/reserver">Prendre rendez-vous</Link>
        <Link to="/mes-rendez-vous">Mes rendez-vous</Link>
      </nav>
    </main>
  );
}
