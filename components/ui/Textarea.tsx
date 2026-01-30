import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className = "", label, error, ...props }, ref) => {
        return (
            <div className="flex w-full flex-col gap-2 text-left">
                {label && (
                    <label className="text-sm font-semibold text-text opacity-90">
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    className={`w-full min-h-[120px] rounded-xl border-2 bg-secondary/10 p-4 font-medium text-text outline-none transition-all placeholder:text-text/40 focus:border-primary focus:bg-background ${error
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

Textarea.displayName = "Textarea";
