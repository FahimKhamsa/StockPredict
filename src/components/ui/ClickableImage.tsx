import React, { useState } from "react";
import ImageModal from "./ImageModal";

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ClickableImage: React.FC<ClickableImageProps> = ({
  src,
  alt,
  className = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer hover:opacity-80 transition-opacity duration-300 ${className}`}
        onClick={openModal}
      />
      <ImageModal
        isOpen={isModalOpen}
        imageUrl={src}
        altText={alt}
        onClose={closeModal}
      />
    </>
  );
};

export default ClickableImage;
