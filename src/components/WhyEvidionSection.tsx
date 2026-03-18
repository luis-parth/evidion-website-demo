import { Zap, Lock, Layers, HeartHandshake } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const advantages = [
  {
    icon: Zap,
    title: "Sofort einsatzbereit",
    description: "Keine monatelangen Implementierungsprojekte. Deine erste Evidenz steht in Tagen, nicht Quartalen.",
  },
  {
    icon: Lock,
    title: "Maximale Datensouveränität",
    description: "Zero Data Retention, On-Premises oder Private Cloud – deine Daten bleiben unter deiner Kontrolle.",
  },
  {
    icon: Layers,
    title: "Infrastruktur statt Tool",
    description: "Evidion ist kein weiteres Dashboard, sondern eine wachsende Governance-Infrastruktur, die mit dir skaliert.",
  },
  {
    icon: HeartHandshake,
    title: "Human-in-the-Loop",
    description: "KI unterstützt, Menschen entscheiden. So bleiben Letztverantwortung und Prüfhoheit immer dort, wo sie hingehören.",
  },
];

const WhyEvidionSection = () => (
  <section id="vorteile" className="py-20 md:py-28">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="text-secondary text-sm font-semibold tracking-wider uppercase mb-3">Dein Vorteil</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Warum Evidion?</h2>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {advantages.map((a, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <a.icon size={22} className="text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{a.description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyEvidionSection;
