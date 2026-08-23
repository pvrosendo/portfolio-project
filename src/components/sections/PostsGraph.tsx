import {
	addWeeks,
	differenceInCalendarDays,
	eachDayOfInterval,
	formatISO,
	getYear,
	parseISO,
	subWeeks,
} from "date-fns";
import { Frown, Laugh } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
	ContributionGraph,
	ContributionGraphBlock,
	ContributionGraphCalendar,
} from "@/components/ui/molecules/contribution-graph";
import { usePosts } from "@/hooks/use-posts";
import { cn } from "@/lib/utils";

/** Gap larger than this (days) between consecutive posts → new cluster / window */
const GAP_THRESHOLD_DAYS = 60;
/** Padding weeks before/after each cluster */
const BUFFER_WEEKS = 2;

function buildClusters(sortedDates: Date[]): Date[][] {
	if (sortedDates.length === 0) return [];
	const clusters: Date[][] = [];
	let current: Date[] = [sortedDates[0] as Date];

	for (let i = 1; i < sortedDates.length; i++) {
		const gap = differenceInCalendarDays(
			sortedDates[i] as Date,
			current[current.length - 1] as Date,
		);
		if (gap <= GAP_THRESHOLD_DAYS) {
			current.push(sortedDates[i] as Date);
		} else {
			clusters.push([...current]);
			current = [sortedDates[i] as Date];
		}
	}
	clusters.push([...current]);
	return clusters;
}

function buildWindowActivity(
	start: Date,
	end: Date,
	publishedSet: Set<string>,
) {
	return eachDayOfInterval({ start, end }).map((day) => {
		const date = formatISO(day, { representation: "date" });
		const hit = publishedSet.has(date);
		return { date, count: hit ? 1 : 0, level: hit ? 4 : 0 };
	});
}

const BLOCK_CN = cn(
	'data-[level="0"]:fill-[#0a0d14]',
	'data-[level="1"]:fill-[#1e3a4a]',
	'data-[level="2"]:fill-[#2a5a6a]',
	'data-[level="3"]:fill-[#3aaa8c]',
	'data-[level="4"]:fill-[#4dd9ac]',
);

const PT_MONTHS = [
	"Jan",
	"Fev",
	"Mar",
	"Abr",
	"Mai",
	"Jun",
	"Jul",
	"Ago",
	"Set",
	"Out",
	"Nov",
	"Dez",
];
const EN_MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export function PostsGraph() {
	const { t, i18n } = useTranslation("landing");
	const { data: posts } = usePosts();

	const monthLabels = i18n.language.startsWith("pt") ? PT_MONTHS : EN_MONTHS;

	const { windows, totalCount, isHappyPace } = useMemo(() => {
		if (!posts || posts.length === 0)
			return { windows: [], totalCount: 0, isHappyPace: false };

		const today = new Date();

		const publishedSet = new Set(
			posts.map((p) =>
				formatISO(parseISO(p.publishedAt), { representation: "date" }),
			),
		);

		const sortedDates = [...posts]
			.map((p) => parseISO(p.publishedAt))
			.sort((a, b) => a.getTime() - b.getTime());

		const clusters = buildClusters(sortedDates);

		const windows = clusters.map((cluster, i) => {
			const earliest = cluster[0] as Date;
			const latest = cluster[cluster.length - 1] as Date;
			const isLast = i === clusters.length - 1;

			const start = subWeeks(earliest, BUFFER_WEEKS);
			const end = isLast ? today : addWeeks(latest, BUFFER_WEEKS);

			const sy = getYear(start);
			const ey = getYear(end);
			const label = sy === ey ? String(sy) : `${sy}–${ey}`;

			return {
				data: buildWindowActivity(start, end, publishedSet),
				label,
			};
		});

		const firstDate = sortedDates[0] as Date;
		const monthsElapsed = Math.max(
			1,
			differenceInCalendarDays(today, firstDate) / 30,
		);
		const isHappyPace = posts.length / monthsElapsed >= 1;

		return { windows, totalCount: posts.length, isHappyPace };
	}, [posts]);

	if (windows.length === 0) return null;

	const MoodIcon = isHappyPace ? Laugh : Frown;

	return (
		<section className="py-24 px-6 max-w-5xl mx-auto">
			{/* Header */}
			<div className="flex items-end justify-between mb-10">
				<div>
					<p className="font-mono text-xs text-biolum tracking-widest uppercase mb-3">
						<span className="text-witcher">{"//"}</span>{" "}
						{t("postsGraph.pretitle")}
					</p>
					<h2 className="font-display text-3xl font-bold text-parchment mb-1">
						{t("postsGraph.title")}
					</h2>
					<p className="text-fog text-xs font-mono italic">
						{t("postsGraph.subtitle")}
					</p>
				</div>
			</div>

			{/* Graph card */}
			<div className="border border-[#1e3a4a] rounded-sm p-6 bg-deep">
				{/* Horizontal side-by-side windows — overflow scrolls only when needed */}
				<div className="overflow-x-auto">
					<div className="flex items-start w-max gap-0">
						{windows.map((win, i) => (
							<div
								key={`${win.label}-${i}`}
								className="flex items-start"
							>
								{/* Vertical separator between windows */}
								{i > 0 && (
									<div className="flex flex-col items-center self-stretch mx-4 gap-1 pt-5">
										<div className="w-px flex-1 bg-[#1e3a4a]/60" />
									</div>
								)}
								<div className="shrink-0">
									{/* Year label — only when there are multiple windows */}
									{windows.length > 1 && (
										<p className="font-mono text-[10px] text-fog mb-2 tracking-widest">
											{win.label}
										</p>
									)}
									<ContributionGraph
										data={win.data}
										blockSize={14}
										blockMargin={3}
										blockRadius={2}
										labels={{ months: monthLabels }}
									>
										<ContributionGraphCalendar className="text-fog text-[11px]">
											{({
												activity: act,
												dayIndex,
												weekIndex,
											}) => (
												<ContributionGraphBlock
													activity={act}
													dayIndex={dayIndex}
													weekIndex={weekIndex}
													className={BLOCK_CN}
												/>
											)}
										</ContributionGraphCalendar>
									</ContributionGraph>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Footer */}
				<div className="flex items-center justify-between pt-4 border-t border-[#1e3a4a] mt-6">
					<span className="text-fog text-xs font-mono">
						{t("postsGraph.total", { count: totalCount })}
					</span>
					<div className="flex items-center gap-2">
						<span className="text-fog text-xs font-mono">
							{t("postsGraph.status")}
						</span>
						<MoodIcon
							size={16}
							className={isHappyPace ? "text-biolum" : "text-fog"}
							aria-hidden="true"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
