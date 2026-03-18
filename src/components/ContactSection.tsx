import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Simulate submission
    setTimeout(() => {
      setSending(false);
      toast({ title: "Nachricht gesendet", description: "Wir melden uns innerhalb von 24 Stunden bei dir." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="kontakt" className="py-20 md:py-28">
      <div className="container max-w-2xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-secondary text-sm font-semibold tracking-wider uppercase mb-3">Jetzt starten</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kostenloses Erstgespräch vereinbaren</h2>
            <p className="text-muted-foreground text-lg">
              Erzähl uns von deinen Anforderungen – wir zeigen dir, wie Evidion dich unterstützen kann.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder="Max Mustermann"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">E-Mail *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder="max@unternehmen.de"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Nachricht *</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                placeholder="Beschreibe kurz dein Anliegen …"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Mit dem Absenden stimmst du unserer{" "}
              <a href="/datenschutz" className="underline hover:text-foreground">Datenschutzerklärung</a> zu.
            </p>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg bg-secondary px-8 py-3.5 text-base font-semibold text-secondary-foreground hover:bg-secondary/90 transition-all disabled:opacity-60"
            >
              {sending ? "Wird gesendet …" : "Nachricht senden"}
              <Send size={16} />
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
