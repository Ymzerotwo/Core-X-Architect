import React from "react";
import { LayoutGrid, Plus, Folder } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface SidebarProps {
    onNewProject: () => void;
}

export function Sidebar({ onNewProject }: SidebarProps) {
    return (
        <aside className="w-64 bg-secondary/10 border-r border-secondary/30 flex flex-col p-4 flex-shrink-0 relative z-20">
            <div className="flex items-center gap-2 mb-8 px-2">
                <LayoutGrid className="text-primary w-6 h-6" />
                <span className="text-xl font-bold tracking-tight">Core-X</span>
            </div>

            <Button
                variant="primary"
                className="mb-8 w-full justify-start pl-4"
                onClick={onNewProject}
            >
                <Plus className="mr-2 h-5 w-5" /> New Project
            </Button>

            <div className="flex-1 overflow-y-auto">
                <h3 className="text-xs font-bold text-text/50 uppercase tracking-wider mb-3 px-2">Previous Projects</h3>
                <div className="space-y-1">
                    {[1, 2, 3].map((i) => (
                        <button
                            key={i}
                            className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/30 text-text/80 hover:text-text transition-colors text-left text-sm font-medium group"
                        >
                            <Folder className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
                            <span>Project Alpha v{i}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-auto pt-4 border-t border-secondary/30 text-center">
                <span className="text-xs text-text/40 font-mono">Ver 0.0.0</span>
            </div>
        </aside>
    );
}
