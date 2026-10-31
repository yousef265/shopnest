import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-900",

    secondary: "bg-surface-secondary text-text-primary hover:bg-surface-tertiary",

    outline: "border border-border bg-transparent text-text-primary hover:bg-surface-secondary",

    ghost: "bg-transparent text-text-primary hover:bg-surface-secondary",

    danger: "bg-error text-white hover:opacity-90",
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: "min-h-9 px-3 text-sm",
    md: "min-h-11 px-5 text-sm",
    lg: "min-h-12 px-6 text-base",
};

const Button = ({ variant = "primary", size = "md", isLoading = false, disabled = false, type = "button", className = "", children, ...props }: ButtonProps) => {
    const isDisabled = disabled || isLoading;

    return (
        <button
            type={type}
            disabled={isDisabled}
            className={[
                "inline-flex items-center justify-center gap-2",
                "rounded-button font-medium",
                "transition-colors duration-200",
                "focus-visible:outline-2 focus-visible:outline-offset-2",
                "focus-visible:outline-brand-600",
                "disabled:pointer-events-none disabled:opacity-50",
                variantStyles[variant],
                sizeStyles[size],
                className,
            ].join(" ")}
            {...props}
        >
            {isLoading && <span aria-hidden="true" className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent" />}

            {children}
        </button>
    );
};

export default Button;
