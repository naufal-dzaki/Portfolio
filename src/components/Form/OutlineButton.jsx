import React from "react";

const OutlineButton = ({ children, OnClickEvent, Arg }) => {
  return (
    <button
      className="flex items-center gap-4 text-nd-primary text-base sm:text-lg md:text-xl px-4 py-2 rounded-[15px] border border-nd-primary w-fit"
      onClick={() => OnClickEvent(Arg && Arg)}>
      {children}
    </button>
  );
};

export default OutlineButton;
