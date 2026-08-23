import { useLocation, useRouter } from "@tanstack/react-router";
import { Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
	const [open, setOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const isPostPage =
		location.pathname.startsWith("/blog/") && location.pathname !== "/blog";

	function handleChange(lang: SupportedLanguage) {
		i18n.changeLanguage(lang);
		setOpen(false);

		if (isPostPage) {
			router.invalidate();
		}
	}

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (
				containerRef.current &&
				!containerRef.current.contains(e.target as Node)
			) {
				setOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div ref={containerRef} className="relative flex items-center">
			<button
				type="button"
				onClick={() => setOpen((prev) => !prev)}
				className="flex items-center gap-1.5 text-sm text-fog hover:text-parchment transition-colors"
				aria-label="Change language"
				aria-expanded={open}
				aria-haspopup="listbox"
			>
				<Globe size={16} />
			</button>

			{open && (
				<div
					role="listbox"
					className="absolute right-0 top-full mt-2 py-1 bg-deep border border-[#1e3a4a] rounded-sm min-w-30 z-50 shadow-lg"
				>
					{languages.map((lang) => (
						<button
							key={lang.code}
							type="button"
							role="option"
							aria-selected={currentLang === lang.code}
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
			)}
		</div>
	);
}
