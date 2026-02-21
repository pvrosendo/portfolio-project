const skills = [
  { label: "Linguagens", value: "Go · Java · TypeScript · Python · SQL" },
  { label: "Back-end", value: "REST · gRPC · Mensageria · Clean Arch" },
  { label: "Infraestrutura", value: "Docker · PostgreSQL · Redis · Linux" },
  { label: "Atributos extras", value: "The Witcher 3 · Tubarões · Café" },
]

export function AboutPreview() {
  return (
    <section id="sobre" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="font-mono text-xs text-[#4dd9ac] tracking-widest uppercase mb-3">
            <span className="text-[#c9a84c]">//</span> sobre o explorador
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#e8dcc8] mb-5">
            Quem sou eu?
          </h2>
          <p className="text-[#8899aa] leading-relaxed mb-4">
            Meu nome é Paulo Vitor. Desenvolvedor back-end apaixonado por
            engenharia de software — aquela parte que vai além do "funcionar" e
            busca o "por que funciona".
          </p>
          <p className="text-[#8899aa] leading-relaxed">
            Nesse espaço compartilho tudo aquilo que aprendo, experimento e
            construo. Desde arquitetura de sistemas até a filosofia por trás de
            uma boa abstração.
          </p>
        </div>

        {/* Character sheet */}
        <div className="border border-[#1e3a4a] rounded-sm p-6 bg-[#111827] relative overflow-hidden">
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
            <div className="w-10 h-10 rounded-full bg-[#1e3a4a] flex items-center justify-center font-display font-bold text-[#c9a84c] text-sm">
              PV
            </div>
            <div>
              <p className="text-[#e8dcc8] font-semibold text-sm">
                Paulo Vitor
              </p>
              <p className="text-[#4dd9ac] text-xs font-mono">
                Desenvolvedor Back-end
              </p>
            </div>
          </div>

          <ul className="space-y-3">
            {skills.map((skill) => (
              <li key={skill.label} className="flex flex-col gap-0.5">
                <span className="text-[#c9a84c] text-xs font-mono uppercase tracking-wider">
                  {skill.label}
                </span>
                <span className="text-[#8899aa] text-sm">{skill.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
