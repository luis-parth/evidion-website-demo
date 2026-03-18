import { Search, Cog, TrendingUp } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Search,
    title: "Regulatory Mapping & Analyse",
    description: "Wir erfassen deine Verträge, Policies und Gremienbeschlüsse und mappen sie artikelgenau auf DORA, EU AI Act und weitere Frameworks.",
    outcome: "Ergebnis: Volle regulatorische Transparenz über alle Dokumente hinweg.",
  },
  {
    icon: Cog,
    title: "Evidence-Automatisierung",
    description: "Manuelle Compliance-Aufbereitung wird durch KI-gestützte Gap-Analysen und automatisierte Registerführung ersetzt.",
    outcome: "Ergebnis: Über 80 % weniger Aufwand bei der Audit-Vorbereitung.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Governance",
    description: "Deine Governance-Infrastruktur wächst mit jeder regulatorischen Änderung mit – versioniert, nachvollziehbar und supervisory-ready.",
    outcome: "Ergebnis: Jederzeit prüfbereit, nicht nur vor dem Audit.",
  },
];

const ServicesSection = () => (
  <section id="leistungen" className="py-20 md:py-28">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="text-secondary text-sm font-semibold tracking-wider uppercase mb-3">Unsere Leistungen</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Drei Module für deine Governance</h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="group rounded-2xl border border-border bg-card p-8 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <s.icon size={24} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 flex-1">{s.description}</p>
              <p className="text-sm font-semibold text-secondary">{s.outcome}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
