// New.js
import React from "react";
import Card from "../card/Card"; 
import "./new.css";

const New = () => {
  const cardLimit = 8; 

  return (
    <div>
      <div className="container">
        <div className="new">
          <h2 className="title_h2">новые поступления</h2>
          <div className="line"></div>
          <div className="generalCard">
                        <Card limit={cardLimit} /> 
                    </div>
        </div>
      </div>
    </div>
  );
};

export default New;
