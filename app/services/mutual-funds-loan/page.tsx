"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BgComponent } from "@/components/BgComponent";
import { motion } from "framer-motion";
import {
  Check,
  Clock,
  Zap,
  Shield,
  Users,
  FileText,
  Percent,
  Calculator,
  Phone,
  ExternalLink,
  Info,
} from "lucide-react";

/**
 * Loan Against Mutual Funds Page
 * - Matches visual language from your other pages (glassmorphism, amber CTA, bold text)
 * - Interactive LTV loan calculator (EMI)
 * - Self-contained, copy-paste ready
 */

/* ---------- Content / Data ---------- */
const FEATURES = [
  {
    title: "Quick Disbursal",
    subtitle: "Get funds within 24–48 hours",
    icon: <Clock className="w-8 h-8 text-amber-400" />,
    color: "amber",
    desc: "No need to sell your investments — pledge your mutual funds and access liquidity fast.",
  },
  {
    title: "Competitive Interest",
    subtitle: "Low cost vs unsecured credit",
    icon: <Percent className="w-8 h-8 text-emerald-400" />,
    color: "emerald",
    desc: "Interest is charged only on the amount you borrow. Rates are typically lower than personal loans.",
  },
  {
    title: "Flexible Tenure",
    subtitle: "Choose repayment terms that fit",
    icon: <Clock className="w-8 h-8 text-sky-400" />,
    color: "sky",
    desc: "Short-term bridge loans or longer tenures — structure your repayment as per cashflow.",
  },
  {
    title: "Retain Upside",
    subtitle: "Your SIP & growth continues",
    icon: <Zap className="w-8 h-8 text-rose-400" />,
    color: "rose",
    desc: "You keep exposure to market upside while using funds for needs — useful for tax-efficient planning.",
  },
];

const STEPS = [
  { id: 1, title: "Apply", desc: "Fill quick online form & upload KYC." },
  { id: 2, title: "Pledge", desc: "We pledge your mutual funds in a nominee/pledge account." },
  { id: 3, title: "Verify", desc: "Simple verification & LTV calculation based on fund type." },
  { id: 4, title: "Disburse", desc: "Funds credited to your bank account quickly." },
];

const FAQS = [
  {
    q: "What maximum LTV can I get?",
    a: "LTV depends on fund type and underlying asset quality — typically 60%–90% depending on fund category and AMC rules.",
  },
  {
    q: "Do I lose my mutual fund holdings?",
    a: "No — the funds are pledged; you retain economic exposure. If you default, the lender can liquidate the pledged units.",
  },
  {
    q: "Are there prepayment charges?",
    a: "Some plans may have charges for early closure — check product T&Cs. We offer flexible prepayment plans for most customers.",
  },
  {
    q: "Is this loan taxable?",
    a: "Loan proceeds are not taxable as income. However, any gains/losses on fund liquidation (if it occurs) have tax implications.",
  },
];

/* ---------- Helpers ---------- */
function formatINR(value: number) {
  if (!isFinite(value)) return "—";
  return value.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
}

/* EMI function (monthly EMI) — correct formula used:
   EMI = P * r * (1+r)^n / ((1+r)^n - 1)
   where r = monthlyRate (decimal), n = number of months
*/
function calcEMI(principal: number, annualRatePercent: number, months: number) {
  if (principal <= 0 || months <= 0) return 0;
  const monthlyRate = annualRatePercent / 100 / 12; // decimal
  if (monthlyRate === 0) return principal / months;
  const x = Math.pow(1 + monthlyRate, months);
  return (principal * monthlyRate * x) / (x - 1);
}

/* ---------- Intersection hook (reveal on scroll) ---------- */
function useReveal(ref: React.RefObject<HTMLElement>, threshold = 0.18) {
  const [reveal, setReveal] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setReveal(true);
            obs.disconnect();
          }
        });
      },
      { threshold }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return reveal;
}

/* ---------- Page Component ---------- */
export default function LoanAgainstMFPage() {
  const [showContact, setShowContact] = useState(false);

  // Calculator state
  const [portfolioValue, setPortfolioValue] = useState<number>(2000000); // default ₹20,00,000
  const [ltv, setLtv] = useState<number>(75); // %
  const [rate, setRate] = useState<number>(12); // annual %
  const [tenureMonths, setTenureMonths] = useState<number>(12); // months

  const pyramidRef = useRef<HTMLElement | null>(null);
  const reveal = useReveal(pyramidRef, 0.15);

  // Derived
  const availLoan = Math.max(0, (portfolioValue * ltv) / 100);
  const emi = calcEMI(availLoan, rate, tenureMonths);

  return (
    <main className="relative min-h-screen flex flex-col text-white">
      <BgComponent />
      <div className="relative z-10">
        <Navbar />

        {/* HERO */}
        <section className="py-28 md:py-36 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold text-amber-400 mb-4">
            Loan Against Mutual Funds
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-6">
            Fast, **transparent** liquidity — <span className="font-bold text-amber-400">no need to redeem</span> your holdings. Keep market exposure, get working capital.
          </motion.p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-full bg-amber-400 text-slate-900 font-semibold hover:bg-amber-500 transition"
            >
              See Features
            </button>
            <button
              onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-full border border-white/20 text-white/90 font-semibold hover:bg-white/6 transition"
            >
              Try Calculator
            </button>
          </div>
        </section>

        {/* Quick stats strip */}
        <section className="py-6 md:py-8">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-sm text-slate-300">Estimated LTV</div>
              <div className="text-2xl font-extrabold text-amber-400 mt-1">60% — 90%</div>
            </div>
            <div className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-sm text-slate-300">Typical Disbursal Time</div>
              <div className="text-2xl font-extrabold text-emerald-300 mt-1">24–48 hrs</div>
            </div>
            <div className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-sm text-slate-300">Keep Investing</div>
              <div className="text-2xl font-extrabold text-sky-300 mt-1">SIP & Growth Continue</div>
            </div>
          </div>
        </section>

        {/* FEATURES (color-coded) */}
        <section id="features" className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-extrabold text-amber-400 mb-4">
              Why take a Loan Against Mutual Funds?
            </motion.h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Use your portfolio as collateral and get **instant liquidity**, while <span className="font-bold text-amber-400">retaining upside</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {FEATURES.map((f, i) => {
                const colorClass = f.color === "amber" ? "from-amber-600/12 to-amber-600/6 border-amber-400/20 text-amber-50" :
                                  f.color === "emerald" ? "from-emerald-600/12 to-emerald-600/6 border-emerald-400/20 text-emerald-50" :
                                  f.color === "sky" ? "from-sky-600/12 to-sky-600/6 border-sky-400/20 text-sky-50" :
                                  "from-rose-600/12 to-rose-600/6 border-rose-400/20 text-rose-50";
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={`rounded-2xl p-6 backdrop-blur-lg bg-gradient-to-b ${colorClass} border shadow-md`}
                    role="article"
                    aria-label={f.title}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/6">
                        {f.icon}
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-bold">{f.title}</h4>
                        <p className="text-sm text-slate-200 mt-1 font-semibold">{f.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-200 mt-4">{f.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works (compact cards) */}
        <section className="py-12 md:py-14 bg-gradient-to-b from-slate-900/70 to-slate-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-400">How it works — simple & transparent</h3>
              <p className="text-slate-300 max-w-2xl mx-auto mt-2">A short 4-step flow to get funds without selling your holdings.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {STEPS.map((s) => (
                <motion.div key={s.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-300 font-bold">{s.id}</div>
                    <div>
                      <h4 className="font-bold text-white">{s.title}</h4>
                      <p className="text-slate-300 text-sm mt-1">{s.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator + Summary (side-by-side on desktop) */}
        <section id="calculator" className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: calculator */}
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/6 backdrop-blur-lg border border-white/10 rounded-3xl p-6">
              <h3 className="text-2xl font-extrabold text-amber-400 mb-2">Loan Calculator</h3>
              <p className="text-slate-300 text-sm mb-4">Estimate your loan & EMI (indicative).</p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="text-sm text-slate-300 font-semibold">Portfolio Value (₹)</label>
                  <input
                    type="number"
                    value={portfolioValue}
                    onChange={(e) => setPortfolioValue(Number(e.target.value || 0))}
                    className="w-full mt-2 p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                  />
                </div>

                <div>
                  <div className="flex justify-between">
                    <label className="text-sm text-slate-300 font-semibold">Loan-to-Value (LTV) — {ltv}%</label>
                    <span className="text-sm text-slate-300">Available: 60%–90%</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={90}
                    value={ltv}
                    onChange={(e) => setLtv(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm text-slate-300 font-semibold">Annual Interest (%)</label>
                    <input
                      type="number"
                      value={rate}
                      onChange={(e) => setRate(Number(e.target.value || 0))}
                      className="w-full mt-2 p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-300 font-semibold">Tenure (months)</label>
                    <input
                      type="number"
                      value={tenureMonths}
                      onChange={(e) => setTenureMonths(Number(e.target.value || 0))}
                      min={1}
                      className="w-full mt-2 p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-white/8"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-xs text-slate-300">Indicative Loan Amount</div>
                    <div className="text-lg font-bold text-amber-400 mt-1">{formatINR(availLoan)}</div>
                    <div className="text-xs text-slate-300 mt-1">({ltv}% of portfolio)</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-xs text-slate-300">Estimated EMI</div>
                    <div className="text-lg font-bold text-emerald-300 mt-1">{emi ? formatINR(Math.round(emi)) : "—"}</div>
                    <div className="text-xs text-slate-300 mt-1">for {tenureMonths} months @ {rate}% p.a.</div>
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <button onClick={() => setShowContact(true)} className="flex-1 px-4 py-3 rounded-lg bg-amber-400 text-slate-900 font-semibold hover:bg-amber-500 transition">
                    Apply Now
                  </button>
                  <button onClick={() => { /* quick reset */ setPortfolioValue(2000000); setLtv(75); setRate(12); setTenureMonths(12); }} className="px-4 py-3 rounded-lg border border-white/10 font-semibold">
                    Reset
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Right: summary, eligibility, docs */}
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="bg-white/6 backdrop-blur-lg border border-white/10 rounded-3xl p-6">
                <h4 className="font-bold text-lg text-amber-400">What you get</h4>
                <ul className="mt-3 space-y-2 text-slate-200">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-emerald-400 mt-1"/> <span className="font-semibold">Quick funding</span> — bridge short-term needs.</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-amber-400 mt-1"/> <span className="font-semibold">Lower cost vs unsecured credit</span> — interest only on borrowed amount.</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-sky-400 mt-1"/> <span className="font-semibold">Maintain market exposure</span> — no forced redemption unless default.</li>
                </ul>
              </div>

              <div className="bg-white/6 backdrop-blur-lg border border-white/10 rounded-3xl p-6">
                <h4 className="font-bold text-lg text-emerald-300">Eligibility & Documents</h4>
                <p className="text-sm text-slate-300 mt-2 mb-3">Simple KYC + portfolio verification. Typical checklist:</p>
                <ul className="text-slate-200 space-y-2">
                  <li className="flex items-start gap-2"><FileText className="w-4 h-4 mt-1 text-white/80"/> PAN card</li>
                  <li className="flex items-start gap-2"><Users className="w-4 h-4 mt-1 text-white/80"/> Proof of bank account (Cancelled cheque)</li>
                  <li className="flex items-start gap-2"><Info className="w-4 h-4 mt-1 text-white/80"/> Statement & holding details / latest folio holdings</li>
                </ul>
              </div>

              <div className="bg-white/6 backdrop-blur-lg border border-white/10 rounded-3xl p-6">
                <h4 className="font-bold text-lg text-sky-300">Quick note</h4>
                <p className="text-sm text-slate-300 mt-2">This calculator is **indicative**. Final approval, interest rate, and LTV are subject to fund type, AMCs, and internal underwriting.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 md:py-14">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">Frequently asked questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FAQS.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <h5 className="font-semibold text-white">{f.q}</h5>
                  <p className="text-slate-300 mt-2">{f.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="bg-white/6 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
              <h4 className="text-2xl font-extrabold text-amber-400 mb-2">Ready to unlock liquidity from your portfolio?</h4>
              <p className="text-slate-300 mb-6">Apply now and get a personalised offer — fast approvals and transparent terms.</p>
              <div className="flex justify-center gap-4">
                <button onClick={() => setShowContact(true)} className="px-6 py-3 rounded-full bg-amber-400 text-slate-900 font-semibold">Apply Now</button>
                <a href="#calculator" className="px-6 py-3 rounded-full border border-white/10 text-white/90 font-semibold flex items-center gap-2"><Calculator className="w-4 h-4"/> Try Calculator</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact modal */}
        {showContact && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowContact(false)}>
            <div className="bg-white/96 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto text-slate-900" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-xl font-bold mb-4 text-center">Get a personalised offer</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks — our advisor will contact you soon."); setShowContact(false); }}>
                <input type="text" placeholder="Your name" className="w-full p-3 rounded-lg border border-slate-300" required />
                <input type="email" placeholder="Email" className="w-full p-3 rounded-lg border border-slate-300" required />
                <input type="tel" placeholder="Phone number" className="w-full p-3 rounded-lg border border-slate-300" required />
                <div className="flex gap-2">
                  <button type="submit" className="flex-1 px-4 py-3 rounded-lg bg-amber-400 text-slate-900 font-semibold">Request Offer</button>
                  <button type="button" onClick={() => setShowContact(false)} className="px-4 py-3 rounded-lg border border-slate-300">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </main>
  );
}