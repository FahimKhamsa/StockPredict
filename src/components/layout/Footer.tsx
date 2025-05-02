import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com", label: "GitHub" },
    {
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      url: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Mail size={20} />,
      url: "mailto:hello@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <Logo />
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Creating beautiful, functional digital experiences with precision
              and passion.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="font-sans font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "About",
                "Background",
                "Methodology",
                "Results",
                "Future-work",
                "Ethics",
                "Process",
                "Conclusion",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-deepBlue dark:hover:text-deepBlue transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-sans font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white dark:bg-gray-800 text-charcoal dark:text-white hover:text-deepBlue dark:hover:text-deepBlue transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Team LSTM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
