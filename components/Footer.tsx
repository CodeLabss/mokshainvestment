export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-600 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Moksha Investment. All rights reserved.</p>
        <p className="text-gray-500">LIC Agent Services</p>
      </div>
    </footer>
  );
}
