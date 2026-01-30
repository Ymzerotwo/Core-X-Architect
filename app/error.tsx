"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background px-6 text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-8"
            >
                <div className="absolute inset-0 animate-pulse rounded-full bg-red-500/10 blur-3xl" />
                <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl bg-red-500/10 border-2 border-red-500/20">
                    <AlertTriangle className="h-16 w-16 text-red-500" />
                </div>
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4 text-3xl font-black tracking-tight text-text sm:text-5xl"
            >
                System <span className="text-red-500">Malfunction</span>
            </motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-10 max-w-md text-lg text-text/70"
            >
                Something unexpected happened. Our architects are investigating the structural integrity.
            </motion.p>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4"
            >
                <Button onClick={() => reset()} variant="primary" size="lg">
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    Try Again
                </Button>
                <Button onClick={() => window.location.href = "/"} variant="outline" size="lg">
                    Go Home
                </Button>
            </motion.div>
        </div>
    );
}
