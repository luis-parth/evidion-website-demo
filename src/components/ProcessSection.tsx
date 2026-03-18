import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Analyse",
    description: "Wir analysieren deine bestehende Dokumentenlandschaft, identifizieren Compliance-Gaps und bewerten deine regulatorische Reife.",
  },
  {
    number: "02",
    title: "Umsetzung",
    description: "Deine Governance-Infrastruktur wird aufgebaut: automatisiertes Mapping, Evidence Ledger und revisionssichere Nachweisführung.",
  },
  {
    number: "03",
    title: "Skalierung",
    description: "Das System wächst mit dir – neue Regulierungen, Frameworks und Geschäftsfelder werden nahtlos integriert.",
  },
];

const ProcessSection = () => (
  <section id="prozess" className="py-20 md:py-28 bg-muted">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="text-secondary text-sm font-semibold tracking-wider uppercase mb-3">So arbeiten wir</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">In drei Schritten zur Audit-Readiness</h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {steps.map((step, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="relative">
              <span className="text-6xl font-extrabold text-secondary/10 font-display">{step.number}</span>
              <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <ArrowRight size={24} className="hidden md:block absolute top-8 -right-4 text-secondary/30" />
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
