import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/20 py-8">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Alex Johnson</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Passionate frontend developer crafting beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="mb-3 text-xl font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-3 text-xl font-semibold">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:alex@example.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                alex@example.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                San Francisco, CA
              </div>
            </div>
          </div>

          {/* Social Links Column */}
          <div>
            <h3 className="mb-3 text-xl font-semibold">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2025 Alex Johnson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

