import React, { useState, useEffect } from "react";
import { X, Download } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  altText: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageUrl,
  altText,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Add a small delay to allow for the fade-out animation
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = "auto";
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = imageUrl.split("/").pop() || "image";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-lg shadow-xl p-2 transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-3 right-3 flex space-x-2 z-10">
          <button
            onClick={handleDownload}
            className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
            aria-label="Download image"
          >
            <Download className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
        <div className="overflow-auto max-h-[calc(90vh-4rem)] rounded-lg">
          <img
            src={imageUrl}
            alt={altText}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="mt-2 px-4 py-2 text-center text-sm text-gray-600 dark:text-gray-400">
          {altText}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
