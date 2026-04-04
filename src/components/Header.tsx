import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "হোম", href: "/" },
    { name: "রাজনীতির জীবন", href: "/political" },
    { name: "ব্যক্তিগত জীবন", href: "/personal" },
    { name: "নিজের উদ্যোগ", href: "/initiatives" },
    { name: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <nav className="glass-nav border-b border-stone-200 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-serif font-bold tracking-tighter text-stone-900">
                MUHAMMAD SADRIL
              </h1>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-stone-600 hover:text-stone-900 px-3 py-2 text-sm font-bold transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-emerald-600 hover:text-emerald-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-emerald-100"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-stone-700 hover:text-emerald-600 block px-3 py-2 text-base font-bold"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full text-left bg-emerald-600 text-white px-3 py-3 rounded-md text-base font-bold">
              সমর্থন করুন
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
