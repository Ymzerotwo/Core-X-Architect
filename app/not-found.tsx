"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FileQuestion } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background px-6 text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-8"
            >
                <div className="absolute inset-0 animate-pulse rounded-full bg-secondary/30 blur-3xl" />
                <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl bg-secondary/20 border-2 border-secondary">
                    <FileQuestion className="h-16 w-16 text-primary" />
                </div>
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4 text-4xl font-black tracking-tight text-text sm:text-6xl"
            >
                404 <span className="text-primary">Not Found</span>
            </motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-10 max-w-md text-lg text-text/70"
            >
                Whoops! The blueprint you are looking for doesn&apos;t exist.
                It might have been moved or deleted.
            </motion.p>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <Link href="/">
                    <Button variant="primary" size="lg">
                        Return Home
                    </Button>
                </Link>
            </motion.div>
        </div>
    );
}
