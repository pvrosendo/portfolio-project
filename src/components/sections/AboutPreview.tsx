import { Github, Linkedin, Mail } from "lucide-react";
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

					<div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#1e3a4a]">
						<div className="w-10 h-10 rounded-full bg-[#1e3a4a] flex items-center justify-center font-display font-bold text-witcher text-sm">
							PV
						</div>
						<div>
							<p className="text-parchment font-semibold text-sm">
								Paulo Vitor
							</p>
							<p className="text-biolum text-xs font-mono">{t("about.role")}</p>
						</div>
					</div>

					<p className="text-fog text-sm leading-relaxed mb-5">
						{t("about.authorBio")}
					</p>

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
					</div>
				</div>
			</div>
		</section>
	);
}
