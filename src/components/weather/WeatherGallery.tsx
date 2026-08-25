"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    alt: "Mountain weather",
    label: "Mountain Weather",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1534088568595-a066f410bcda",
    alt: "Cloudy sky",
    label: "Cloudy Skies",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
    alt: "Beautiful sky",
    label: "Beautiful Skies",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    alt: "Mountain landscape",
    label: "Mountain Landscape",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    alt: "Lake and mountains",
    label: "Lake & Mountains",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Nature landscape",
    label: "Nature",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Forest landscape",
    label: "Forest",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    alt: "Forest",
    label: "Wilderness",
  },
];

export default function WeatherGallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  const visibleImages = showAll
    ? images
    : images.slice(0, 5);

  return (
    <section className="bg-[#0e152f] text-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">

          <div>

            <div className="flex items-center gap-3">

              <h2 className="text-4xl font-bold">
                Weather Gallery
              </h2>

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-gradient-to-r
                  from-blue-400
                  to-cyan-400
                  shadow-[0_0_12px_rgba(34,211,238,0.7)]
                "
              />

            </div>

            <p className="text-slate-400 mt-3">
              Explore beautiful weather conditions and landscapes.
            </p>

          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="
              self-start
              md:self-auto
              px-5
              md:block
              hidden
              py-2.5
              rounded-full
              border
              border-slate-700
              bg-gradient-to-r
              from-slate-800
              to-slate-900
              text-sm
              text-slate-300
              hover:border-blue-500/50
              hover:text-blue-400
              transition-all
              duration-300
            "
          >
            {showAll ? "Show Less ↑" : "View More ↓"}
          </button>

        </div>


        {/* ================= GALLERY ================= */}

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
            md:gap-5
          "
        >

          {visibleImages.map((image, index) => (

            <div
              key={image.id}
              onClick={() => setSelectedImage(image.src)}
              className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                cursor-pointer
                border
                border-slate-700/80
                bg-slate-900
                ${
                  index === 0
                    ? "col-span-2 row-span-2 h-[400px] md:h-[520px]"
                    : "h-[250px] md:h-[250px]"
                }
                hover:border-blue-400/50
                transition-all
                duration-500
              `}
            >

              {/* Image */}

              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 25vw"
                }
              />


              {/* Dark overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                  opacity-70
                  group-hover:opacity-90
                  transition-opacity
                  duration-500
                "
              />


              {/* Hover glow */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-blue-500/0
                  via-cyan-400/0
                  to-blue-500/20
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />


              {/* Content */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-5
                  translate-y-2
                  group-hover:translate-y-0
                  transition-transform
                  duration-500
                "
              >

                <p className="text-white font-semibold">
                  {image.label}
                </p>

                <p
                  className="
                    text-xs
                    text-slate-300
                    mt-1
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                >
                  Explore weather conditions
                </p>

              </div>


              {/* View icon */}

              <div
                className="
                  absolute
                  top-4
                  right-4
                  w-9
                  h-9
                  rounded-full
                  bg-black/40
                  backdrop-blur-md
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-white
                  opacity-0
                  group-hover:opacity-100
                  scale-90
                  group-hover:scale-100
                  transition-all
                  duration-300
                "
              >
                ↗
              </div>

            </div>

          ))}

        </div>


        {/* ================= IMAGE MODAL ================= */}

        {selectedImage && (

          <div
            className="
              fixed
              inset-0
              z-50
              bg-black/90
              backdrop-blur-sm
              flex
              items-center
              justify-center
              p-6
            "
            onClick={() => setSelectedImage(null)}
          >

            <div
              className="
                relative
                w-full
                max-w-6xl
                h-[80vh]
              "
              onClick={(e) => e.stopPropagation()}
            >

              <Image
                src={selectedImage}
                alt="Selected weather"
                fill
                className="
                  rounded-2xl
                  object-contain
                "
                sizes="90vw"
              />


              {/* Close button */}

              <button
                onClick={() => setSelectedImage(null)}
                className="
                  absolute
                  -top-4
                  -right-4
                  w-11
                  h-11
                  rounded-full
                  bg-white
                  text-black
                  font-bold
                  shadow-xl
                  hover:bg-slate-200
                  hover:scale-105
                  transition
                "
              >
                ✕
              </button>

            </div>

          </div>

        )}

      <div className="flex justify-center my-8">
        <button
            onClick={() => setShowAll(!showAll)}
            className="
              self-start
              md:self-auto
              md:hidden
              px-5
              py-2.5
              rounded-full
              border
              border-slate-700
              bg-gradient-to-r
              from-slate-800
              to-slate-900
              text-sm
              text-slate-300
              hover:border-blue-500/50
              hover:text-blue-400
              transition-all
              duration-300
            "
          >
            {showAll ? "Show Less ↑" : "View More ↓"}
          </button>
        </div>
      </div>

    </section>
  );
}