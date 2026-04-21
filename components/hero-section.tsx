import Image from "next/image"
import Link from "next/link"

const screens = [
  {
    src: "/screens/Assistente vocale.png",
    alt: "Assistente vocale di MyTaskly in ascolto",
  },
  {
    src: "/screens/Home.png",
    alt: "Schermata home di MyTaskly con chat AI",
  },
  {
    src: "/screens/Chat testuale.png",
    alt: "Chat testuale di MyTaskly con l'assistente AI",
  },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-12 pb-16 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pt-24 lg:pb-[63px]">
        {/* Copy */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-center text-center sm:items-start sm:text-left">
          <h1 className="mt-2 sm:mt-6 font-serif text-[2.75rem] leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl lg:text-7xl xl:text-[88px]">
            Organizza la tua <br className="hidden sm:block" />
            giornata <em className="italic">parlando</em>.
          </h1>

          <p className="mt-4 sm:mt-6 max-w-xl text-[1.05rem] leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Dì cosa devi fare e MyTaskly organizza automaticamente i tuoi impegni nella giornata.
          </p>

          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="/download"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Scarica gratis ora
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
          </div>


        </div>

        {/* Visual: 3 tilted phone screens */}
        <div className="relative mt-8 sm:mt-0 lg:col-span-6 xl:col-span-5">
          <div className="relative mx-auto h-[400px] w-full max-w-[320px] sm:max-w-md sm:h-[600px] lg:h-[640px]">
            {/* Back screen */}
            <PhoneFrame
              src={screens[2].src}
              alt={screens[2].alt}
              className="absolute top-0 right-0 w-[62%] -rotate-[14deg] sm:w-[58%]"
              priority={false}
            />
            {/* Middle screen */}
            <PhoneFrame
              src={screens[1].src}
              alt={screens[1].alt}
              className="absolute top-12 sm:top-16 left-0 w-[62%] -rotate-[4deg] sm:w-[58%]"
              priority={false}
            />
            {/* Front screen */}
            <PhoneFrame
              src={screens[0].src}
              alt={screens[0].alt}
              className="absolute bottom-0 left-1/2 w-[66%] -translate-x-1/2 rotate-[8deg] sm:w-[62%]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneFrame({
  src,
  alt,
  className,
  priority,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
}) {
  return (
    <div className={`${className} drop-shadow-2xl`}>
      <div className="relative overflow-hidden rounded-[2.25rem] border-[10px] border-foreground bg-foreground shadow-2xl">
        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.5rem] bg-background">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 320px, 50vw"
            className="object-cover"
            priority={priority}
          />
        </div>
      </div>
    </div>
  )
}
