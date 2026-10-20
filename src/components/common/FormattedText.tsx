import React from "react";

interface FormattedTextProps {
  text?: string;
  className?: string;
}

/**
 * Component hỗ trợ render text có định dạng đặc biệt (gạch chân <u>...</u>, in đậm **...**)
 * An toàn, không dùng dangerouslySetInnerHTML, tương thích 100% với React.
 */
export default function FormattedText({ text, className = "" }: FormattedTextProps) {
  if (!text) return null;

  // Tách văn bản theo thẻ <u>...</u>
  const uParts = text.split(/(<u>[\s\S]*?<\/u>)/gi);

  return (
    <span className={className}>
      {uParts.map((part, index) => {
        const uMatch = part.match(/^<u>([\s\S]*?)<\/u>$/i);
        if (uMatch) {
          return (
            <span
              key={`u-${index}`}
              className="underline font-bold decoration-indigo-600 decoration-2 underline-offset-4 text-indigo-950 px-0.5"
            >
              {uMatch[1]}
            </span>
          );
        }
        return part;
      })}
    </span>
  );
}
