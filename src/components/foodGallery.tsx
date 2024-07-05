import { useState } from "react";
import restaurant from "../assets/kfk-restaurant.webp";

export default function Gallery() {
  const [imageIndex, setImageIndex] = useState(0);
  const imageList = [restaurant, "/image2.jpeg"];

  const handleNextImage = () => {
    if (imageIndex < imageList.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  return (
    <div className="mb-2 relative">
      <button className="relative" onClick={handleNextImage}>
        +
      </button>
      <button className="relative" onClick={handlePreviousImage}>
        -
      </button>
      <div className="absolute">
        {imageList.map((src, index) => (
          <img
            key={index}
            alt={imageIndex.toString()}
            className={index === imageIndex ? "block" : "hidden"}
          />
        ))}
      </div>
      image is {imageIndex}
    </div>
  );
}
