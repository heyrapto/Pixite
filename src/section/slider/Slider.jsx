import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  { src: "00.jpg", text: "First Image" },
  { src: "01.jpg", text: "Second Image" },
  { src: "02.jpg", text: "Third Image" },
  { src: "03.jpg", text: "Fourth Image" },
  { src: "04.jpg", text: "Fifth Image" },
  { src: "05.jpg", text: "Sixth Image" },
  { src: "06.jpg", text: "Seventh Image" },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 3;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const Slider = () => {
  const [imgIndex, setImgIndex] = useState(1);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setImgIndex((prev) => (prev === imgs.length - 3 ? 1 : prev + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 3) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 1) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative overflow-hidden w-full mt-[14vh]">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{
          translateX: `-${(imgIndex - 1) * (100 / 3)}%`, // Adjust to show 3 images
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex gap-4" // Use flex for horizontal layout
      >
        <Images />
      </motion.div>
    </div>
  );
};

const Images = () => {
  return (
    <>
      {imgs.map((img, idx) => (
        <div
          key={idx}
          className="shrink-0 w-1/3 h-[650px] bg-gray-200 rounded overflow-hidden flex items-center justify-center" // Show each image at 1/3 width
        >
          
        </div>
      ))}
    </>
  );
};
