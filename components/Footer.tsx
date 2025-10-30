// export default function Footer() {
//   return (
//     <footer className="mt-auto bg-gray-50 border-t">
//       <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-600 flex items-center justify-between">
//         <p>© {new Date().getFullYear()} Moksha Investment. All rights reserved.</p>
//         <p className="text-gray-500">LIC Agent Services</p>
//       </div>
//     </footer>
//   );
// }










export default function Footer() {
  return (
    <footer className="mt-auto bg-gradient-to-r from-amber-50 via-white to-amber-50 border-t border-amber-100/60">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
        {/* Left Section */}
        <div>
          <h4 className="text-lg font-semibold text-amber-600 mb-2">
            Moksha Investment
          </h4>
          <p className="text-gray-600 leading-relaxed max-w-sm">
            Empowering financial growth and security through trusted guidance
            and personalized investment solutions.
          </p>
        </div>

        {/* Middle Section */}
        <div className="md:text-center">
          <h4 className="text-base font-semibold text-amber-600 mb-2">
            Quick Links
          </h4>
          <ul className="space-y-1">
            <li>
              <a
                href="/about"
                className="hover:text-amber-600 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-amber-600 transition-colors duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-amber-600 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:text-right">
          <h4 className="text-base font-semibold text-amber-600 mb-2">
            Contact Us
          </h4>
          <p className="text-gray-600">Mumbai, Maharashtra, India</p>
          <p className="text-gray-600">
            <a
              href="mailto:info@mokshainvestment.in"
              className="hover:text-amber-600 transition-colors duration-200"
            >
              mokshainvestment@gmail.com
            </a>
          </p>
          <p className="text-gray-600">+91 9029026060</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-100 mt-6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-amber-600">
              Moksha Investment
            </span>
            . All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Built with ❤️ for{" "}
            <span className="text-amber-600 font-medium">
              Financial Wellbeing
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
