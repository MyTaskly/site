import Link from "next/link"
import {
  Github,
} from "lucide-react"

const navLinks = [
  { label: "Funzionalità", href: "/funzionalita" },
  { label: "Download", href: "/download" },
  { label: "Prezzi", href: "/prezzi" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex items-center justify-center"
          >
            <img src="/icon.png" alt="MyTaskly" className="h-9 w-9 rounded-lg" />
          </span>
          <span className="font-serif text-2xl leading-none tracking-tight text-foreground">MyTaskly</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:block md:pl-16 lg:pl-24">
          <ul className="flex items-center gap-8 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/MyTaskly/app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}
