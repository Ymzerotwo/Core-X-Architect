"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Upload, ArrowRight, Check, Code, Database, Server, FileJson, Lock, User as UserIcon, Cloud, FileText, Activity, LayoutDashboard, BrainCircuit, CreditCard, TestTube } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Textarea";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

export default function Home() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [theme, setTheme] = useState("light");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load persisted theme on mount
    const timer = setTimeout(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
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

  // Form State
  const [formData, setFormData] = useState({
    description: "",
    language: "typescript",
    database: "supabase",
    features: [] as string[],
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const toggleFeature = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleGenerate = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsLoading(false);
    alert("Backend generation started! (Simulation)");
  };

  const handleNewProject = () => {
    setStep(1);
    setFileName("");
    setFormData({
      description: "",
      language: "typescript",
      database: "supabase",
      features: [],
    });
  };

  return (
    <div className="flex h-screen bg-background text-text transition-colors duration-300 overflow-hidden">
      <Sidebar onNewProject={handleNewProject} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar theme={theme} toggleTheme={toggleTheme} />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 relative">
          <div className="max-w-4xl mx-auto h-full">

            {/* Header Text inside Main - Simplified from previous */}
            <div className="text-center mb-8">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">AI Architect</span>
              <h1 className="text-3xl md:text-4xl font-black mb-2">Build Your Backend</h1>
            </div>

            {/* Wizard Container - Reused */}
            <div className="bg-secondary/20 rounded-[2rem] p-6 md:p-10 relative overflow-hidden min-h-[500px]">
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary/30">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: step === 1 ? "50%" : "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h2 className="text-xl font-bold">1. Project Overview</h2>
                      <p className="text-text/70 text-sm">Define your project requirements.</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <Textarea
                          label="Project Description"
                          placeholder="Describe your backend requirements..."
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          className="bg-background min-h-[160px]"
                        />
                        <div className="flex flex-wrap gap-2 mt-3 pl-1">
                          <span className="text-xs text-text/50 font-medium py-1">Try examples:</span>
                          {[
                            { label: "E-commerce", text: "A full-featured e-commerce platform with product management, shopping cart, user authentication, and payment gateway integration." },
                            { label: "Chat App", text: "Real-time chat application supporting private messaging, group channels, file sharing, and user presence indicators." },
                            { label: "LMS System", text: "Learning Management System with student enrollment, course content management, quizzes, and progress tracking." }
                          ].map((item) => (
                            <button
                              key={item.label}
                              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium border border-primary/20"
                              onClick={() => setFormData(prev => ({ ...prev, description: item.text }))}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-text opacity-90">
                          Data Structure / Schema
                        </label>
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          className="border-2 border-dashed border-primary/30 rounded-xl p-8 hover:bg-primary/5 hover:border-primary transition-all cursor-pointer group text-center bg-background/50"
                        >
                          <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept=".json,.sql,.db,image/*"
                            onChange={handleFileChange}
                          />
                          <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            {fileName ? <FileJson className="text-primary w-6 h-6" /> : <Upload className="text-primary w-6 h-6" />}
                          </div>
                          {fileName ? (
                            <div>
                              <p className="font-bold text-primary">{fileName}</p>
                              <p className="text-xs text-text/50">Click to replace</p>
                            </div>
                          ) : (
                            <div>
                              <p className="font-bold text-sm">Upload Schema (JSON/SQL) or Paste DB Diagram</p>
                              <p className="text-xs text-text/50 mt-1">Supports Gemini Vision for diagram images</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end pt-2">
                      <Button
                        size="md"
                        onClick={() => setStep(2)}
                        disabled={!formData.description && !fileName}
                      >
                        Continue <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h2 className="text-xl font-bold">2. Stack Configuration</h2>
                      <p className="text-text/70 text-sm">Select your tech stack.</p>
                    </div>

                    {/* Language Selection */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-sm flex items-center gap-2">
                        <Code size={16} /> Language
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <SelectCard
                          label="TypeScript"
                          active={formData.language === "typescript"}
                          onClick={() => setFormData({ ...formData, language: "typescript" })}
                        />
                        <SelectCard
                          label="Python"
                          isComingSoon
                        />
                        <SelectCard
                          label="Go"
                          isComingSoon
                        />
                      </div>
                    </div>

                    {/* Database Selection */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-sm flex items-center gap-2">
                        <Database size={16} /> Database
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <SelectCard
                          label="Supabase"
                          active={formData.database === "supabase"}
                          onClick={() => setFormData({ ...formData, database: "supabase" })}
                        />
                        <SelectCard
                          label="PostgreSQL"
                          isComingSoon
                        />
                        <SelectCard
                          label="MongoDB"
                          isComingSoon
                        />
                      </div>
                    </div>

                    {/* Features Selection */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-sm flex items-center gap-2">
                        <Server size={16} /> Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { id: "Auth (JWT)", label: "Auth (JWT)", icon: <Lock size={16} className="text-primary" />, desc: "Generate login, signup & auth endpoints" },
                          { id: "User Profiles", label: "User Profiles", icon: <UserIcon size={16} className="text-primary" />, desc: "Generate user profile endpoints" },
                          { id: "Payments", label: "Payment Gateways", icon: <CreditCard size={16} className="text-primary" />, desc: "Add Stripe, PayPal & payment gateways" },
                          { id: "File Storage", label: "File Storage", icon: <Cloud size={16} className="text-primary" />, desc: "Create cloud storage service for files" },
                          { id: "API Documentation (Swagger)", label: "Swagger Docs", icon: <FileText size={16} className="text-primary" />, desc: "Add documentation to understand the project" },
                          { id: "Admin Panel", label: "Admin Dashboard", icon: <LayoutDashboard size={16} className="text-primary" />, desc: "Add dashboard to control the server" },
                          { id: "Real-time Events", label: "Real-time Events", icon: <Activity size={16} className="text-primary" />, desc: "WebSockets & Subscriptions", comingSoon: true },
                          { id: "Vector Search", label: "Vector Search (AI)", icon: <BrainCircuit size={16} className="text-accent" />, desc: "Embeddings & Semantic Search" },
                          { id: "Unit Testing", label: "Unit Testing", icon: <TestTube size={16} className="text-primary" />, desc: "Create unit tests for the project", comingSoon: true },
                        ].map((feat) => (
                          <div
                            key={feat.id}
                            onClick={feat.comingSoon ? undefined : () => toggleFeature(feat.id)}
                            className={`p-4 rounded-xl border flex flex-col gap-2 transition-all relative overflow-hidden ${feat.comingSoon
                              ? "opacity-60 cursor-not-allowed bg-secondary/10 border-transparent grayscale"
                              : formData.features.includes(feat.id)
                                ? "border-primary bg-primary/5 shadow-sm cursor-pointer"
                                : "border-transparent bg-background/60 hover:bg-background/80 cursor-pointer"
                              }`}
                          >
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center gap-2 font-bold text-sm">
                                {feat.icon}
                                {feat.label}
                              </div>
                              {feat.comingSoon ? (
                                <span className="text-[10px] font-bold bg-secondary px-2 py-0.5 rounded-full uppercase tracking-wider opacity-80">Soon</span>
                              ) : (
                                formData.features.includes(feat.id) && <Check size={16} className="text-primary" />
                              )}
                            </div>
                            <p className="text-xs text-text/60 pl-6">{feat.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-6">
                      <Button variant="ghost" onClick={() => setStep(1)} size="sm">
                        Back
                      </Button>
                      <Button
                        size="md"
                        onClick={handleGenerate}
                        isLoading={isLoading}
                        className="min-w-[150px]"
                      >
                        {!isLoading && "Analyze Blueprint"}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function SelectCard({ label, active, isComingSoon, onClick }: { label: string, active?: boolean, isComingSoon?: boolean, onClick?: () => void }) {
  return (
    <div
      onClick={isComingSoon ? undefined : onClick}
      className={`
        relative p-6 rounded-2xl border-2 transition-all duration-200 flex flex-col items-center justify-center gap-2 min-h-[120px]
        ${isComingSoon
          ? "opacity-60 cursor-not-allowed bg-secondary/10 border-transparent grayscale"
          : "cursor-pointer bg-background"
        }
        ${active
          ? "border-primary shadow-[0_0_20px_rgba(var(--primary),0.3)] scale-[1.02]"
          : "border-transparent hover:border-primary/30"
        }
      `}
    >
      {isComingSoon && (
        <span className="absolute top-2 right-2 text-[10px] font-bold bg-secondary px-2 py-1 rounded-full uppercase tracking-wider">
          Soon
        </span>
      )}
      <span className={`font-bold text-lg ${active ? "text-primary" : "text-text"}`}>
        {label}
      </span>
      {active && (
        <motion.div
          layoutId="active-check"
          className="absolute top-2 right-2 text-primary"
        >
          <Check size={16} />
        </motion.div>
      )}
    </div>
  );
}
