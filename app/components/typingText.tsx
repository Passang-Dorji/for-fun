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

  return (
    <div className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
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
  );
};

export default TypingText;
