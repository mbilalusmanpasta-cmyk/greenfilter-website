import React from "react";
import HeroSection from "./HeroSection";
import VehicleFilterCard from "./VehicleFilterCard";

/**
 * K&N-style mobile hero + floating filter card.
 * Renders HeroSection with dark gradient and "Performance Air Filters" headline,
 * then a floating VehicleFilterCard with brand accent border.
 */
const HeroWithFilter = ({
  headline = "Performance Air Filters",
  subheadline = "Find the right filter for your vehicle. Washable, high-flow, made in the USA.",
  heroImage,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <HeroSection
        headline={headline}
        subheadline={subheadline}
        backgroundImage={heroImage}
      />
      {/* Floating filter card — overlaps bottom of hero */}
      <div className="px-4 sm:px-6 -mt-10 sm:-mt-12 relative z-20 max-w-lg mx-auto">
        <VehicleFilterCard />
      </div>
    </div>
  );
};

export default HeroWithFilter;
