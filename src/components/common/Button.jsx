import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

const Button = ({
  onClick,
  children,
  className,
  disabled,
  type,
  isLoading,
  style,
  size,
  icon,
  color,
}) => {
  const baseClass = twMerge(
    "rounded-lg",
    "font-semibold",
    "focus:outline-none",
    size === "small"
      ? "py-1 px-3 text-sm"
      : size === "large"
      ? "py-3 px-6 text-lg"
      : "py-2 px-4 text-base",
    color === "blue"
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : color === "green"
      ? "bg-green-600 hover:bg-green-700 text-white"
      : color === "red"
      ? "bg-red-600 hover:bg-red-700 text-white"
      : "",
    disabled ? "opacity-50 cursor-not-allowed" : "",
    className
  );

  const buttonStyle = isLoading ? { ...style, pointerEvents: "none" } : style;

  return (
    <button
      className={baseClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={buttonStyle}
    >
      {isLoading ? (
        <FontAwesomeIcon
          icon="spinner"
          spin
          className={`text-xl ${
            color === "white" ? "text-white" : "text-current"
          }`}
        />
      ) : (
        <>
          {icon && (
            <FontAwesomeIcon
              icon={icon}
              className={`mr-2 ${
                color === "white" ? "text-white" : "text-current"
              }`}
            />
          )}
          {children}
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  isLoading: PropTypes.bool,
  style: PropTypes.object,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  icon: PropTypes.string,
  color: PropTypes.oneOf(["blue", "green", "red", "white"]),
};

Button.defaultProps = {
  className: "",
  disabled: false,
  type: "button",
  isLoading: false,
  style: {},
  size: "medium",
  icon: null,
  color: "blue",
};

export default Button;
