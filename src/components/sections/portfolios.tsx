import {
  ArrowUpRight,
  Clapperboard,
  MonitorSmartphone,
  Palette,
  Trophy,
} from "lucide-react"

import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { portfolioLinks } from "@/lib/data"

const icons = [MonitorSmartphone, Palette, Trophy, Clapperboard]

export function Portfolios() {
  return (
    <section id="portfolios" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
            More Work
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl md:text-5xl">
            See the full portfolios.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Case studies, shots and edits live across a few different
            platforms, sorted by discipline.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {portfolioLinks.map((link, index) => {
            const Icon = icons[index]
            return (
              <RevealItem key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col gap-4 border border-border p-8 transition-colors hover:border-foreground/30"
                >
                  <div className="flex items-start justify-between">
                    <Icon className="size-7" />
                    <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold">
                      {link.label}
                    </h3>
                    <p className="mt-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                      {link.platform}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {link.description}
                  </p>
                </a>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
