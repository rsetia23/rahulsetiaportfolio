import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaRegCopy } from "react-icons/fa";
import { MdCheck } from "react-icons/md";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "rahul@rahulsetia.me";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <footer className="w-full bg-transparent py-8 px-6 mt-20 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-gray-400 text-center md:text-left">
          &copy; {new Date().getFullYear()} Rahul Setia. All rights reserved.
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {/* Email with copy button */}
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${email}`}
              className="hover:text-blue-400 transition text-sm flex items-center gap-1"
            >
              {email}
            </a>
            <button
              onClick={handleCopy}
              className="text-gray-300 hover:text-white transition"
              title="Copy email"
            >
              {copied ? <MdCheck className="text-green-400" /> : <FaRegCopy />}
            </button>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rahulsetia0/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/rsetia23"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaGithub /> GitHub
          </a>

          {/* Resume */}
          <a
            href="/Rahul_Setia_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Resume
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
