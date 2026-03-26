import { Link } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const { t } = useTranslation("landing")
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1e3a4a] bg-abyss py-10 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="font-display text-lg font-bold text-witcher tracking-widest">
            PV
          </span>
          <p className="text-xs text-fog mt-1">{t("footer.tagline")}</p>
        </div>

        <nav className="flex items-center gap-4">
          <Link
            to="/blog"
            className="text-xs text-fog hover:text-parchment transition-colors"
          >
            {t("footer.chronicles")}
          </Link>
          <span className="text-[#1e3a4a]">·</span>
          <Link
            to="/projects"
            className="text-xs text-fog hover:text-parchment transition-colors"
          >
            {t("footer.contracts")}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/pvrosendo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-fog hover:text-witcher transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/paulo-vitor-rosendo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-fog hover:text-witcher transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:paulovitor.rsd@gmail.com"
            aria-label="Email"
            className="text-fog hover:text-witcher transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-[#1e3a4a] mt-8">
        © {currentYear} Paulo Vitor · {t("footer.copyright")}
      </p>
    </footer>
  )
}
