"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type Feature = {
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
}

const features: Feature[] = [
  {
    title: "La tua mente, finalmente libera.",
    description:
      "Basta digitare task uno per uno: parla o scrivi come faresti con un amico. L'agente AI di MyTaskly capisce ciò che hai in mente e trasforma una frase come «domani alle 10 ho la verifica di matematica» in un task completo, con data, ora e categoria giusta.",
    image: {
      src: "/screens/Chat testuale.png",
      alt: "Chat testuale e vocale con l'assistente AI di MyTaskly",
    },
  },
  {
    title: "Zero app da aprire. Zero cose dimenticate",
    description:
      "Non serve aprire l'app per ricordarti cosa devi fare. Il bot Telegram di MyTaskly ti accompagna nella chat che già usi tutti i giorni: aggiungi impegni con un messaggio vocale, chiedi cosa hai in programma, ricevi promemoria. Tutto sincronizzato in tempo reale con l'app.",
    image: {
      src: "/screens/telegram.png",
      alt: "Conversazione con il bot Telegram di MyTaskly",
    },
  },
  {
    title: "Apri la giornata. È già organizzata.",
    description:
      "Niente più note sparse o appuntamenti dimenticati. Il calendario di MyTaskly mostra a colpo d'occhio i giorni più densi e i task in arrivo, e si sincronizza con Google Calendar — con Apple Calendar e Outlook in arrivo — così la tua vita resta allineata su tutti i dispositivi.",
    image: {
      src: "/screens/Calendario.png",
      alt: "Calendario di MyTaskly con impegni del giorno",
    },
  },
  {
    title: "Inizia in 30 secondi. Vai avanti per sempre.",
    description:
      "Nessuna curva di apprendimento, nessun menu nascosto. Categorie, note stile post-it e task sono sempre a portata di mano, con un design bianco e nero che non distrae. MyTaskly è pensata per sparire dietro al lavoro, non per metterti altri ostacoli tra te e la tua giornata.",
    image: {
      src: "/screens/Note.png",
      alt: "Schermata categorie di MyTaskly, semplice e ordinata",
    },
  },
]

export function FeaturesScrollSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(0)
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const getClosestIndex = () => {
      const center = window.innerHeight / 2
      let closestIndex = 0
      let closestDist = Infinity

      itemRefs.current.forEach((el, i) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const elCenter = rect.top + rect.height / 2
        const dist = Math.abs(elCenter - center)
        if (dist < closestDist) {
          closestDist = dist
          closestIndex = i
        }
      })

      return closestIndex
    }

    const handleScroll = () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const next = getClosestIndex()
        setActiveIndex(next)
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Set initial value
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Delay displayIndex change so the fade-out of old image completes before
  // the new image fades in — prevents the flash of intermediate frames.
  const transitionRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (activeIndex === displayIndex) return

    // Start fade-out
    setFading(true)

    if (transitionRef.current) clearTimeout(transitionRef.current)
    transitionRef.current = setTimeout(() => {
      setDisplayIndex(activeIndex)
      setFading(false)
    }, 180)

    return () => {
      if (transitionRef.current) clearTimeout(transitionRef.current)
    }
  }, [activeIndex, displayIndex])

  return (
    <section id="funzionalita" className="relative border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-0 lg:px-10 lg:pt-0">
        {/* Intro */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-24 font-serif text-4xl leading-tight tracking-tight text-balance text-foreground sm:text-5xl lg:mt-32 lg:text-6xl">
            Una sola app per <em className="italic">tutta</em> la tua giornata.
          </h2>
        </div>

        {/* Scroll area */}
        <div className="mt-0 grid grid-cols-1 gap-16 lg:mt-0 lg:grid-cols-12 lg:gap-12">
          {/* Sticky phone */}
          <div className="order-1 lg:order-2 lg:col-span-5 xl:col-span-6">
            <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:justify-center">
              <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[320px] xl:max-w-[340px]">
                <div className="relative overflow-hidden rounded-[2.5rem] border-[12px] border-foreground bg-foreground shadow-2xl">
                  <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.75rem] bg-background">
                    {features.map((feature, index) => (
                      <Image
                        key={feature.image.src}
                        src={feature.image.src || "/placeholder.svg"}
                        alt={feature.image.alt}
                        fill
                        sizes="(min-width: 1024px) 380px, 90vw"
                        className={`object-cover transition-opacity duration-200 ease-in-out ${index === displayIndex && !fading ? "opacity-100" : "opacity-0"
                          }`}
                        priority={index === 0}
                      />
                    ))}
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="mt-8 flex items-center justify-center gap-2" aria-hidden="true">
                  {features.map((_, index) => (
                    <span
                      key={index}
                      className={`h-1 rounded-full transition-all duration-200 ${index === displayIndex ? "w-8 bg-foreground" : "w-4 bg-border"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling text column */}
          <div className="order-2 lg:order-1 lg:col-span-7 xl:col-span-6">
            <ul className="flex flex-col">
              {features.map((feature, index) => (
                <li
                  key={feature.title}
                  ref={(el) => {
                    itemRefs.current[index] = el
                  }}
                  data-index={index}
                  className="flex min-h-[70vh] flex-col justify-center py-12 lg:min-h-[85vh] lg:py-20"
                >
                  <h3 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
                    {feature.title}
                  </h3>
                  <p className="mt-6 max-w-lg text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
