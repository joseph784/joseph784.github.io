import React, { useEffect, useState } from "react";
import "./styles.css";

const RotatingWords = () => {
  const words = ["Computer Science", "Business"]; // Replace with your list of words
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 10000); // Adjust the interval duration as desired

    return () => {
      clearInterval(interval);
    };
  }, [words.length]);

  return (
    <div className="word-animation">
      {words.map((word, index) => (
        <span key={index} style={{ "--index": index, zIndex: index === currentIndex ? 1 : 0 }}>
          {word}
        </span>
      ))}
    </div>
  );
};

export default RotatingWords;
