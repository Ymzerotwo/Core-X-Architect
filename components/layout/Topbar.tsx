import React from "react";
import { Settings, Moon, Sun } from "lucide-react";
import Link from "next/link";

interface TopbarProps {
    theme: string;
    toggleTheme: () => void;
}

export function Topbar({ theme, toggleTheme }: TopbarProps) {
    return (
        <header className="h-16 border-b border-secondary/30 flex items-center justify-between px-6 bg-background/50 backdrop-blur-sm z-10">
            <div className="flex items-center text-sm breadcrumbs text-text/50">
                <span>Home</span>
                <span className="mx-2">/</span>
                <span className="text-text font-medium">New Project Wizard</span>
            </div>

            <div className="flex items-center gap-3">
                <Link href="/settings">
                    <button
                        className="p-2 rounded-full hover:bg-secondary/30 text-text/70 transition-colors"
                    >
                        <Settings size={20} />
                    </button>
                </Link>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-secondary/30 text-text/70 transition-colors"
                >
                    {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                </button>
            </div>
        </header>
    );
}
