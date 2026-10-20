import { FormEvent, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Reserver() {
  const [debut, setDebut] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  async function envoyer(e: FormEvent) {
    e.preventDefault();
    const { data: session } = await supabase.auth.getUser();
    if (!session.user) {
      setMessage("Connectez-vous pour réserver.");
      return;
    }
    const debutDate = new Date(debut);
    const finDate = new Date(debutDate.getTime() + 30 * 60 * 1000);
    const { error } = await supabase.from("rendez_vous").insert({
      client_id: session.user.id,
      debut: debutDate.toISOString(),
      fin: finDate.toISOString(),
    });
    setMessage(error ? "La réservation a échoué." : "Rendez-vous enregistré.");
  }

  return (
    <main className="page">
      <h1>Prendre rendez-vous</h1>
      <form onSubmit={envoyer}>
        <label htmlFor="debut">Date et heure</label>
        <input id="debut" type="datetime-local" value={debut} onChange={(e) => setDebut(e.target.value)} required />
        <button type="submit">Réserver</button>
      </form>
      {message && <p>{message}</p>}
    </main>
  );
}
