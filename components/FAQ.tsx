export default function FAQ() {
  const faqs = [
    {
      q: "How do we get started?",
      a: "Schedule a consultation. We'll understand your goals, assess your risk, and craft a personalized financial plan for you.",
    },
    {
      q: "How often are reviews conducted?",
      a: "We typically review your portfolio quarterly, but you can request reviews anytime you need guidance.",
    },
    {
      q: "Are your recommendations unbiased?",
      a: "Absolutely. Every recommendation is needs-first, transparent, and supported by thorough documentation.",
    },
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Frequently Asked Questions
          </h3>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Answers to common questions about our services, processes, and approach.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl p-5 bg-white/90 backdrop-blur border border-indigo-100 shadow-md hover:shadow-lg transition"
            >
              <summary className="cursor-pointer list-none font-medium flex justify-between items-center text-gray-900">
                <span>{f.q}</span>
                <span className="text-indigo-600 group-open:rotate-180 transition-transform duration-300">⌄</span>
              </summary>
              <p className="mt-3 text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
