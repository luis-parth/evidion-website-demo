import { Shield, Clock, BarChart3, Award, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const items = [
  { icon: Shield, label: "DORA- & EU-AI-Act-konform" },
  { icon: Clock, label: "Audit-ready in <10 Min." },
  { icon: BarChart3, label: "95% Erkennungsrate" },
  { icon: Award, label: "15+ Jahre Erfahrung" },
  { icon: Users, label: "Vertraut von führenden Finanzinstituten" },
];

const TrustSection = () => (
  <section id="vertrauen" className="py-16 md:py-20 border-b border-border">
    <div className="container">
      <AnimatedSection>
        <div className="flex flex-wrap justify-center gap-8 md:gap-14">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-muted-foreground">
              <item.icon size={20} className="text-secondary shrink-0" />
              <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TrustSection;
