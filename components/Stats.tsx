"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let current = 0;
    setCount(0);
    const stepTime = Math.max(16, Math.floor(duration / end));
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end, duration, start]);
  return count;
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const exp = useCountUp(18, 2000, start);
  const sips = useCountUp(500, 1500, start);
  const mediclaims = useCountUp(500, 1500, start);

  const stats = [
    { label: "Years of Experience", value: exp },
    { label: "SIPs Managed", value: sips },
    { label: "Mediclaims Processed", value: mediclaims },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Achievements
          </h3>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of clients with proven results in finance and insurance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative rounded-2xl p-8 bg-white/60 backdrop-blur border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-center"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>

              <p className="relative text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
                {s.value}+
              </p>
              <p className="relative mt-4 text-lg font-medium text-slate-700">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
