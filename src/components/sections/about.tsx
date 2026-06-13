import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { profile, stats } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
              About
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl md:text-5xl">
              Design that breathes,
              <br />
              builds, and converts.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.bio}
            </p>
            <p className="mt-6 border-l-2 border-foreground/20 pl-4 font-heading text-base leading-relaxed text-foreground italic sm:text-lg">
              &ldquo;{profile.personalNote}&rdquo;
            </p>
            <p className="mt-6 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              Based in {profile.location}
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-6 self-center sm:gap-10">
            {stats.map((stat) => (
              <RevealItem
                key={stat.label}
                className="border-l border-border pl-6"
              >
                <div className="font-heading text-4xl font-semibold sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  {stat.label}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
