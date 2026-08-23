import { Briefcase, Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export function AboutPreview() {
	const { t } = useTranslation("landing");

	return (
		// biome-ignore lint/correctness/useUniqueElementIds: Anchor point for scroll navigation
		<section id="sobre" className="py-24 px-6 max-w-5xl mx-auto">
			<div className="grid md:grid-cols-2 gap-12 items-center">
				{/* Text */}
				<div>
					<p className="font-mono text-xs text-biolum tracking-widest uppercase mb-3">
						<span className="text-witcher">{"//"}</span> {t("about.pretitle")}
					</p>
					<h2 className="font-display text-3xl md:text-4xl font-bold text-parchment mb-5">
						{t("about.title")}
					</h2>
					<p className="text-fog leading-relaxed mb-4">{t("about.bio1")}</p>
					<p className="text-fog leading-relaxed">{t("about.bio2")}</p>
				</div>

				{/* Author card */}
				<div className="border border-[#1e3a4a] rounded-sm p-6 bg-deep relative overflow-hidden">
					{/* Corner decorative detail */}
					<div
						className="absolute top-0 right-0 w-16 h-16 opacity-20 pointer-events-none"
						style={{
							background:
								"linear-gradient(225deg, #c9a84c 0%, transparent 60%)",
						}}
						aria-hidden="true"
					/>

					<div className="flex items-center gap-4 mb-6">
						<img
							src="https://avatars.githubusercontent.com/u/111819809?v=4"
							alt="Foto de Paulo Vitor"
							width={96}
							height={96}
							className="rounded-full border-2 border-[#1e3a4a] hover:border-witcher transition-colors shrink-0"
						/>
						<div>
							<p className="text-parchment font-semibold text-base">
								Paulo Vitor Rosendo
							</p>
							<p className="text-biolum text-xs font-mono">{t("about.role")}</p>
						</div>
					</div>

					<div className="flex items-center gap-4 pt-4 border-t border-[#1e3a4a]">
						<a
							href="https://github.com/pvrosendo"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							className="text-fog hover:text-witcher transition-colors"
						>
							<Github size={16} aria-hidden="true" />
						</a>
						<a
							href="https://linkedin.com/in/paulo-vitor-rosendo/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="text-fog hover:text-witcher transition-colors"
						>
							<Linkedin size={16} aria-hidden="true" />
						</a>
						<a
							href="mailto:paulovitor.rsd@gmail.com"
							aria-label="Email"
							className="text-fog hover:text-witcher transition-colors"
						>
							<Mail size={16} aria-hidden="true" />
						</a>
						<span className="text-[#1e3a4a] select-none" aria-hidden="true">
							·
						</span>
						<a
							href="https://pvrosendo.is-a.dev/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Portfólio"
							className="flex items-center gap-1.5 text-fog hover:text-witcher transition-colors"
						>
							<Briefcase size={16} aria-hidden="true" />
							<span className="text-xs font-mono">Portfólio</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
