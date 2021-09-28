import React from "react";
import "./Card.css";
import { Card } from "antd";

const CardPhoto = ({ title, src }) => {
  return (
    <div className="card">
      <Card
        hoverable
        style={{ width: 150 }}
        cover={<img alt={title} src={src} body={title} />}
      />
    </div>
  );
};

export default CardPhoto;
