"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "destructive" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  secondary: "bg-surface-sunken text-text-primary hover:bg-surface-default border border-border-default",
  destructive: "bg-danger text-white hover:bg-danger/90 border border-transparent",
  primary:
    "bg-brand-intelligence text-text-inverse hover:bg-primary-hover border border-transparent",
  outline:
    "border border-border-default bg-surface-default text-text-primary hover:bg-surface-sunken",
  ghost:
    "border border-transparent bg-transparent text-text-link hover:bg-brand-intelligence/5",
  link: "border border-transparent bg-transparent text-text-link hover:underline p-0 h-auto min-h-0",
};

const sizeClasses: Record<ButtonSize, string> = {
  icon: "h-9 w-9 p-0 flex items-center justify-center",
  sm: "px-3 py-1.5 text-xs font-medium",
  md: "px-4 py-2 text-sm font-medium",
  lg: "px-4 py-2.5 text-sm font-semibold",
};

function getButtonClassName({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}) {
  return [
    "inline-flex items-center justify-center gap-2 rounded-lg transition-colors",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus",
    "disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    variant === "link" ? "" : sizeClasses[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    leftIcon,
    rightIcon,
    fullWidth = false,
    className = "",
    href,
    children,
    type = "button",
    ...props
  },
  ref,
) {
  const classes = getButtonClassName({ variant, size, fullWidth, className });
  const content = (
    <>
      {leftIcon}
      {children}
      {rightIcon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button ref={ref} type={type} className={classes} {...props}>
      {content}
    </button>
  );
});
