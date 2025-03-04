"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "./navbar"

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative flex min-h-screen flex-col items-center overflow-hidden px-4 py-20 md:px-8">
      <Navbar />

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container max-w-4xl text-center mt-20"
      >
        <motion.h1
          className="mb-6 text-4xl font-bold tracking-tight md:text-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-primary">Hello, I'm</span> <br />
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Alex Johnson
          </span>
        </motion.h1>

        <motion.p
          className="mb-8 text-xl text-muted-foreground md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A passionate frontend developer crafting beautiful and functional web experiences
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
          <Button size="lg" className="rounded-full" onClick={handleScroll}>
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <ArrowDown className="h-6 w-6 text-primary" />
      </motion.div>

      <div ref={scrollRef} />
    </section>
  )
}

