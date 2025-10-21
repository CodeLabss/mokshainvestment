export default function Logos() {
  const brands = ["HDFC", "ICICI", "SBI", "Axis", "LIC"];
  return (
    <section className="py-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center opacity-70">
          {brands.map((b) => (
            <div key={b} className="text-center text-gray-500 border rounded-lg py-6">
              <span className="text-sm font-medium">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


