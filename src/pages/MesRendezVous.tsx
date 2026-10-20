import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type RendezVous = { id: string; debut: string; fin: string; statut: string };

export default function MesRendezVous() {
  const [liste, setListe] = useState<RendezVous[]>([]);

  useEffect(() => {
    supabase
      .from("rendez_vous")
      .select("*")
      .order("debut")
      .then(({ data }) => setListe(data ?? []));
  }, []);

  return (
    <main className="page">
      <h1>Mes rendez-vous</h1>
      <ul>
        {liste.map((r) => (
          <li key={r.id}>
            {new Date(r.debut).toLocaleString("fr-FR")} — {r.statut}
          </li>
        ))}
      </ul>
    </main>
  );
}
