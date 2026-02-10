import React from "react";

/**
 * Dark hero with gradient or product image and large bold headline.
 * K&N-style premium hero for mobile.
 */
const HeroSection = ({
  headline = "Performance Air Filters",
  subheadline,
  backgroundImage,
  className = "",
  children,
}) => {
  return (
    <section
      className={`
        relative min-h-[200px] sm:min-h-[320px] flex flex-col justify-end overflow-hidden
        bg-brand-dark
        ${className}
      `}
    >
      {/* Background: gradient + optional image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: backgroundImage
            ? `linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 70%), url(${backgroundImage})`
            : "linear-gradient(135deg, #0d0d0d 0%, #1a2e1a 50%, #0d0d0d 100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-5 sm:px-8 pb-8 pt-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
          {headline}
        </h1>
        {subheadline && (
          <p className="mt-8 text-white/90 text-lg sm:text-xl max-w-xl mb-4">
            {subheadline}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
