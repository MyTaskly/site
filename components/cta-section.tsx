import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-32">
        <h2 className="mx-auto max-w-full font-serif text-5xl sm:text-[5.625rem] leading-tight tracking-tight text-foreground text-center lg:text-[9rem]">
          Pronto a riprendere il controllo?
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="gap-2" asChild>
            <a href="/download">
              Inizia gratuitamente
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
