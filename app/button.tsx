import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const AnimatedSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 3,
      },
    },
  };

  const images = [
    { src: "/assets/image17.png", alt: "Image 1" },
    { src: "/assets/frame48.png", alt: "Image 2" },
    { src: "/assets/frame49.png", alt: "Image 3" },
  ];

  return (
    <div ref={ref} className="relative overflow-hidden h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex  justify-center items-end h-screen "
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={imageVariants}
            className={`${
              index < 2 ? "w-[40vw]" : "w-[20vw]"
            } w-full h-auto object-cover rounded-lg shadow-lg`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={controls}
        className="absolute inset-0 flex items-center h-screen w-full bg-black bg-opacity-50 justify-center"
      >
        <div className=" text-white p-4 rounded">
          <h2 className="text-2xl font-bold">Animated Text</h2>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
