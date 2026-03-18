import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
    {/* Subtle grid pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
      backgroundSize: "60px 60px"
    }} />

    {/* Accent glow */}
    <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]" style={{ background: "hsl(217 91% 60%)" }} />

    <div className="container relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <p className="text-secondary text-sm md:text-base font-semibold tracking-wider uppercase mb-6">
          Governance Evidence Infrastructure
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 font-display">
          Mach deine Governance auditfähig – in Minuten, nicht Monaten.
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-10 max-w-2xl">
          Evidion verwandelt regulatorische Pflichten in strukturierte, prüfbare Evidenz.
          Weniger manuelle Aufbereitung, mehr Sicherheit für dein nächstes Audit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-7 py-3.5 text-base font-semibold text-secondary-foreground hover:bg-secondary/90 transition-all hover:shadow-lg"
          >
            Kostenloses Erstgespräch
            <ArrowRight size={18} />
          </a>
          <a
            href="#leistungen"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/20 px-7 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/5 transition-all"
          >
            Mehr erfahren
          </a>
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <a href="#vertrauen" aria-label="Weiter scrollen">
        <ChevronDown size={28} className="text-primary-foreground/40 animate-bounce" />
      </a>
    </motion.div>
  </section>
);

export default HeroSection;
