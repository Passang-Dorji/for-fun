import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface Props {
  text: string;
}

const TypingText = ({ text }: Props) => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const typingDuration = text.length * 0.5 * 900;
    const timeout = setTimeout(() => setIsTypingComplete(true), typingDuration);
    return () => clearTimeout(timeout);
  }, [text]);

  const typingStyle = {
    display: "inline-block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    borderRight: "2px solid #333", 
    animation: `typing ${text.length * 0.2}s steps(${text.length}, end), blink 0.5s step-end infinite`,
  };

  const letterStyle = (index: number) => ({
    display: "inline-block",
    animation: isTypingComplete
      ? `slow-letter-bounce 3s ease-in-out ${index * 0.3}s infinite`
      : undefined,
  });
  const [isOpen, setIsOpen] = useState(false);

  const cardVariants = {
    closed: {
      rotateY: 0, 
    },
    open: {
      rotateY: -180,
    },
  };

  
  return (
        <div className="card-container relative flex justify-center items-center bg-gradient-to-tr from-pink-500 from-10% via-sky-500 via-30% to-purple-500 to-90%">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-ellipsis">
                <div className="text-xl sm:text-4xl lg:text-2xl font-bold text-white text-ellipsis">
                {isTypingComplete ? (
                    <span>
                    {text.split("").map((char, index) => (
                        <span key={index} style={letterStyle(index)}>
                        {char}
                        </span>
                    ))}
                    </span>
                ) : (
                    <div style={typingStyle}>{text}</div>
                )}
                </div>
            </div>

        <motion.div
            className="card-wrapper origin-left min-h-screen relative z-10 w-72 sm:w-96 h-48 sm:h-64 cursor-pointer perspective-1000"
            onClick={() => setIsOpen(!isOpen)}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={cardVariants}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <div className="card front bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg shadow-lg border border-gray-200 flex items-center justify-center absolute backface-hidden w-full h-full">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
                Click to Open
            </h2>
            </div>

            <div className="card inside text-white rounded-lg shadow-lg flex flex-col items-center justify-center absolute w-full h-full rotate-y-180 backface-hidden  bg-gradient-to-br from-pink-500 from-10% via-sky-500 via-30% to-purple-500 to-90%">
            <h2 className="text-2xl sm:text-3xl font-bold rotate-180">Happy New Year</h2>
            <p className="mt-2 text-2xl sm:text-lg text-center rotate-180 ">
                Wishing you a Joyful Year!
            </p>
            </div>
        </motion.div>
        </div>
  );
};

export default TypingText;
