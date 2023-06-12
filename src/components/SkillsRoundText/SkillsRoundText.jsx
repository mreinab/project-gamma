import React, { useEffect, useState } from "react";
import "../SkillsRoundText/SkillsRoundText.scss";

function SkillsRoundText() {
  const [text, setText] = useState(
    "| functionality | vision | creativity | vision"
  );

  useEffect(() => {
    const transformedText = text.split("").map((char, i) => (
      <span key={i} style={{ transform: `rotate(${i * 8}deg)` }}>
        {char}
      </span>
    ));
    setText(transformedText);
  }, []);

  return (
    <div className="circle">
      <div className="img__star--rounded"></div>
      <div className="text--rounded"></div>
    </div>
  );
}

export default SkillsRoundText;
