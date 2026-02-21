const skills = [
  { label: "Linguagens", value: "Go · Java · TypeScript · C++" },
  { label: "Front-end", value: "React · Angular · Tailwind" },
  { label: "Back-end", value: "Echo · Spring · SQL · NoSQL · Docker" },
  { label: "Embarcados", value: "ESP32 · Arduino · Jetson Nano" },
  { label: "Atributos extras", value: "The Witcher 3 · Tubarões · Música" },
]

export function AboutPreview() {
  return (
    <section id="sobre" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="font-mono text-xs text-biolum tracking-widest uppercase mb-3">
            <span className="text-witcher">//</span> sobre o explorador
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-parchment mb-5">
            Quem sou eu?
          </h2>
          <p className="text-fog leading-relaxed mb-4">
            Meu nome é Paulo Vitor, mas pode me chamar de PV. Desenvolvedor apaixonado por
            engenharia de software. Busco entender tudo que consigo nesse vasto mundo da tecnologia.
          </p>
          <p className="text-fog leading-relaxed">
            Nesse espaço compartilho aquilo que aprendo, experimento e
            construo. Desde projetos pessoais, conteúdos técnicos até recomendações e Hobbies.
          </p>
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
              <p className="text-biolum text-xs font-mono">
                Desenvolvedor de Software
              </p>
            </div>
          </div>

          <ul className="space-y-3">
            {skills.map((skill) => (
              <li key={skill.label} className="flex flex-col gap-0.5">
                <span className="text-witcher text-xs font-mono uppercase tracking-wider">
                  {skill.label}
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
