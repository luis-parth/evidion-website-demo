import evidionLogo from "@/assets/evidion-logo.png";

const Footer = () => (
  <footer className="border-t border-border py-12 bg-muted">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={evidionLogo} alt="Evidion" className="h-7 w-auto opacity-70" />
          <span className="text-sm text-muted-foreground">Governance Evidence Infrastructure</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="/impressum" className="hover:text-foreground transition-colors">Impressum</a>
          <a href="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</a>
          <a href="mailto:info@evidion.de" className="hover:text-foreground transition-colors">info@evidion.de</a>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-8">© {new Date().getFullYear()} Evidion. Alle Rechte vorbehalten.</p>
    </div>
  </footer>
);

export default Footer;
