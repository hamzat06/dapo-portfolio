import { Clapperboard, PenTool } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { coreSkills, interpersonalSkills, tools } from "@/lib/data"

const icons = [PenTool, Clapperboard]

export function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
            Skills
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl md:text-5xl">
            One toolkit, two disciplines.
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {coreSkills.map((skill, index) => {
            const Icon = icons[index]
            return (
              <RevealItem key={skill.title}>
                <Card className="h-full border border-border transition-colors hover:border-foreground/30">
                  <CardContent className="flex h-full flex-col gap-4">
                    <Icon className="size-7" />
                    <CardTitle className="text-base">{skill.title}</CardTitle>
                    <CardDescription>{skill.description}</CardDescription>
                  </CardContent>
                </Card>
              </RevealItem>
            )
          })}
        </RevealGroup>

        <div className="mt-16 grid gap-12 sm:grid-cols-2">
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
              Tools
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <Badge
                  key={tool}
                  variant="outline"
                  className="rounded-full border border-border px-4 py-2 text-[0.7rem]"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
              Strengths
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {interpersonalSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="rounded-full border border-border px-4 py-2 text-[0.7rem]"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
