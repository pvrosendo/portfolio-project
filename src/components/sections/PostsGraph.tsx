import { eachDayOfInterval, formatISO, parseISO } from "date-fns";
import { useTranslation } from "react-i18next";
import {
	ContributionGraph,
	ContributionGraphBlock,
	ContributionGraphCalendar,
	ContributionGraphFooter,
	ContributionGraphLegend,
	ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import { usePosts } from "@/hooks/use-posts";
import { cn } from "@/lib/utils";

/** Build the activity array from the list of post dates.
 *  Every published day gets count=1 / level=4 (max intensity).
 *  Every other day in the range gets count=0 / level=0.
 */
function buildActivityData(publishedDates: string[]) {
	if (publishedDates.length === 0) return [];

	const sorted = [...publishedDates].sort();
	const start = parseISO(sorted[0] as string);
	const end = new Date();

	const publishedSet = new Set(
		publishedDates.map((d) =>
			formatISO(parseISO(d), { representation: "date" }),
		),
	);

	return eachDayOfInterval({ start, end }).map((day) => {
		const date = formatISO(day, { representation: "date" });
		const isPublished = publishedSet.has(date);
		return {
			date,
			count: isPublished ? 1 : 0,
			level: isPublished ? 4 : 0,
		};
	});
}

export function PostsGraph() {
	const { t } = useTranslation("landing");
	const { data: posts } = usePosts();

	const activity = buildActivityData((posts ?? []).map((p) => p.publishedAt));

	if (activity.length === 0) return null;

	return (
		<section className="py-24 px-6 max-w-5xl mx-auto">
			<div className="mb-10">
				<p className="font-mono text-xs text-biolum tracking-widest uppercase mb-3">
					<span className="text-witcher">{"//"}</span>{" "}
					{t("postsGraph.pretitle")}
				</p>
				<h2 className="font-display text-3xl font-bold text-parchment">
					{t("postsGraph.title")}
				</h2>
			</div>

			<div className="border border-[#1e3a4a] rounded-sm p-6 bg-deep overflow-x-auto">
				<ContributionGraph
					data={activity}
					blockSize={14}
					blockMargin={3}
					blockRadius={2}
					labels={{
						months: [
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
						],
						totalCount: t("postsGraph.totalCount"),
					}}
				>
					<ContributionGraphCalendar className="text-fog text-[11px]">
						{({ activity: act, dayIndex, weekIndex }) => (
							<ContributionGraphBlock
								activity={act}
								dayIndex={dayIndex}
								weekIndex={weekIndex}
								className={cn(
									'data-[level="0"]:fill-[#0a0d14]',
									'data-[level="1"]:fill-[#1e3a4a]',
									'data-[level="2"]:fill-[#2a5a6a]',
									'data-[level="3"]:fill-[#3aaa8c]',
									'data-[level="4"]:fill-[#4dd9ac]',
								)}
							/>
						)}
					</ContributionGraphCalendar>

					<ContributionGraphFooter className="mt-2 text-fog text-xs font-mono">
						<ContributionGraphTotalCount className="text-fog text-xs font-mono" />
						<ContributionGraphLegend>
							{({ level }) => (
								<svg height={14} width={14}>
									<title>{`Nível ${level}`}</title>
									<rect
										className={cn(
											'data-[level="0"]:fill-[#0a0d14]',
											'data-[level="1"]:fill-[#1e3a4a]',
											'data-[level="2"]:fill-[#2a5a6a]',
											'data-[level="3"]:fill-[#3aaa8c]',
											'data-[level="4"]:fill-[#4dd9ac]',
										)}
										data-level={level}
										height={14}
										rx={2}
										ry={2}
										width={14}
									/>
								</svg>
							)}
						</ContributionGraphLegend>
					</ContributionGraphFooter>
				</ContributionGraph>
			</div>
		</section>
	);
}
