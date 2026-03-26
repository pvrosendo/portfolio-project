import { useTranslation } from "react-i18next"

const skills = [
  { key: "languages", value: "Go · Java · TypeScript · C++" },
  { key: "frontend", value: "React · Angular · Tailwind" },
  { key: "backend", value: "Echo · Spring · SQL · NoSQL · Docker" },
  { key: "embedded", value: "ESP32 · Arduino · Jetson Nano" },
  { key: "extras", value: "The Witcher 3 · Tubarões · Música" },
]

export function AboutPreview() {
  const { t } = useTranslation("landing")

  return (
    <section id="sobre" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="font-mono text-xs text-biolum tracking-widest uppercase mb-3">
            <span className="text-witcher">//</span> {t("about.pretitle")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-parchment mb-5">
            {t("about.title")}
          </h2>
          <p className="text-fog leading-relaxed mb-4">{t("about.bio1")}</p>
          <p className="text-fog leading-relaxed">{t("about.bio2")}</p>
        </div>

        {/* Character sheet */}
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

          <ul className="space-y-3">
            {skills.map((skill) => (
              <li key={skill.key} className="flex flex-col gap-0.5">
                <span className="text-witcher text-xs font-mono uppercase tracking-wider">
                  {t(`about.skills.${skill.key}`)}
                </span>
                <span className="text-fog text-sm">{skill.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
