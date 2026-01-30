import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = "", label, error, ...props }, ref) => {
        return (
            <div className="flex w-full flex-col gap-2 text-left">
                {label && (
                    <label className="text-sm font-semibold text-text opacity-90">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={`w-full rounded-xl border-2 bg-secondary/10 p-4 font-medium text-text outline-none transition-all placeholder:text-text/40 focus:border-primary focus:bg-background ${error
                            ? "border-red-500 focus:border-red-500"
                            : "border-transparent text-text"
                        } ${className}`}
                    {...props}
                />
                {error && <span className="text-sm text-red-500">{error}</span>}
            </div>
        );
    }
);

Input.displayName = "Input";
