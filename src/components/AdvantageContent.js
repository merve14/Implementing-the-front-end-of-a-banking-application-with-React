import React from "react";

const AdvantageContent = ({ img, h3, text }) => {
  return (
    <div className="feature-item">
      <img src={img} alt="Chat Icon" />
      <h3 className="feature-item-title">{h3}</h3>
      <p>{text}</p>
    </div>
  );
};

export default AdvantageContent;
