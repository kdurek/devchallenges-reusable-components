import React, { useState } from "react"
import PropTypes from "prop-types"
import "./tailwind.css"

export const Input = ({
  error,
  disabled,
  helperText,
  value,
  startIcon,
  endIcon,
  smallSize,
  fullWidth,
  multiline,
  row,
  ...props
}) => {
  const [focus, setFocus] = useState(false)

  return (
    <div className="flex flex-col">
      <label
        className={`font-noto text-xs text-gray-900 ${error && "text-red-600"}`}
      >
        Label
      </label>
      <div
        className={[
          "flex rounded-lg border border-gray-400 hover:border-gray-900 bg-transparent",
          `${fullWidth ? "w-full" : "w-48"}`,
          `${smallSize ? "px-2 py-2" : "px-4 py-4"}`,
          `${error && "border-red-600 hover:border-gray-900"}`,
          `${focus && !error && "border-blue-600"}`,
          `${disabled && "border-none bg-gray-200"}`,
        ].join(" ")}
      >
        {startIcon && (
          <span
            className={`text-gray-400 material-icons ${
              focus && "text-blue-600"
            } ${smallSize ? "pr-2" : "pr-4"}`}
          >
            {startIcon}
          </span>
        )}
        {multiline ? (
          <textarea
            className={[
              "w-full resize-none focus:outline-none placeholder-gray-400 font-noto font-medium text-sm text-gray-900 bg-transparent",
            ].join(" ")}
            rows={row}
            disabled={disabled}
            defaultValue={value}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            {...props}
          />
        ) : (
          <input
            className={[
              "w-full focus:outline-none placeholder-gray-400 font-noto font-medium text-sm text-gray-900 bg-transparent",
            ].join(" ")}
            placeholder="Placeholder"
            disabled={disabled}
            defaultValue={value}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            {...props}
          />
        )}
        {endIcon && (
          <span
            className={`text-gray-400 material-icons ${
              focus && "text-blue-600"
            } ${smallSize ? "pl-2" : "pl-4"}`}
          >
            {endIcon}
          </span>
        )}
      </div>
      <label
        className={`font-noto text-xs text-gray-400 ${error && "text-red-600"}`}
      >
        {helperText}
      </label>
    </div>
  )
}

Input.propTypes = {
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  value: PropTypes.string,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  smallSize: PropTypes.bool,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  row: PropTypes.number,
}

Input.defaultProps = {}
