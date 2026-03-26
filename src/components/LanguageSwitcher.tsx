import { useLocation, useRouter } from "@tanstack/react-router";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { SupportedLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const languages: { code: SupportedLanguage; label: string; flag: string }[] = [
	{ code: "pt-BR", label: "Português", flag: "🇧🇷" },
	{ code: "en", label: "English", flag: "🇺🇸" },
];

export function LanguageSwitcher() {
	const { i18n } = useTranslation();
	const location = useLocation();
	const router = useRouter();
	const currentLang = i18n.language as SupportedLanguage;

	const isPostPage = location.pathname.startsWith("/blog/") && location.pathname !== "/blog";

	function handleChange(lang: SupportedLanguage) {
		i18n.changeLanguage(lang);

		if (isPostPage) {
			router.invalidate();
		}
	}

	return (
		<div className="relative group flex items-center">
			<button
				type="button"
				className="flex items-center gap-1.5 text-sm text-fog hover:text-parchment transition-colors"
				aria-label="Change language"
			>
				<Globe size={16} />
				<span className="hidden sm:inline font-mono uppercase text-sm text-fog hover:text-parchment transition-colors font-medium">
					{currentLang === "pt-BR" ? "PT" : "EN"}
				</span>
			</button>

			<div className="absolute right-0 top-full mt-2 py-1 bg-deep border border-[#1e3a4a] rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-30 z-50">
				{languages.map((lang) => (
					<button
						key={lang.code}
						type="button"
						onClick={() => handleChange(lang.code)}
						className={cn(
							"w-full px-3 py-1.5 text-left text-xs font-mono flex items-center gap-2 transition-colors",
							currentLang === lang.code
								? "text-witcher bg-[#1e3a4a]/40"
								: "text-fog hover:text-parchment hover:bg-[#1e3a4a]/20",
						)}
					>
						<span>{lang.flag}</span>
						<span>{lang.label}</span>
					</button>
				))}
			</div>
		</div>
	);
}
