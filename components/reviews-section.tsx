import Image from "next/image"

type Review = {
  name: string
  role: string
  avatar: string
  quote: string
}

const reviews: Review[] = [
  {
    name: "Paolo",
    role: "Studente",
    avatar: "/avatar-pencil-2.jpg",
    quote:
      "Mi è stata molto utile per riuscire ad ottimizzare i tempi, rigurdando gli impegni quotidiani",
  },
  {
    name: "Giulia Rinaldi",
    role: "Studentessa universitaria",
    avatar: "/avatar-pencil-1.jpg",
    quote:
      "Tra lezioni, scadenze e vita sociale avevo perso il controllo. Adesso dico 'ricordami la verifica di mercoledì' e tutto finisce nel posto giusto.",
  },
  {
    name: "Marco Bellini",
    role: "Product Manager",
    avatar: "/avatar-pencil-3.jpg",
    quote:
      "Finalmente una to-do app che capisce davvero cosa voglio dire. La chat AI trasforma un discorso confuso in task chiari e ordinati. Geniale.",
  },
]

export function ReviewsSection() {
  return (
    <section className="relative border-t border-border/60 bg-secondary/40 overflow-hidden">
      <div className="mx-auto max-w-7xl py-12 pb-[66px] lg:px-10 lg:py-16 lg:pb-[66px]">
        {/* Mobile: Infinite scrolling. Desktop: CSS Grid */}
        <div className="md:hidden flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-6 px-3">
            {[...reviews, ...reviews].map((review, idx) => (
              <figure
                key={`${review.name}-${idx}`}
                className="flex h-full w-[85vw] sm:w-[60vw] shrink-0 flex-col justify-between rounded-2xl border border-border bg-background p-7 transition-shadow hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-1 text-foreground" aria-label="Valutazione 5 stelle">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M12 2l2.9 6.9L22 10l-5.5 4.7L18.2 22 12 18.3 5.8 22l1.7-7.3L2 10l7.1-1.1L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-5 font-serif text-xl leading-snug text-pretty text-foreground">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-5">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-secondary">
                    <Image
                      src={review.avatar || "/placeholder.svg"}
                      alt={`Ritratto a matita di ${review.name}`}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-sm leading-tight">
                    <div className="font-medium text-foreground">{review.name}</div>
                    <div className="text-muted-foreground">{review.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-8">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-border bg-background p-7 transition-shadow hover:shadow-sm"
            >
              <div>
                <div className="flex items-center gap-1 text-foreground" aria-label="Valutazione 5 stelle">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M12 2l2.9 6.9L22 10l-5.5 4.7L18.2 22 12 18.3 5.8 22l1.7-7.3L2 10l7.1-1.1L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-5 font-serif text-xl leading-snug text-pretty text-foreground">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-5">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-secondary">
                  <Image
                    src={review.avatar || "/placeholder.svg"}
                    alt={`Ritratto a matita di ${review.name}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="text-sm leading-tight">
                  <div className="font-medium text-foreground">{review.name}</div>
                  <div className="text-muted-foreground">{review.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
