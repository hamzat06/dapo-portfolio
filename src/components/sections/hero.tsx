"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { ArrowDown, ArrowUpRight } from "lucide-react"

import { Marquee } from "@/components/marquee"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/data"

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-[100vh] flex-col overflow-hidden border-b border-border"
    >
      <div className="relative mx-auto flex max-w-6xl flex-1 flex-col items-start justify-center px-6 py-32 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase"
        >
          {profile.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-heading text-5xl leading-[1.05] font-semibold sm:text-7xl md:text-8xl"
        >
          {profile.alias}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 text-sm font-semibold tracking-widest text-muted-foreground uppercase"
        >
          {profile.name}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex h-10 items-center overflow-hidden text-xl font-medium text-muted-foreground sm:text-2xl"
        >
          <span className="mr-3">Multidisciplinary</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={profile.roles[roleIndex]}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-semibold text-foreground"
            >
              {profile.roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground italic sm:text-lg"
        >
          &ldquo;{profile.quote}&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button asChild size="lg">
            <Link href="#work">
              View My Work
              <ArrowUpRight />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative border-t border-border py-6"
      >
        <Marquee items={[...profile.roles]} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="relative mx-auto my-6 hidden text-muted-foreground sm:block"
      >
        <ArrowDown className="size-5" />
      </motion.div>
    </section>
  )
}
