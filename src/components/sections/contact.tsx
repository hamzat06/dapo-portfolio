import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"

import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/data"

export function Contact() {
  return (
    <section id="contact" className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
            Contact
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl md:text-5xl">
            Let&apos;s create something NotTheRegular.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Have a brand, project or video that needs a creative push?
            I&apos;m currently open to freelance and collaborative projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href={`mailto:${profile.email}`}>
                Send a message
                <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${profile.phoneIntl}`}>Call me</a>
            </Button>
          </div>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-3">
          <RevealItem className="border-t border-border pt-6">
            <Mail className="size-5 text-muted-foreground" />
            <p className="mt-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 block text-sm font-medium break-all hover:underline"
            >
              {profile.email}
            </a>
          </RevealItem>
          <RevealItem className="border-t border-border pt-6">
            <Phone className="size-5 text-muted-foreground" />
            <p className="mt-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Phone
            </p>
            <a
              href={`tel:${profile.phoneIntl}`}
              className="mt-1 block text-sm font-medium hover:underline"
            >
              {profile.phone}
            </a>
          </RevealItem>
          <RevealItem className="border-t border-border pt-6">
            <MapPin className="size-5 text-muted-foreground" />
            <p className="mt-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Location
            </p>
            <p className="mt-1 text-sm font-medium">{profile.location}</p>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}
