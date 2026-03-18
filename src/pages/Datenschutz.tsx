import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Datenschutz = () => (
  <div className="min-h-screen bg-background">
    <div className="container max-w-3xl py-20">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft size={16} /> Zurück zur Startseite
      </Link>
      <h1 className="text-3xl font-bold text-foreground mb-6 font-display">Datenschutzerklärung</h1>
      <p className="text-muted-foreground">Dies ist ein Platzhalter für die datenschutzrechtlich geprüfte Version.</p>
      <p className="text-muted-foreground mt-4">
        Bitte vor Go-Live mit finalen Angaben zu Verantwortlichem, Rechtsgrundlagen, Speicherdauer und Betroffenenrechten ergänzen.
      </p>
    </div>
  </div>
);

export default Datenschutz;
