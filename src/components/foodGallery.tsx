import { useState } from "react";
import "../../public/kfk-restaurant.webp";

interface ReactButtonProps {
  cta: string;
  func: () => void;
}

function ReactButton({ cta, func }: ReactButtonProps) {
  return (
    <button onClick={func} className="bg-red text-white px-2 rounded shadow-sm">
      {cta}
    </button>
  );
}

export default function Gallery() {
  const imageList = [
    { src: "/kfk-restaurant.webp", id: 0, alt: "Sichuan chicken" },
  ];
  const [imageIndex, setImageIndex] = useState(0);

  function handleNextImage() {
    if (imageIndex < imageList.length - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0); // Loop back to the first image
    }
    console.log("Image index is: " + imageIndex);
  }

  function handlePreviousImage() {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(imageList.length - 1); // Loop back to the last image
    }
    console.log("Image index is: " + imageIndex);
  }

  return (
    <div className="relative mb-2">
      <div className="relative">
        {imageList.map(
          (image) =>
            image.id === imageIndex && (
              <img
                className="w-full h-auto rounded-md"
                key={image.id}
                src={image.src}
                alt={image.alt}
              />
            )
        )}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 bg-black bg-opacity-75 rounded-md">
          <ReactButton func={handlePreviousImage} cta="-" />
          <div className="text-white mx-2">{imageList[imageIndex].alt}</div>
          <ReactButton func={handleNextImage} cta="+" />
        </div>
      </div>
    </div>
  );
}
