import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  CalendarOff,
  ChevronDown,
  Clock3,
  Globe2,
  Mic,
  Sparkles,
  TriangleAlert,
  Waypoints,
} from 'lucide-react'
import { WaitlistForm } from '../components/WaitlistForm'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="relative overflow-x-clip">
      <Nav />
      <Hero />
      <TheMath />
      <HowItWorks />
      <Features />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  )
}

function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="flex h-6 items-center gap-[3px]" aria-hidden>
        {[10, 18, 24, 14, 8].map((h, i) => (
          <span key={i} className="w-[3px] rounded-full bg-ember" style={{ height: h }} />
        ))}
      </span>
      <span className="font-display text-2xl leading-none tracking-tight">murmur</span>
    </span>
  )
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" aria-label="Murmur home">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex">
          <a href="#how" className="hover:text-ink">
            How it works
          </a>
          <a href="#features" className="hover:text-ink">
            Features
          </a>
          <a href="#faq" className="hover:text-ink">
            FAQ
          </a>
        </nav>
        <a
          href="#join"
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition hover:bg-ink/85"
        >
          Get early access
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative px-5 pb-24 pt-16 md:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-ember/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="rise mb-6 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/50 px-3 py-1 font-mono text-xs uppercase tracking-wider text-ink-soft">
            <span className="size-1.5 rounded-full bg-ember" /> Early access · Winter 2026
          </p>
          <h1
            className="rise font-display text-[3.4rem] leading-[0.95] tracking-tight md:text-[5.5rem]"
            style={{ animationDelay: '80ms' }}
          >
            Cancel the standup.
            <br />
            <em className="text-ember">Keep the team.</em>
          </h1>
          <p
            className="rise mt-7 max-w-xl text-lg leading-relaxed text-ink-soft"
            style={{ animationDelay: '160ms' }}
          >
            Murmur swaps the daily 15-minute call for a two-minute voice check-in, recorded whenever
            it suits each person. Everyone gets a short written digest of what moved, what's next,
            and what's blocked, ready before their first coffee.
          </p>
          <div id="join" className="rise mt-9 max-w-xl scroll-mt-28" style={{ animationDelay: '240ms' }}>
            <WaitlistForm source="hero" />
          </div>
        </div>
        <ProductMock />
      </div>
    </section>
  )
}

const CHECKINS = [
  {
    name: 'Priya N.',
    city: 'Lisbon',
    time: '08:42',
    color: 'bg-moss',
    done: 'Shipped the billing retry logic',
    next: 'Pairing with Tomás on webhooks',
  },
  {
    name: 'Tomás R.',
    city: 'Mexico City',
    time: '09:15',
    color: 'bg-ember',
    done: 'Webhook signature tests green',
    next: 'Load-testing the queue',
    blocker: 'Needs staging DB credentials',
  },
  {
    name: 'Jun W.',
    city: 'Seoul',
    time: '18:03',
    color: 'bg-ink',
    done: 'New onboarding copy is in review',
    next: 'Handoff to design for empty states',
  },
]

function ProductMock() {
  return (
    <div className="rise relative" style={{ animationDelay: '320ms' }}>
      <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-paper-deep" aria-hidden />
      <div className="relative rounded-[1.6rem] border border-ink/10 bg-white p-5 shadow-[0_30px_60px_-30px_rgba(25,24,20,0.35)]">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
              #platform-team · Tue 14 Oct
            </p>
            <p className="font-display text-2xl">Today's digest</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-moss/10 px-2.5 py-1 text-xs font-semibold text-moss">
            <Sparkles size={12} /> 3 of 4 in
          </span>
        </div>

        <ul className="space-y-3">
          {CHECKINS.map((c) => (
            <li key={c.name} className="rounded-xl border border-ink/8 bg-paper/50 p-3.5">
              <div className="mb-2 flex items-center gap-2.5">
                <span
                  className={`grid size-7 place-items-center rounded-full text-[11px] font-bold text-white ${c.color}`}
                >
                  {c.name[0]}
                </span>
                <span className="text-sm font-semibold">{c.name}</span>
                <span className="text-xs text-ink-soft">
                  {c.city} · {c.time}
                </span>
                <Waveform className="ml-auto" />
              </div>
              <p className="text-sm">
                <span className="font-mono text-[11px] text-moss">DONE </span>
                {c.done}
              </p>
              <p className="text-sm">
                <span className="font-mono text-[11px] text-ink-soft">NEXT </span>
                {c.next}
              </p>
              {c.blocker && (
                <p className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-ember/10 px-2 py-1 text-xs font-medium text-ember">
                  <TriangleAlert size={12} /> {c.blocker}
                </p>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center gap-3 rounded-xl bg-ink p-3 text-paper">
          <span className="grid size-9 place-items-center rounded-full bg-ember">
            <Mic size={16} />
          </span>
          <div className="flex-1">
            <p className="text-sm font-semibold">Your turn, Sam</p>
            <p className="text-xs text-paper/60">Tap to record · about 2 minutes</p>
          </div>
          <Waveform animated light />
        </div>
      </div>
    </div>
  )
}

function Waveform({
  animated = false,
  light = false,
  className = '',
}: {
  animated?: boolean
  light?: boolean
  className?: string
}) {
  const bars = [6, 12, 9, 16, 11, 14, 7, 10, 5]
  return (
    <span className={`flex h-5 items-center gap-[2px] ${className}`} aria-hidden>
      {bars.map((h, i) => (
        <span
          key={i}
          className={`w-[2px] rounded-full ${light ? 'bg-paper/70' : 'bg-ink/30'} ${animated ? 'wave-bar' : ''}`}
          style={{ height: h, animationDelay: `${i * 90}ms` }}
        />
      ))}
    </span>
  )
}

function TheMath() {
  const [team, setTeam] = useState(8)
  const hours = Math.round((team * 15 * 5 * 48) / 60)
  return (
    <section className="border-y border-ink/10 bg-ink px-5 py-20 text-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-paper/50">The math</p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            A 15-minute standup is never 15 minutes.
          </h2>
          <p className="mt-5 max-w-md text-paper/65">
            Multiply it by every person on the call, every weekday, all year. Then add the context
            switch on either side. Move the slider to see what your team spends.
          </p>
        </div>
        <div className="rounded-2xl border border-paper/15 p-7">
          <label htmlFor="team" className="flex items-baseline justify-between text-sm text-paper/70">
            <span>People on the call</span>
            <span className="font-mono text-paper">{team}</span>
          </label>
          <input
            id="team"
            type="range"
            min={2}
            max={40}
            value={team}
            onChange={(e) => setTeam(Number(e.target.value))}
            className="mt-3 w-full accent-[#ff5a2b]"
          />
          <p className="mt-8 font-display text-7xl leading-none text-ember md:text-8xl">
            {hours.toLocaleString()}
            <span className="ml-2 font-sans text-lg text-paper/60">hours / year</span>
          </p>
          <p className="mt-3 text-sm text-paper/55">
            in standups alone ({team} people × 15 min × 5 days × 48 weeks), before counting
            interruptions.
          </p>
        </div>
      </div>
    </section>
  )
}

const STEPS = [
  {
    n: '01',
    title: 'Talk for two minutes',
    body: 'Record from Slack, desktop, or your phone, whenever suits you. No camera and no meeting link.',
  },
  {
    n: '02',
    title: 'Murmur writes it up',
    body: 'Each check-in becomes a few tight lines: what got done, what is next, and anything that is blocked.',
  },
  {
    n: '03',
    title: 'Read the digest',
    body: 'Your whole team on one screen in about 90 seconds. Blockers go straight to the person who can unblock them.',
  },
]

function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-16 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="How it works" title="Three steps. No calendar invite." />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="bg-paper p-8">
              <span className="font-mono text-sm text-ember">{s.n}</span>
              <h3 className="mt-6 font-display text-3xl">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const FEATURES = [
  {
    icon: Globe2,
    title: 'Built for every time zone',
    body: 'Check-ins roll up into a digest that lands at each person’s local morning, from Lisbon to Seoul.',
  },
  {
    icon: TriangleAlert,
    title: 'Blockers don’t wait',
    body: 'If someone says they’re stuck, Murmur flags it and pings the right teammate. You won’t find it a day later.',
  },
  {
    icon: Waypoints,
    title: 'Plugs into your stack',
    body: 'Post digests to Slack or Teams, and link updates to Linear, Jira, and GitHub issues automatically.',
  },
  {
    icon: Clock3,
    title: 'A searchable history',
    body: 'Every update is searchable, so “when did we decide that?” takes seconds to answer.',
  },
  {
    icon: CalendarOff,
    title: 'Fewer meetings, honestly',
    body: 'Keep one live sync a week for the conversations that need one, and let Murmur handle the daily status.',
  },
  {
    icon: Mic,
    title: 'Voice, not video',
    body: 'No camera, no ring light, no hair check. Just talk the way you would to a teammate at the next desk.',
  },
]

function Features() {
  return (
    <section id="features" className="scroll-mt-16 border-t border-ink/10 bg-paper-deep/60 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Features" title="Everything a standup does, minus the meeting." />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <span className="grid size-11 place-items-center rounded-xl border border-ink/15 bg-white/70">
                <Icon size={20} className="text-ember" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FAQS = [
  {
    q: 'When does early access open?',
    a: 'We’re onboarding the first teams in winter 2026 and letting more in every week. People on the waitlist get invites in the order they signed up.',
  },
  {
    q: 'How much will it cost?',
    a: 'Murmur is free during early access. At launch, small teams will have a free plan, and waitlist members get a founding-team discount on paid plans.',
  },
  {
    q: 'Do I have to use my voice?',
    a: 'No. Voice is the fastest way to check in, but you can type your update and Murmur will tidy it into the same digest format.',
  },
  {
    q: 'What happens to our recordings?',
    a: 'Audio is encrypted in transit and at rest, and only your workspace can access it. You choose how long recordings are kept. The default is 30 days, and the written digests stay.',
  },
]

function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="scroll-mt-16 px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr]">
        <SectionHeading kicker="FAQ" title="Questions, answered." />
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-semibold"
                >
                  {f.q}
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-ink-soft transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}
                >
                  <p className="overflow-hidden leading-relaxed text-ink-soft">{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="px-5 pb-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-paper md:px-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-20 size-96 rounded-full bg-ember/40 blur-3xl"
        />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-5xl leading-[1.02] md:text-6xl">
            Give your team its mornings <em className="text-ember">back.</em>
          </h2>
          <p className="mt-5 text-paper/65">
            Join the waitlist and we’ll invite your team as soon as a spot opens.
          </p>
          <div className="mt-8">
            <WaitlistForm source="footer" tone="dark" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-ink-soft sm:flex-row">
        <Logo />
        <p>© {new Date().getFullYear()} Murmur Labs. Made for teams spread across time zones.</p>
      </div>
    </footer>
  )
}

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-wider text-ember">{kicker}</p>
      <h2 className="font-display text-4xl leading-tight md:text-5xl">{title}</h2>
    </div>
  )
}
