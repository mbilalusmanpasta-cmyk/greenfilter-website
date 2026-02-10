import React from "react";

/**
 * Premium CTA button with brand color and micro-interactions.
 * K&N-style: big, rounded, with hover/focus/active states.
 */
const PrimaryButton = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  asLink = false,
  to,
  icon: Icon,
  ...rest
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 w-full sm:w-auto font-semibold rounded-xl py-4 px-8 text-white bg-brand shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-brand-dark disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_10px_40px_-10px_rgba(0,173,35,0.5)] hover:scale-[1.02] active:scale-[0.98]";

  const Component = asLink ? "a" : "button";
  const linkProps = asLink && to ? { href: to } : {};
  const buttonProps = !asLink ? { type, disabled, onClick } : {};

  return (
    <Component
      className={`${base} ${className}`}
      {...linkProps}
      {...buttonProps}
      {...rest}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" aria-hidden />}
    </Component>
  );
};

export default PrimaryButton;
