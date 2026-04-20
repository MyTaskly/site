import Link from "next/link"
import Image from "next/image"
import {
  SiteHeader
} from "@/components/site-header"
import {
  SiteFooter
} from "@/components/site-footer"
import {
  MessageCircle,
  Bell,
  Send,
  Calendar,
  FileText,
  Code,
  ArrowRight,
  Github,
  Zap,
} from "lucide-react"

/* ──────────────────────────── data ──────────────────────────── */

const features = [
  {
    icon: MessageCircle,
    title: "La tua mente, finalmente libera",
    description:
      "Parla o scrivi come faresti con un amico. L'AI capisce, organizza e mette tutto al posto giusto — senza che tu debba pensarci.",
    screen: {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chat%20testuale-APjzhsxSBz1Vew8EaZcC81hmGKPyyx.png",
      alt: "Chat AI di MyTaskly",
    },
  },
  {
    icon: Bell,
    title: "Non dimentichi più niente",
    description:
      "Promemoria intelligenti che arrivano quando servono davvero. Non alle 9 di mattina quando sei già in corsa.",
    screen: {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Assistente%20vocale-Cmle6k2cuFA1fWBaBohoZW0rojd4tX.png",
      alt: "Promemoria intelligenti di MyTaskly",
    },
  },
  {
    icon: Send,
    title: "Telegram è già aperto. Usalo.",
    description:
      "Aggiungi task, chiedi cosa hai in programma, ricevi promemoria — tutto nella chat che usi già tutti i giorni. Zero app da aprire.",
    screen: {
      src: "/screens/telegram.png",
      alt: "Bot Telegram di MyTaskly",
    },
  },
  {
    icon: Calendar,
    title: "Il calendario che si aggiorna da solo",
    description:
      "Sincronizzato con Google Calendar in tempo reale. Apri la giornata — è già organizzata.",
    screen: {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Calendario-TgE5cFjoJLeKBJrsghjSMXOHUFSS2S.png",
      alt: "Calendario integrato di MyTaskly",
    },
  },
  {
    icon: FileText,
    title: "Cattura tutto, subito",
    description:
      "Un'idea mentre cammini, un appunto durante una call. Le note di MyTaskly sono sempre a un tap di distanza.",
    screen: {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Categorie-huFeQj4eVw9sQ2yVsNK8OANuwtdS4b.png",
      alt: "Note veloci di MyTaskly",
    },
  },
]

const integrations = [
  { name: "Google Calendar", icon: Calendar },
  { name: "Telegram", icon: Send },
  { name: "MCP", icon: Code },
]

/* ──────────────────────────── page ──────────────────────────── */

export default function FunzionalitaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-32">
          <h1 className="mx-auto max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
            Parla e MyTaskly crea e organizza i{" "}
            <em className="italic">tuoi impegni.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            MyTaskly è pensata per sparire dietro alla tua giornata — non per
            diventare un&apos;altra app da gestire.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Scarica gratis
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/MyTaskly/app"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Github className="h-4 w-4" />
              Vedi su GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {features.map((f, i) => (
            <FeatureRow key={f.title} feature={f} reversed={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* ── Integrations ── */}
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-28">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Integrazioni
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Vive dove lavori già.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Google Calendar · Telegram · MCP. Niente da reimparare, niente da
            configurare da zero.
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
            {integrations.map((int) => (
              <div
                key={int.name}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-background px-10 py-8 transition-shadow hover:shadow-md"
              >
                <int.icon className="h-8 w-8 text-foreground" />
                <span className="text-sm font-medium text-foreground">
                  {int.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Source ── */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-28">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground text-background">
            <Code className="h-6 w-6" />
          </div>
          <h2 className="mt-8 font-serif text-4xl leading-tight tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Codice aperto. Zero sorprese.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            MyTaskly è open source. Puoi vedere esattamente come funziona,
            contribuire, o farne un fork. Niente black box, niente dati venduti
            di nascosto.
          </p>
          <div className="mt-10">
            <Link
              href="https://github.com/MyTaskly/app"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Github className="h-4 w-4" />
              Vedi il codice su GitHub
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA finale ── */}
      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-32">
          <h2 className="mx-auto max-w-4xl font-serif text-5xl leading-tight tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
            Pronto a smettere di dimenticare?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Scarica MyTaskly gratis. Inizia a parlare.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://play.google.com/store/apps/details?id=com.Gabry848Studio.Mytaskly"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              <Zap className="h-4 w-4" />
              Scarica per Android
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Scarica per iOS
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

/* ──────────────── feature row (alternating) ──────────────── */

function FeatureRow({
  feature,
  reversed,
}: {
  feature: (typeof features)[number]
  reversed: boolean
}) {
  const { icon: Icon, title, description, screen } = feature

  return (
    <div
      className={`grid grid-cols-1 items-center gap-12 border-b border-border/40 py-20 last:border-b-0 lg:grid-cols-12 lg:gap-16 lg:py-28 ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text */}
      <div
        className={`flex flex-col justify-center lg:col-span-6 ${
          reversed ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary">
          <Icon className="h-5 w-5 text-foreground" />
        </div>
        <h3 className="font-serif text-3xl leading-tight tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h3>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>

      {/* Phone mockup */}
      <div
        className={`flex justify-center lg:col-span-6 ${
          reversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="w-full max-w-xs">
          <div className="relative overflow-hidden rounded-[2.25rem] border-[10px] border-foreground bg-foreground shadow-2xl">
            <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.5rem] bg-background">
              <Image
                src={screen.src}
                alt={screen.alt}
                fill
                sizes="(min-width: 1024px) 320px, 80vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
