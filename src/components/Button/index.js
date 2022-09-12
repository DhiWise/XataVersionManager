import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder6: "rounded-radius6" };
const variants = {
  OutlineBluegray100:
    "border border-bluegray_100 border-solid text-bluegray_600",
  FillBlue700: "bg-blue_700 text-white_A700",
  FillRed700: "bg-red_700 text-white_A700",
  FillDeeppurple500: "bg-deep_purple_500 text-white_A700",
  FillBluegray901: "bg-bluegray_901 text-white_A700",
};
const sizes = { sm: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder6"]),
  variant: PropTypes.oneOf([
    "OutlineBluegray100",
    "FillBlue700",
    "FillRed700",
    "FillDeeppurple500",
    "FillBluegray901",
  ]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder6",
  variant: "OutlineBluegray100",
  size: "sm",
};

export { Button };
