import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">Ready to secure your financial future?</h3>
          <p className="mt-2 text-indigo-100">Speak to our advisor for a personalized plan.</p>
        </div>
        <Link href="/contact" className="px-5 py-3 bg-white text-indigo-700 rounded-lg font-semibold shadow hover:shadow-md">
          Book Consultation
        </Link>
      </div>
    </section>
  );
}


