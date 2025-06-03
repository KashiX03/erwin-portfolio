import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<erwin.bng />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000); // Delay before calling onComplete
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  // Function to render colored text
  const renderColoredText = (currentText) => {
    const parts = [];
    let remaining = currentText;

    // Check for opening bracket
    if (remaining.includes("<")) {
      const beforeBracket = remaining.substring(0, remaining.indexOf("<"));
      if (beforeBracket)
        parts.push(
          <span key="before" className="text-white">
            {beforeBracket}
          </span>
        );

      parts.push(
        <span key="open-bracket" className="text-yellow-400">
          {"<"}
        </span>
      );
      remaining = remaining.substring(remaining.indexOf("<") + 1);
    }

    // Check for "erwin"
    if (remaining.startsWith("erwin")) {
      const erwinLength = Math.min(5, remaining.length);
      parts.push(
        <span key="erwin" className="text-white">
          {remaining.substring(0, erwinLength)}
        </span>
      );
      remaining = remaining.substring(erwinLength);
    }

    // Check for ".bng"
    if (remaining.startsWith(".bng")) {
      const bngLength = Math.min(4, remaining.length);
      parts.push(
        <span key="bng" className="text-blue-400">
          {remaining.substring(0, bngLength)}
        </span>
      );
      remaining = remaining.substring(bngLength);
    }

    // Check for space and closing bracket
    if (remaining.includes(" />")) {
      const beforeClosing = remaining.substring(0, remaining.indexOf(" />"));
      if (beforeClosing)
        parts.push(
          <span key="before-closing" className="text-white">
            {beforeClosing}
          </span>
        );

      parts.push(
        <span key="closing" className="text-yellow-400">
          {" />"}
        </span>
      );
      remaining = remaining.substring(remaining.indexOf(" />") + 3);
    }

    // Any remaining text
    if (remaining) {
      parts.push(
        <span key="remaining" className="text-white">
          {remaining}
        </span>
      );
    }

    return parts;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {renderColoredText(text)}
        <span className="animate-blink ml-1 text-gray-100"> | </span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
          {" "}
        </div>
      </div>
    </div>
  );
};
