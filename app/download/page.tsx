import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-36">
          <h1 className="mx-auto max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Inizia a usare la tua giornata, non a organizzarla.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
            Parla. MyTaskly crea e organizza i tuoi impegni automaticamente. Tu devi solo dire cosa fare.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://play.google.com/store/apps/details?id=com.Gabry848Studio.Mytaskly"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Scarica per Android
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-8 py-4 text-base font-medium text-muted-foreground">
              iOS — Coming soon
            </span>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Gratis. Nessuna carta richiesta.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
