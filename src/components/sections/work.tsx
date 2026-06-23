import { ArrowUpRight } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { projects } from "@/lib/data"

export function Work() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
              Selected Work
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl md:text-5xl">
              Products, brands and platforms.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <Carousel opts={{ align: "start" }} className="mx-2 md:mx-12">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem
                  key={project.name}
                  className="sm:basis-1/2 lg:basis-1/2"
                >
                  <Card className="h-full border border-border">
                    <CardHeader className="flex-row items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">
                          {project.name}
                        </CardTitle>
                        <p className="mt-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                          {project.category}
                        </p>
                      </div>
                      <span className="font-heading text-3xl text-muted-foreground/30">
                        0{index + 1}
                      </span>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="rounded-full border border-border px-3 py-1 text-[0.6rem]"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold tracking-widest uppercase underline-offset-4 hover:underline"
                        >
                          Visit
                          <ArrowUpRight className="size-3.5" />
                        </a>
                      )}
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </Reveal>
      </div>
    </section>
  )
}
