"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  image: string;
  title: string;
}

export default function ImageGallery({ image, title }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [image, image, image, image];

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full aspect-square rounded-xl bg-slate-100 relative overflow-hidden">
        <Image
          src={images[selectedImage]}
          alt={title}
          fill
          className="object-contain p-8"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg cursor-pointer transition-all ${
              selectedImage === index
                ? "ring-2 ring-blue-600"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={img}
                alt={`${title} - view ${index + 1}`}
                fill
                className="object-contain p-2"
                sizes="120px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
