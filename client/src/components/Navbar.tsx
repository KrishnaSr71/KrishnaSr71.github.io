import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import DotLogo from "./DotLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Resume", href: "/resume" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-border z-50 shadow-sm" style={{
      animation: 'fadeInDown 0.5s ease-out'
    }}>
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <a className="text-[#3772FF] hover:opacity-80 transition-opacity">
            <DotLogo />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={`text-sm font-medium text-[#3772FF] nav-underline ${
                  isActive(item.href) ? "active" : ""
                }`}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium block text-[#3772FF] nav-underline"
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
