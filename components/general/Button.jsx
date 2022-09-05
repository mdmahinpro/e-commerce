import React from "react";

function Button({ extraStyle, text }) {
  return (
    <div>
      <button
        type="button"
        className={`inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md  ${extraStyle} hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 `}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
