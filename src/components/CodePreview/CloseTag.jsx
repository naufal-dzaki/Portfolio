import React from "react";

const CloseTag = ({ nameTag }) => {
  return (
    <span className="text-nd-code-tag">
      &lt;/<span className="text-nd-code-nametag">{nameTag}</span>&gt;
    </span>
  );
};

export default CloseTag;
