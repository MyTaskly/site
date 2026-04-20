import { Github, Twitter, MessageSquare, BookOpen, Code, Bot, Heart, Zap } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Funzionalità", href: "#" },
    { label: "Prezzi", href: "#" },
    { label: "Integrazioni", href: "#" },
    { label: "Roadmap", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  company: [
    { label: "Chi siamo", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Carriere", href: "#" },
    { label: "Contatti", href: "#" },
  ],
  resources: [
    { label: "Documentazione", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Community", href: "#" },
    { label: "Status", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Termini di servizio", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:gap-8">
          {/* Product */}
          <div>
            <h3 className="mb-4 font-medium text-foreground">Prodotto</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-medium text-foreground">Azienda</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-medium text-foreground">Risorse</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-medium text-foreground">Legale</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust badges & social */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-border/60 pt-8 sm:flex-row sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/MyTaskly/app"
              className="flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary/60"
            >
              <Code className="h-3.5 w-3.5" />
              <span>Open Source</span>
            </a>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <Bot className="h-3.5 w-3.5" />
              <span>MCP Ready</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <Zap className="h-3.5 w-3.5" />
              <span>AI Powered</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/MyTaskly/app"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://discord.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Discord"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Documentation"
            >
              <BookOpen className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} MyTaskly. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="inline h-3 w-3 text-red-500" />
            <span>by a 16 y/o developer</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
