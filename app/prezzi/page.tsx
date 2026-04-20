import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "0€",
    period: "per sempre",
    description: "Prova MyTaskly senza impegno.",
    cta: { label: "Inizia gratis", href: "/download" },
    highlighted: false,
    features: [
      { text: "20 messaggi testo / giorno", included: true },
      { text: "130 messaggi testo / mese", included: true },
      { text: "Chat vocale inclusa", included: true },
      { text: "20 messaggi vocali / mese", included: true },
      { text: "Modello AI base", included: true },
      { text: "Fino a 5 categorie", included: true },
    ],
  },
  {
    name: "Pro",
    price: "4,99€",
    period: "/mese",
    description: "Per chi usa MyTaskly ogni giorno.",
    cta: { label: "Inizia con Pro", href: "/download" },
    highlighted: true,
    features: [
      { text: "50 messaggi testo / giorno", included: true },
      { text: "250 messaggi testo / mese", included: true },
      { text: "Chat vocale inclusa", included: true },
      { text: "50 messaggi vocali / mese", included: true },
      { text: "Modello AI avanzato", included: true },
      { text: "Categorie illimitate", included: true },
    ],
  },
  {
    name: "Premium",
    price: "9,99€",
    period: "/mese",
    description: "Senza limiti, per chi vuole tutto.",
    cta: { label: "Inizia con Premium", href: "/download" },
    highlighted: false,
    features: [
      { text: "Messaggi testo illimitati / giorno", included: true },
      { text: "400 messaggi testo / mese", included: true },
      { text: "Chat vocale inclusa", included: true },
      { text: "150 messaggi vocali / mese", included: true },
      { text: "Modello AI avanzato", included: true },
      { text: "Categorie illimitate", included: true },
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-32">
          <h1 className="mx-auto max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Scegli il tuo piano.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Inizia gratis. Scala quando ti serve.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 text-left ${
                  plan.highlighted
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background"
                }`}
              >
                <h3
                  className={`text-sm font-medium uppercase tracking-wider ${
                    plan.highlighted ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-serif text-5xl tracking-tight">{plan.price}</span>
                  <span
                    className={`text-sm ${plan.highlighted ? "text-background/60" : "text-muted-foreground"}`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    plan.highlighted ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>

                <Link
                  href={plan.cta.href}
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                    plan.highlighted
                      ? "bg-background text-foreground"
                      : "bg-foreground text-background"
                  }`}
                >
                  {plan.cta.label}
                </Link>

                <ul className="mt-8 flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.highlighted ? "text-background/70" : "text-muted-foreground"
                        }`}
                      />
                      <span className={plan.highlighted ? "text-background/80" : "text-foreground"}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
