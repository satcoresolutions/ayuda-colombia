"use client";

import { useRef } from "react";

export default function CategoryCarousel({
    children,
}: {
    children: React.ReactNode;
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!containerRef.current) return;

        const amount = 340;

        containerRef.current.scrollBy({
            left: direction === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative">
            {/* Flecha izquierda */}
            <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Ver categorías anteriores"
                className="
          absolute
          left-0
          top-1/2
          z-10
          hidden
          h-11
          w-11
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          bg-white
          text-slate-700
          shadow-md
          transition
          hover:bg-slate-50
          hover:text-red-600
          sm:flex
        "
            >
                <span className="text-xl">←</span>
            </button>

            {/* Contenedor */}
            <div
                ref={containerRef}
                className="
          flex
          gap-4
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          pb-4
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
            >
                {children}
            </div>

            {/* Flecha derecha */}
            <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Ver siguientes categorías"
                className="
          absolute
          right-0
          top-1/2
          z-10
          hidden
          h-11
          w-11
          translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          bg-white
          text-slate-700
          shadow-md
          transition
          hover:bg-slate-50
          hover:text-red-600
          sm:flex
        "
            >
                <span className="text-xl">→</span>
            </button>
        </div>
    );
}