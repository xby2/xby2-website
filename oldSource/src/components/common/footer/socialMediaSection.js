import React from "react";

const SocialMediaSection = props => {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <div className="grid-item social-media">
        {props.logo}
        <div className="social-text">{props.text}</div>
      </div>
    </a>
  );
};

export default SocialMediaSection;
