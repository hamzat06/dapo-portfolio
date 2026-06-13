import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/lib/data"

export function Experience() {
  return (
    <section id="experience" className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
            Experience
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl md:text-5xl">
            Seven years across studios, sport and startups.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 0.05}>
              <div className="group grid gap-4 border-t border-border py-8 md:grid-cols-[1fr_2fr] md:gap-12 md:py-10">
                <div>
                  <Badge
                    variant="outline"
                    className="rounded-full border border-border px-3 py-1.5 text-[0.65rem]"
                  >
                    {job.period}
                  </Badge>
                  <h3 className="mt-4 font-heading text-2xl font-semibold sm:text-3xl">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-sm font-semibold tracking-wide text-muted-foreground">
                    {job.role} · {job.location}
                  </p>
                </div>

                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {job.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
