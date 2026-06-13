export default function Footer() {
  return (
    <footer
  id="contact"
  className="bg-[#06271D] text-white py-14"
>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <img
              src="/logo.png"
              alt="VEDA Logo"
              className="h-20 w-auto mb-4"
            />

            <p className="text-gray-400 leading-7">
              Smart Vendor Membership platform
              for secure validations, vendor
              tracking, and discount management.
            </p>
          </div>

          
{/* Quick Links + Services */}
<div className="col-span-2 lg:col-span-2 grid grid-cols-2 gap-8">

  {/* Quick Links */}
  <div>
    <h3 className="text-xl font-semibold mb-5">
      Quick Links
    </h3>

    <ul className="space-y-3 text-gray-400">
      <li>
        <a href="#home" className="hover:text-white transition duration-300">
          Home
        </a>
      </li>

      <li>
        <a href="#features" className="hover:text-white transition duration-300">
          Features
        </a>
      </li>

      <li>
        <a href="#services" className="hover:text-white transition duration-300">
          How It Works
        </a>
      </li>

      <li>
        <a href="#testimonials" className="hover:text-white transition duration-300">
          Reviews
        </a>
      </li>

      <li>
        <a href="#faq" className="hover:text-white transition duration-300">
          Support
        </a>
      </li>

      <li>
        <a href="#contact" className="hover:text-white transition duration-300">
          Contact
        </a>
      </li>
    </ul>
  </div>

  {/* Services */}
  <div>
    <h3 className="text-xl font-semibold mb-5">
      Services
    </h3>

    <ul className="space-y-3 text-gray-400">
      <li>Membership Validation</li>
      <li>Vendor Tracking</li>
      <li>Discount Management</li>
      <li>Secure Transactions</li>
    </ul>
  </div>

</div>

          

          {/* Contact */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Hyderabad, India</li>
              <li>support@veda.com</li>
              <li>+91 9876543210</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-8 text-center text-gray-400">
          © 2026 VEDA. All rights reserved.
        </div>

      </div>
    </footer>
  );
}