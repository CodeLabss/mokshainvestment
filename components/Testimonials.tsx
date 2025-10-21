"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const items = [
    {
      name: "Rahul S.",
      quote:
        "Professional advice with clear explanations. My SIPs feel on track and stress-free.",
    },
    {
      name: "Anita K.",
      quote:
        "They simplified insurance decisions for our family with complete transparency.",
    },
    {
      name: "Vikram P.",
      quote:
        "Premium experience and timely reviews. I feel genuinely looked after.",
    },
    {
      name: "Priya M.",
      quote:
        "Their wealth advisory has helped me structure my finances with confidence.",
    },
  ];

  // Autoplay effect
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
            What Our Clients Say
          </h3>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Real stories from clients who have achieved financial clarity and
            peace of mind with our guidance.
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {items.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] sm:flex-[0_0_48%] lg:flex-[0_0_30%]"
              >
                <figure className="group relative h-full rounded-2xl p-6 bg-white/60 backdrop-blur border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between">
                  {/* Glow effect like Features */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>

                  {/* Icon */}
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 mb-4">
                    <Quote className="w-6 h-6 text-indigo-600" />
                  </div>

                  {/* Quote */}
                  <blockquote className="relative text-gray-800 text-base leading-relaxed flex-1">
                    “{t.quote}”
                  </blockquote>

                  {/* Name */}
                  <figcaption className="relative mt-4 text-sm font-medium text-indigo-700">
                    — {t.name}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
