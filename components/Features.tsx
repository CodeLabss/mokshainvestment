export default function Features() {
  const features = [
    {
      title: "Personalized Planning",
      desc: "Tailored strategies for insurance, SIPs, and wealth growth.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-indigo-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Transparent Advisory",
      desc: "Clear guidance with regular portfolio reviews and insights.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-indigo-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Secure & Compliant",
      desc: "Best-in-class practices with client-first confidentiality.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-indigo-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75A4.5 4.5 0 007.5 6.75V10.5m9 0H7.5m9 0v7.5A2.25 2.25 0 0114.25 20.25H9.75A2.25 2.25 0 017.5 18V10.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Choose Us
          </h3>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A premium advisory experience designed for long-term financial confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl p-6 bg-white/60 backdrop-blur border border-slate-200 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Gradient glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>

              {/* Icon */}
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 mb-4">
                {f.icon}
              </div>

              <h4 className="relative text-lg font-semibold text-slate-800">
                {f.title}
              </h4>
              <p className="relative mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
