"use client";

import { motion } from "framer-motion";
import { Save, Link as LinkIcon, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
    const router = useRouter();
    const [theme, setTheme] = useState("light");
    const [isLoaded, setIsLoaded] = useState(false);
    const [apiUrl, setApiUrl] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        // Load persisted theme and settings
        const timer = setTimeout(() => {
            const savedTheme = localStorage.getItem("theme");
            const savedApiUrl = localStorage.getItem("core_x_api_url");

            if (savedTheme) {
                setTheme(savedTheme);
            }
            if (savedApiUrl) {
                setApiUrl(savedApiUrl);
            }
            setIsLoaded(true);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);
        }
    }, [theme, isLoaded]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const handleSave = async () => {
        setIsSaving(true);
        // Simulate saving delay
        await new Promise(resolve => setTimeout(resolve, 800));
        localStorage.setItem("core_x_api_url", apiUrl);
        setIsSaving(false);
    };

    const handleNewProject = () => {
        router.push("/");
    };

    return (
        <div className="flex h-screen bg-background text-text transition-colors duration-300 overflow-hidden">
            <Sidebar onNewProject={handleNewProject} />

            <div className="flex-1 flex flex-col min-w-0">
                <Topbar theme={theme} toggleTheme={toggleTheme} />

                <main className="flex-1 overflow-y-auto p-4 md:p-8 relative">
                    <div className="max-w-2xl mx-auto h-full pt-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <div className="border-b border-secondary/30 pb-6">
                                <h1 className="text-3xl font-black mb-2">Settings</h1>
                                <p className="text-text/60">Manage your configuration and preferences.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/30">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="p-3 bg-primary/10 rounded-xl">
                                            <LinkIcon className="text-primary w-6 h-6" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold">API Configuration</h2>
                                            <p className="text-sm text-text/60 mt-1">
                                                Connect Core-X Architect to your custom backend or Gemini API endpoint.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <Input
                                            label="API Base URL"
                                            placeholder="https://api.example.com/v1"
                                            value={apiUrl}
                                            onChange={(e) => setApiUrl(e.target.value)}
                                            className="bg-background"
                                        />

                                        <div className="flex items-center gap-2 text-xs text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-900/30">
                                            <AlertCircle size={14} />
                                            <span>Ensure the endpoint is accessible and supports the Core-X protocol.</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-end mt-8">
                                        <Button
                                            onClick={handleSave}
                                            isLoading={isSaving}
                                            size="md"
                                        >
                                            <Save className="mr-2 h-4 w-4" /> Save Changes
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </main>
            </div>
        </div>
    );
}
