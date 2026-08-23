import { Briefcase, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-[#1e3a4a] bg-abyss py-10 mt-20">
			<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
				<div className="text-center md:text-left">
					<span className="font-display text-lg font-bold text-witcher tracking-widest">
						O Códex
					</span>
				</div>
				<p className="text-center text-xs text-[#1e3a4a]">
					© {currentYear} Paulo Vitor Rosendo.
				</p>
				<address className="not-italic flex items-center gap-4">
					<a
						href="https://github.com/pvrosendo"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Perfil no GitHub (abre em nova aba)"
						className="text-fog hover:text-witcher transition-colors"
					>
						<Github size={18} aria-hidden="true" />
					</a>
					<a
						href="https://linkedin.com/in/paulo-vitor-rosendo/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Perfil no LinkedIn (abre em nova aba)"
						className="text-fog hover:text-witcher transition-colors"
					>
						<Linkedin size={18} aria-hidden="true" />
					</a>
					<a
						href="mailto:paulovitor.rsd@gmail.com"
						aria-label="Enviar e-mail para paulovitor.rsd@gmail.com"
						className="text-fog hover:text-witcher transition-colors"
					>
						<Mail size={18} aria-hidden="true" />
					</a>
					<a
						href="https://pvrosendo.is-a.dev/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Portfólio (abre em nova aba)"
						className="text-fog hover:text-witcher transition-colors"
					>
						<Briefcase size={18} aria-hidden="true" />
					</a>
				</address>
			</div>
		</footer>
	);
}
