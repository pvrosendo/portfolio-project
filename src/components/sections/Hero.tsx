import { Link } from "@tanstack/react-router"
import { useEffect, useRef } from "react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      alpha: number
      color: string
    }> = []

    const COLORS = ["#c9a84c", "#4dd9ac", "#1e3a4a"]

    function resize() {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    function initParticles() {
      particles.length = 0
      const count = Math.floor((canvas!.width * canvas!.height) / 18000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.6 + 0.2,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        })
      }
    }

    function draw() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.globalAlpha = p.alpha
        ctx.fillStyle = p.color
        ctx.fill()
      }

      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(draw)
    }

    resize()
    initParticles()
    draw()

    const resizeObserver = new ResizeObserver(() => {
      resize()
      initParticles()
    })
    resizeObserver.observe(canvas)

    return () => {
      cancelAnimationFrame(animationId)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0d14]"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
        aria-hidden="true"
      />

      {/* Radial depth gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #1e3a4a22 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative symbol — stylized wolf */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-display font-black select-none pointer-events-none opacity-[0.025]"
        aria-hidden="true"
      >
        ⚔
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Pré-título em monospace */}
        <p className="font-mono text-sm text-[#4dd9ac] mb-4 tracking-widest uppercase">
          <span className="text-[#c9a84c]">&gt;</span> desenvolvedor back-end
        </p>

        {/* main title */}
        <h1 className="font-display text-5xl md:text-7xl font-black text-[#e8dcc8] leading-none tracking-tight mb-6">
          Paulo{" "}
          <span
            className="text-[#c9a84c]"
            style={{
              textShadow: "0 0 40px rgba(201,168,76,0.4)",
            }}
          >
            Vitor
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#8899aa] text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10">
          Explorando as profundezas da engenharia de software.
          <br />
          Compartilhando tudo aquilo que foi compartilhado comigo.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/blog"
            className="px-8 py-3 bg-[#c9a84c] text-[#0a0d14] font-semibold rounded-sm hover:bg-[#e8dcc8] transition-colors font-display tracking-wider text-sm uppercase"
          >
            As Crônicas
          </Link>
          <Link
            to="/projects"
            className="px-8 py-3 border border-[#1e3a4a] text-[#8899aa] hover:text-[#e8dcc8] hover:border-[#c9a84c] transition-colors font-display tracking-wider text-sm uppercase rounded-sm"
          >
            Os Contratos
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-[#1e3a4a]">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#1e3a4a]" />
          <span className="text-xs tracking-widest uppercase font-mono">
            role
          </span>
        </div>
      </div>
    </section>
  )
}
