import React from 'react';

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative inline-block">
      <div className="group">
        {children}
        <div className="opacity-0 w-max invisible group-hover:opacity-100 group-hover:visible absolute z-10 bg-black text-white text-center py-2 px-4 rounded-lg text-xs bottom-full left-1/2 transform -translate-x-1/2 transition-all duration-300">
          {text}
          <svg className="absolute text-black h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve">
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0"></polygon>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
