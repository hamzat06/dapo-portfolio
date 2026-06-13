import Link from "next/link"

import { portfolioLinks, profile } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          {portfolioLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>

        <div className="mt-6 flex flex-col gap-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.alias} ({profile.name})
          </p>
          <p>{profile.languages.join(" · ")}</p>
          <Link
            href="#top"
            className="transition-colors hover:text-foreground"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  )
}
