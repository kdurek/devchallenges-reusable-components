import React from "react"
import PropTypes from "prop-types"
import "./button.css"

export const Button = ({
  color,
  disableShadow,
  variant,
  size,
  label,
  ...props
}) => {
  const shadow = disableShadow ? "" : "shadow"

  const whatVariant = {
    filled: "",
    outlined: "bg-opacity-0 border-2",
  }

  const whichColor = {
    default: "text-gray-600 bg-gray-200 hover:bg-gray-400 border-gray-600",
    primary: "text-white bg-blue-600 hover:bg-blue-900 border-blue-600",
    secondary: "text-white bg-gray-600 hover:bg-gray-900",
    danger: "text-white bg-red-600 hover:bg-red-900",
  }

  return (
    <button
      type="button"
      className={[
        "font-noto px-4 py-2 rounded-lg focus:outline-none bg-white",
        `text-${size}`,
        whatVariant[variant],
        whichColor[color],
        shadow,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.oneOf(["default", "primary", "secondary", "danger"]),
  variant: PropTypes.oneOf(["filled", "outlined"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  label: PropTypes.string.isRequired,
  disableShadow: PropTypes.bool,
}

Button.defaultProps = {
  label: "Default",
  variant: "filled",
  color: "default",
  size: "md",
}
