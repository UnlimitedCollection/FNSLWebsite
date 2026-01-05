import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className = "",
            variant = "primary",
            size = "md",
            icon,
            iconPosition = "right",
            isLoading,
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        const baseStyles =
            "inline-flex items-center justify-center rounded-lg font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

        const variants = {
            primary:
                "bg-primary text-slate-900 hover:bg-primary-dark focus:ring-primary shadow-sm hover:shadow-md",
            secondary:
                "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 focus:ring-slate-900",
            outline:
                "border-2 border-slate-200 text-slate-900 hover:border-primary hover:text-primary-dark dark:border-gray-700 dark:text-white dark:hover:border-primary dark:hover:text-primary bg-transparent",
            ghost:
                "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/10",
        };

        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-11 px-6 text-sm",
            lg: "h-14 px-8 text-base",
        };

        const sizeClasses = sizes[size];
        const variantClasses = variants[variant];

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${sizeClasses} ${variantClasses} ${className}`}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && (
                    <span className="mr-2 size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                )}
                {!isLoading && icon && iconPosition === "left" && (
                    <span className="mr-2">{icon}</span>
                )}
                {children}
                {!isLoading && icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
            </button>
        );
    }
);

Button.displayName = "Button";
