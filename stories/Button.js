import React from "react"
import PropTypes from "prop-types"
import "./button.css"

export const Button = ({
  color,
  variant,
  startIcon,
  endIcon,
  disableShadow,
  disabled,
  size,
  label,
  ...props
}) => {
  const shadow = disableShadow ? "" : "shadow"

  const isDisabled = disabled ? "disabled:opacity-25 cursor-default" : ""

  const chooseVariantStyle = {
    default: ``,
    outline: `border-2 bg-transparent hover:bg-opacity-25`,
    text: `bg-transparent hover:bg-opacity-25`,
  }

  const chooseVariantColor = {
    default: {
      default: "text-gray-600 bg-gray-300 hover:bg-gray-400",
      outline: "text-gray-200 border-gray-200 hover:bg-gray-200",
      text: "text-gray-200 hover:bg-gray-200",
    },
    primary: {
      default: "text-white bg-blue-600 hover:bg-blue-900",
      outline: "text-blue-600 border-blue-600 hover:bg-blue-600",
      text: "text-blue-600 hover:bg-blue-600",
    },
    secondary: {
      default: "text-white bg-gray-600 hover:bg-gray-800",
      outline: "text-gray-600 border-gray-600 hover:bg-gray-600",
      text: "text-gray-600 hover:bg-gray-600",
    },
    danger: {
      default: "text-white bg-red-600 hover:bg-red-900",
      outline: "text-red-600 border-red-600 hover:bg-red-900",
      text: "text-red-600 hover:bg-red-900",
    },
  }

  return (
    <button
      type="button"
      disabled
      className={[
        "flex items-center font-noto px-4 py-2 rounded-lg focus:outline-none",
        `text-${size}`,
        chooseVariantStyle[variant],
        chooseVariantColor[color][variant],
        shadow,
        isDisabled,
      ].join(" ")}
      {...props}
    >
      <span class="mr-2 material-icons">{startIcon}</span>
      {label}
      <span class="ml-2 material-icons">{endIcon}</span>
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disableShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(["default", "primary", "secondary", "danger"]),
  variant: PropTypes.oneOf(["default", "outline", "text"]),
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
}

Button.defaultProps = {
  label: "Button",
  size: "md",
  disableShadow: false,
  disabled: false,
  color: "default",
  variant: "default",
}
