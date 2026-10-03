import { useState } from 'react'
import { ArrowRight, Check, Loader2 } from 'lucide-react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const TEAM_SIZES = ['Just me', '2–10', '11–50', '51–200', '200+']

/**
 * Waitlist signup posted to Netlify Forms. The matching static skeleton lives in
 * public/__forms.html — keep field names in sync with it.
 */
export function WaitlistForm({
  source,
  tone = 'light',
}: {
  source: string
  tone?: 'light' | 'dark'
}) {
  const [status, setStatus] = useState<Status>('idle')
  const dark = tone === 'dark'

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className={`rise flex items-start gap-4 rounded-2xl border p-5 ${
          dark ? 'border-paper/20 bg-paper/5' : 'border-ink/15 bg-white/60'
        }`}
      >
        <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-ember text-white">
          <Check size={16} strokeWidth={3} />
        </span>
        <div>
          <p className="font-semibold">You're on the list.</p>
          <p className={`text-sm ${dark ? 'text-paper/70' : 'text-ink-soft'}`}>
            We're letting teams in a few at a time. Watch your inbox — your invite will come from
            hello@murmur.so.
          </p>
        </div>
      </div>
    )
  }

  const field = dark
    ? 'bg-paper/10 border-paper/20 text-paper placeholder:text-paper/50 focus:border-paper/60'
    : 'bg-white/70 border-ink/15 text-ink placeholder:text-ink-soft/60 focus:border-ink/50'

  return (
    <form
      name="waitlist"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="w-full"
    >
      <input type="hidden" name="form-name" value="waitlist" />
      <input type="hidden" name="source" value={source} />
      <p className="hidden">
        <label>
          Don't fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="flex flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor={`email-${source}`}>
          Work email
        </label>
        <input
          id={`email-${source}`}
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={`h-12 min-w-0 flex-1 rounded-xl border px-4 outline-none transition ${field}`}
        />
        <label className="sr-only" htmlFor={`size-${source}`}>
          Team size
        </label>
        <select
          id={`size-${source}`}
          name="team-size"
          defaultValue=""
          required
          className={`h-12 rounded-xl border px-3 outline-none transition sm:w-36 ${field}`}
        >
          <option value="" disabled>
            Team size
          </option>
          {TEAM_SIZES.map((s) => (
            <option key={s} value={s} className="text-ink">
              {s}
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-ember px-6 font-semibold text-white transition hover:bg-[#ea4a1d] disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <>
              Join waitlist
              <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </div>
      <p
        className={`mt-3 text-xs ${
          status === 'error' ? 'text-ember' : dark ? 'text-paper/55' : 'text-ink-soft'
        }`}
      >
        {status === 'error'
          ? 'Something went wrong — please try again in a moment.'
          : 'Free during early access. No spam, unsubscribe anytime.'}
      </p>
    </form>
  )
}
