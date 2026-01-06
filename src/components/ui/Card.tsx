import { HTMLAttributes, forwardRef } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className = "", hoverEffect = false, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`bg-surface-dark rounded-xl border border-gray-800 p-6 ${hoverEffect
                    ? "transition-all duration-300 hover:shadow-lg hover:border-primary/50 group"
                    : "shadow-sm"
                    } ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";
