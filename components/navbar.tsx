"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-neutral-100/80 backdrop-blur-md shadow-sm" : "bg-neutral-100/50"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="hidden md:flex md:gap-10">
          <Link href="#" className="text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="#skills" className="text-foreground/80 hover:text-foreground transition-colors">
            Skills
          </Link>
          <Link href="#" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-foreground/80 hover:text-foreground transition-colors">
            Portfolio
          </Link>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col p-4">
              <Link href="#" className="py-2 text-foreground/80 hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="#skills" className="py-2 text-foreground/80 hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link href="#" className="py-2 text-foreground/80 hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#projects" className="py-2 text-foreground/80 hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link href="#contact">
                <Button className="w-full mt-4">Contact Me</Button>
              </Link>
            </nav>
          </div>
        )}

        <div className="hidden md:block">
          <Link href="#contact">
            <Button variant="outline" className="rounded-md border-foreground/20">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

