import React from "react";
import PropTypes from "prop-types";

class TextInput extends React.Component {
  render() {
    const { name, label, value, onChange, placeholder } = this.props;

    var wrapperClass = "form-group";

    return (
      <div className={wrapperClass}>
        <label htmlFor={name}>
          {label}
        </label>
        <div className="field">
          <input
            type="text"
            className="form-control"
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
    );
  }
}
TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default TextInput;
