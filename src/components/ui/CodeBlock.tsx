import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Determine text color based on language
  const getTextColor = () => {
    switch (language.toLowerCase()) {
      case "python":
        return "text-green-400";
      case "javascript":
      case "js":
        return "text-yellow-400";
      case "typescript":
      case "ts":
        return "text-blue-400";
      default:
        return "text-blue-400"; // Default color
    }
  };

  return (
    <div className="relative">
      <div className="bg-gray-900 p-4 rounded-lg overflow-auto">
        <pre className={`${getTextColor()} text-sm`}>
          <code>{code}</code>
        </pre>
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors duration-300"
        aria-label={copied ? "Copied!" : "Copy code"}
        title={copied ? "Copied!" : "Copy code"}
      >
        {copied ? (
          <Check className="w-5 h-5 text-green-400" />
        ) : (
          <Copy className="w-5 h-5 text-gray-400 hover:text-white" />
        )}
      </button>
    </div>
  );
};

export default CodeBlock;
