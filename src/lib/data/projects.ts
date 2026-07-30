import type { Project, SupportedLocale } from "@/lib/types"

const projectsPtBR: Project[] = [
	{
		id: "1",
		title: "Kanban Flow",
		description:
			"Plugin de kanban para Obsidian com o intuito de melhorar a experiência e uso de quadros kanban.",
		tags: ["TypeScript", "Obsidian", "Kanban"],
		repoUrl: "https://github.com/pvrosendo/kanban-flow",
		featured: true,
		status: "active",
	},
	{
		id: "2",
		title: "Max Theme",
		description:
			"Um tema para Obsidian inspirado na interface do Claude AI chat.",
		tags: ["CSS", "Obsidian", "Theme"],
		repoUrl: "https://github.com/pvrosendo/max-theme",
		featured: true,
		status: "active",
	},
	{
		id: "3",
		title: "Learn Sharks",
		description:
			"Site interativo para descobrir mais sobre os tubarões.",
		tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "GSAP", "Canvas 2D"],
		demoUrl: "https://learn-sharks.vercel.app/",
		featured: true,
		status: "active",
	},
	{
		id: "4",
		title: "Portfolio & Blog v2",
		description:
			"Segunda versão do site pessoal. Agora reescrita em React com TanStack.",
		tags: ["React", "TanStack", "Tailwind CSS", "TypeScript"],
		repoUrl: "https://github.com/pvrosendo/portfolio-project",
		demoUrl: "https://pvrosendo.is-a.dev/",
		featured: true,
		status: "active",
	},
	{
		id: "5",
		title: "Portfolio & Blog v1",
		description:
			"Site pessoal com blog e projetos. Primeira versão construída em Angular.",
		tags: ["Angular", "TypeScript", "Bootstrap"],
		repoUrl: "https://github.com/pvrosendo/blog-and-portfolio",
		featured: true,
		status: "archived",
	},
	{
		id: "6",
		title: "Materials Visor",
		description:
			"Projeto de monitoração do envelhecimento de materiais através de quadros de artísticos.",
		tags: ["C++", "ESP32", "Arduino", "Arduino Framework"],
		repoUrl: "https://github.com/pvrosendo/monitoracao-de-materiais",
		featured: true,
		status: "archived",
	},
	{
		id: "7",
		title: "Wokwi ESP32 Projects",
		description:
			"Simulações de projetos ESP32 no Wokwi.",
		tags: ["Wokwi", "ESP32", "Arduino"],
		repoUrl: "https://github.com/pvrosendo/wokwi-projects",
		featured: true,
		status: "archived",
	},
]

const projectsEn: Project[] = [
		{
		id: "1",
		title: "Kanban Flow",
		description:
			"Obsidian plugin for improvement experience and usage of Kanban.",
		tags: ["TypeScript", "Obsidian", "Kanban"],
		repoUrl: "https://github.com/pvrosendo/kanban-flow",
		featured: true,
		status: "active",
	},
	{
		id: "2",
		title: "Max Theme",
		description:
			"A obsidian theme inspired by Claude AI chat interface.",
		tags: ["CSS", "Obsidian", "Theme"],
		repoUrl: "https://github.com/pvrosendo/max-theme",
		featured: true,
		status: "active",
	},
	{
		id: "3",
		title: "Learn Sharks",
		description:
			"Interactive website to discover more about sharks.",
		tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "GSAP", "Canvas 2D"],
		demoUrl: "https://learn-sharks.vercel.app/",
		featured: true,
		status: "active",
	},
	{
		id: "4",
		title: "Portfolio & Blog v2",
		description:
			"Second version of personal website. Now rewritten in React with TanStack.",
		tags: ["React", "TanStack", "Tailwind CSS", "TypeScript"],
		repoUrl: "https://github.com/pvrosendo/portfolio-project",
		demoUrl: "https://pvrosendo.is-a.dev/",
		featured: true,
		status: "active",
	},
	{
		id: "5",
		title: "Portfolio & Blog v1",
		description:
			"Personal website with blog and projects. First version built in Angular.",
		tags: ["Angular", "TypeScript", "Bootstrap"],
		repoUrl: "https://github.com/pvrosendo/blog-and-portfolio",
		featured: true,
		status: "archived",
	},
	{
		id: "6",
		title: "Materials Visor",
		description:
			"Material aging monitoring project through artistic paintings.",
		tags: ["C++", "ESP32", "Arduino", "Arduino Framework"],
		repoUrl: "https://github.com/pvrosendo/monitoracao-de-materiais",
		featured: true,
		status: "archived",
	},
	{
		id: "7",
		title: "Wokwi ESP32 Projects",
		description:
			"ESP32 project simulations on Wokwi.",
		tags: ["Wokwi", "ESP32", "Arduino"],
		repoUrl: "https://github.com/pvrosendo/wokwi-projects",
		featured: true,
		status: "archived",
	},
]

export const projects: Record<SupportedLocale, Project[]> = {
	"pt-BR": projectsPtBR,
	en: projectsEn,
}

export function getProjectsByLocale(locale: SupportedLocale): Project[] {
	return projects[locale] ?? projects["pt-BR"]
}

export function getFeaturedProjects(locale: SupportedLocale): Project[] {
	return getProjectsByLocale(locale).filter((p) => p.featured)
}

