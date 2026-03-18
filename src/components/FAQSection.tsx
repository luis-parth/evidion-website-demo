import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "Für welche Unternehmen ist Evidion geeignet?",
    a: "Evidion richtet sich an Finanzinstitute, Kapitalverwaltungsgesellschaften, Versicherer und andere regulierte Unternehmen, die DORA, EU AI Act oder ähnliche Frameworks einhalten müssen.",
  },
  {
    q: "Wie schnell kann ich starten?",
    a: "Nach einem kurzen Erstgespräch starten wir mit der Analyse deiner bestehenden Dokumentenlandschaft. Erste Ergebnisse liegen in der Regel innerhalb weniger Tage vor.",
  },
  {
    q: "Muss ich meine bestehenden Systeme ersetzen?",
    a: "Nein. Evidion integriert sich in deine bestehende Infrastruktur und ergänzt sie um eine durchgängige Governance-Evidenz-Schicht.",
  },
  {
    q: "Wo werden meine Daten verarbeitet?",
    a: "Du entscheidest: On-Premises, Private Cloud oder unser gesichertes Hosting – immer mit Zero Data Retention und voller Datensouveränität.",
  },
  {
    q: "Was kostet Evidion?",
    a: "Die Kosten richten sich nach Umfang und Komplexität deiner Anforderungen. Im kostenlosen Erstgespräch besprechen wir dein Setup und erstellen ein individuelles Angebot.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-28 bg-muted">
    <div className="container max-w-3xl">
      <AnimatedSection>
        <div className="text-center mb-12">
          <p className="text-secondary text-sm font-semibold tracking-wider uppercase mb-3">Häufige Fragen</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">FAQ</h2>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card">
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQSection;
