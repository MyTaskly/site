import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { Check } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

const plans = [
  {
    name: "Free",
    price: "0€",
    period: "per sempre",
    description: "Prova MyTaskly senza impegno.",
    cta: { label: "Inizia gratis", href: "/download" },
    highlighted: true,
    features: [
      { text: "20 messaggi testo / giorno", included: true },
      { text: "130 messaggi testo / mese", included: true },
      { text: "Chat vocale inclusa", included: true },
      { text: "20 messaggi vocali / mese", included: true },
      { text: "Modello AI base", included: true },
      { text: "Fino a 5 categorie", included: true },
    ],
  },
  // {
  //   name: "Pro",
  //   price: "4,99€",
  //   period: "/mese",
  //   description: "Per chi usa MyTaskly ogni giorno.",
  //   cta: { label: "Inizia con Pro", href: "/download" },
  //   highlighted: true,
  //   features: [
  //     { text: "50 messaggi testo / giorno", included: true },
  //     { text: "250 messaggi testo / mese", included: true },
  //     { text: "Chat vocale inclusa", included: true },
  //     { text: "50 messaggi vocali / mese", included: true },
  //     { text: "Modello AI avanzato", included: true },
  //     { text: "Categorie illimitate", included: true },
  //   ],
  // },
  // {
  //   name: "Premium",
  //   price: "9,99€",
  //   period: "/mese",
  //   description: "Senza limiti, per chi vuole tutto.",
  //   cta: { label: "Inizia con Premium", href: "/download" },
  //   highlighted: false,
  //   features: [
  //     { text: "Messaggi testo illimitati / giorno", included: true },
  //     { text: "400 messaggi testo / mese", included: true },
  //     { text: "Chat vocale inclusa", included: true },
  //     { text: "150 messaggi vocali / mese", included: true },
  //     { text: "Modello AI avanzato", included: true },
  //     { text: "Categorie illimitate", included: true },
  //   ],
  // },
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

          <div className="mt-16 flex justify-center">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative w-full max-w-md flex flex-col rounded-2xl border p-8 text-left ${
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

          <div className="mt-16 text-center">
            <p className="text-xl font-medium text-foreground italic">
              Funzionalità premium in arrivo...
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2 className="mb-12 text-center font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            Domande frequenti
          </h2>
          <div className="mx-auto mt-12 max-w-2xl">
            <Accordion type="single" collapsible className="flex flex-col gap-4 w-full">
              <AccordionItem value="item-1" className="rounded-lg border border-border/60 bg-secondary/20 px-6 py-2 border-b">
                <AccordionTrigger className="text-lg font-medium text-foreground hover:no-underline">
                  È davvero tutto gratis?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  Sì! Il piano Free include tutto ciò che serve per organizzare la tua giornata senza limiti di tempo. Le funzionalità premium arriveranno in futuro per chi desidera opzioni avanzate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="rounded-lg border border-border/60 bg-secondary/20 px-6 py-2 border-b">
                <AccordionTrigger className="text-lg font-medium text-foreground hover:no-underline">
                  Cosa significa "Modello AI base"?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  MyTaskly usa un'intelligenza artificiale veloce e reattiva, perfetta per comprendere le tue richieste quotidiane e trasformarle istantaneamente in task organizzati.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="rounded-lg border border-border/60 bg-secondary/20 px-6 py-2 border-b">
                <AccordionTrigger className="text-lg font-medium text-foreground hover:no-underline">
                  Posso usare MyTaskly su più dispositivi?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  Certo. Tutti i tuoi dati sono sincronizzati in tempo reale tra l'app principale e il bot di Telegram, ovunque tu sia.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
