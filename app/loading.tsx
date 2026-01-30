"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-background">
            <div className="relative flex flex-col items-center">
                {/* Outer rotating ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="h-16 w-16 rounded-full border-4 border-secondary border-t-primary"
                />

                {/* Inner pulsing dot */}
                <motion.div
                    animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-sm"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 font-mono text-sm font-medium text-text/60 animate-pulse"
                >
                    Initializing Core-X Architect...
                </motion.p>
            </div>
        </div>
    );
}
