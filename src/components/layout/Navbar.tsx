import { Link, useLocation } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Blog", href: "/blog", scrollId: "blog" },
  { label: "Projetos", href: "/projects", scrollId: "projetos" },
  { label: "Sobre", href: "/#sobre", scrollId: "sobre" },
]

export function Navbar() {
  const location = useLocation()
  const isLanding = location.pathname === "/"
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-abyss/90 backdrop-blur-md border-b border-[#1e3a4a]"
          : "bg-transparent",
      )}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {isLanding ? (
          <>
            <button
              type="button"
              onClick={() => scrollTo("hero")}
              className="font-display text-xl font-bold text-witcher hover:text-parchment transition-colors tracking-widest cursor-pointer"
            >
              PV
            </button>
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.scrollId ? (
                    <button
                      type="button"
                      onClick={() => scrollTo(link.scrollId)}
                      className="text-sm text-fog hover:text-parchment transition-colors font-medium tracking-wide cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-fog hover:text-parchment transition-colors font-medium tracking-wide cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-sm text-fog hover:text-parchment transition-colors cursor-pointer"
            >
              <span>←</span>
              <span>Voltar</span>
            </button>
            <Link
              to="/"
              className="font-display text-xl font-bold text-witcher hover:text-parchment transition-colors tracking-widest absolute left-1/2 -translate-x-1/2"
            >
              PV
            </Link>
            <div className="w-16" />
          </>
        )}
      </nav>
    </header>
  )
}
