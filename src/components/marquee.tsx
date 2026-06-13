import { Fragment } from "react"
import { Asterisk } from "lucide-react"

import { cn } from "@/lib/utils"

export function Marquee({
  items,
  className,
}: {
  items: string[]
  className?: string
}) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="flex w-max animate-marquee items-center motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center"
            aria-hidden={copy === 1}
          >
            {items.map((item, i) => (
              <Fragment key={i}>
                <span className="font-heading px-6 text-2xl font-medium tracking-wide whitespace-nowrap uppercase sm:text-3xl md:text-4xl">
                  {item}
                </span>
                <Asterisk className="text-muted-foreground/40 size-6 shrink-0 sm:size-7 md:size-8" />
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
