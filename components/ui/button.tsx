// components/ui/button.tsx
import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 text-white font-medium rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };