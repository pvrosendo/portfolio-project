import { Link } from "@tanstack/react-router"

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#0a0d14]">
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
      <p className="font-mono text-xs text-[#4dd9ac] tracking-widest uppercase mb-3 -mt-4">
        <span className="text-[#c9a84c]">&gt;</span> rota não encontrada
      </p>

      <h1 className="font-display text-3xl md:text-4xl font-bold text-[#e8dcc8] mb-4">
        Este caminho não existe
      </h1>

      <p className="text-[#8899aa] max-w-md leading-relaxed mb-10">
        Parece que você se aventurou em território desconhecido. Nem os mapas
        mais antigos registram essa rota.
      </p>

      <Link
        to="/"
        className="px-8 py-3 bg-[#c9a84c] text-[#0a0d14] font-semibold rounded-sm hover:bg-[#e8dcc8] transition-colors font-display tracking-wider text-sm uppercase"
      >
        Voltar ao Início
      </Link>
    </div>
  )
}
