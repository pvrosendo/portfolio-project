import { Link } from "@tanstack/react-router"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1e3a4a] bg-abyss py-10 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="font-display text-lg font-bold text-witcher tracking-widest">
            PV
          </span>
          <p className="text-xs text-fog mt-1">
            Compartilhando tudo aquilo que foi compartilhado comigo.
          </p>
        </div>

        <nav className="flex items-center gap-4">
          <Link
            to="/blog"
            className="text-xs text-fog hover:text-parchment transition-colors"
          >
            As Crônicas
          </Link>
          <span className="text-[#1e3a4a]">·</span>
          <Link
            to="/projects"
            className="text-xs text-fog hover:text-parchment transition-colors"
          >
            Os Contratos
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/pvgrs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-fog hover:text-witcher transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/pvgrs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-fog hover:text-witcher transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:contato@pvgrs.dev"
            aria-label="Email"
            className="text-fog hover:text-witcher transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-[#1e3a4a] mt-8">
        © {currentYear} Paulo Vitor · Forjado nas profundezas do código
      </p>
    </footer>
  )
}
