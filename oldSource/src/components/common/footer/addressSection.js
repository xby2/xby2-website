import React from "react";

const AddressSection = props => {
  return (
    <div className="grid-item address">
      <span className="address-name">{props.name}</span>
      <br />
      {props.address1}
      <br />
      {props.address2}
      <br />
      {props.city}, {props.state} {props.zip}
      <br />
      {props.phone}
    </div>
  );
};

export default AddressSection;
