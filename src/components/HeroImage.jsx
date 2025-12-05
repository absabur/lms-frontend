"use client";

import { useEffect, useState } from "react";
// Assuming these are imported correctly in your actual file structure
import HeroImage from "@/assets/hero.webp";
import HeroImage2 from "@/assets/hero2.webp";
import HeroImage3 from "@/assets/hero3.webp";
import HeroImage4 from "@/assets/hero4.webp";
import HeroImage5 from "@/assets/hero5.webp";

// Array of imported image modules
const heroImages = [HeroImage, HeroImage2, HeroImage3, HeroImage4, HeroImage5];

// Duration of the interval (2000ms)
const ROTATION_INTERVAL = 4000;
// Duration of the fade transition (500ms) - should be less than the interval
const TRANSITION_DURATION = 600; 

export default function HeroImageRotator() {
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(1); // State to control fade animation

  useEffect(() => {
    // 1. Start the image rotation interval
    const rotationInterval = setInterval(() => {
      // Step 1: Start the fade-out
      setOpacity(0);

      // Step 2: Change the image source after the fade-out duration (e.g., 500ms)
      const changeImageTimeout = setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        // Step 3: Immediately start the fade-in after changing the image source
        setOpacity(1);
      }, TRANSITION_DURATION);

      // Clean up the timeout if the component unmounts during the transition
      return () => clearTimeout(changeImageTimeout);

    }, ROTATION_INTERVAL); // The total duration of one cycle

    // Clean up the main interval when the component unmounts
    return () => clearInterval(rotationInterval);
  }, []); 

  // Get the currently selected image object
  const selectedHeroImage = heroImages[index];

  return (
    <div className="flex-1">
      <img
        src={selectedHeroImage.src}
        alt="Students reading books in library"
        className="rounded-xl shadow-xl mx-auto max-w-full aspect-video object-cover"
        style={{
          // Apply the opacity state
          opacity: opacity,
          // Apply the transition for smooth fading
          transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`,
        }}
      />
    </div>
  );
}