import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className = "",
            variant = "primary",
            size = "md",
            isLoading,
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-primary text-white hover:bg-accent shadow-lg shadow-primary/25",
            secondary: "bg-secondary text-text hover:bg-secondary/80",
            outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
            ghost: "bg-transparent text-text hover:bg-secondary/30",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-12 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading ? (
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : null}
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
