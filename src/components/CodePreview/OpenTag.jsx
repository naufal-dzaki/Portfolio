import React from "react";

const OpenTag = ({ nameTag, classProperty }) => {
  return (
    <span className="text-nd-code-tag">
      &lt;<span className="text-nd-code-nametag">{nameTag}</span>{" "}
      <span className="text-nd-code-class">class</span>
      {""}
      <span className="text-nd-code-char">
        =&quot;<span className="text-nd-code-property">{classProperty}</span>
        &quot;
      </span>
      {""}
      &gt;
    </span>
  );
};

export default OpenTag;
