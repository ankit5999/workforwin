"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, ArrowBigRight, RefreshCw } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function RefreshWarningDialog() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Check if the page was refreshed
        if (localStorage.getItem("refreshDetected") === "true") {
            localStorage.removeItem("refreshDetected");
            setIsOpen(true);
        }

        const handleBeforeUnload = () => {
            localStorage.setItem("refreshDetected", "true");
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    const handleConfirm = () => {
        setIsOpen(false);
        router.push("/"); // Redirect user to home page
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <Dialog open={isOpen}>
                    <DialogContent className="sm:max-w-md border-none outline-none max-w-[90vw] rounded-lg" hidden>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <DialogHeader>
                                <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-full bg-yellow-100">
                                        <AlertTriangle className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <DialogTitle className="text-xl">Page Refresh Detected</DialogTitle>
                                </div>
                                <DialogDescription className="pt-4 text-base">
                                    The page was refreshed. Any unsaved changes may be lost. Are you sure you want to continue?
                                </DialogDescription>
                            </DialogHeader>

                            <div className="my-6 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                                <div className="flex items-start gap-3">
                                    <RefreshCw className="w-5 h-5 text-yellow-600 mt-0.5" />
                                    <p className="text-sm text-yellow-800">
                                        This action cannot be undone. Please make sure you have saved any important changes before proceeding.
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center gap-3">
                                <Button
                                    variant="outline"
                                    onClick={() => setIsOpen(false)}
                                    className="gap-2 w-full"
                                >
                                    <ArrowBigRight className="w-4 h-4" />
                                    Abort
                                </Button>
                                <Button
                                    variant="destructive"
                                    onClick={handleConfirm}
                                    className="gap-2 w-full"
                                >
                                    <RefreshCw className="w-4 h-4" />
                                    Continue
                                </Button>
                            </div>
                        </motion.div>
                    </DialogContent>
                </Dialog>
            )}
        </AnimatePresence>
    );
}
