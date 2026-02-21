import { Link } from "@tanstack/react-router"

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-abyss">
      {/* decorated 404 code*/}
      <p
        className="font-display font-black text-[12rem] leading-none select-none pointer-events-none mb-0"
        style={{
          color: "transparent",
          WebkitTextStroke: "1px #1e3a4a",
        }}
        aria-hidden="true"
      >
        404
      </p>

      {/* Themed line */}
      <p className="font-mono text-xs text-biolum tracking-widest uppercase mb-3 -mt-4">
        <span className="text-witcher">&gt;</span> rota não encontrada
      </p>

      <h1 className="font-display text-3xl md:text-4xl font-bold text-parchment mb-4">
        Este caminho não existe
      </h1>

      <p className="text-fog max-w-md leading-relaxed mb-10">
        Parece que você se aventurou em território desconhecido. Nem os mapas
        mais antigos registram essa rota.
      </p>

      <Link
        to="/"
        className="px-8 py-3 bg-witcher text-abyss font-semibold rounded-sm hover:bg-parchment transition-colors font-display tracking-wider text-sm uppercase"
      >
        Voltar ao Início
      </Link>
    </div>
  )
}
