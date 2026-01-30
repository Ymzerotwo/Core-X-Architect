"use client";

import { motion } from "framer-motion";
import { LayoutTemplate, Palette, Moon, Sun, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type FormData = z.infer<typeof schema>;

export default function Home() {
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
    // Apply theme only after loading to prevent overwriting localStorage with initial default
    if (isLoaded) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, isLoaded]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <main className="min-h-screen w-full bg-background text-text transition-colors duration-300">
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 backdrop-blur-sm bg-background/80 border-b border-secondary">
        <div className="text-2xl font-bold text-primary flex items-center gap-2">
          <Palette className="w-8 h-8" />
          <span>Core-X</span>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-secondary text-primary hover:bg-accent hover:text-white transition-all duration-300"
        >
          {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
        </button>
      </nav>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-32 px-6 max-w-7xl mx-auto"
      >
        <section className="text-center mb-20">
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tight"
          >
            Your AI <span className="text-primary">Backend</span> Architect
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-text/80 max-w-3xl mx-auto mb-10"
          >
            Generate secure, production-ready backend code in seconds.
            Powered by <span className="font-bold text-accent">Gemini</span>.
            Stop wasting time on boilerplate and focus on business logic.
          </motion.p>
          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            <Button variant="primary" size="lg">
              Start Generating <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button variant="secondary" size="lg">
              View Examples
            </Button>
          </motion.div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Secure by Design",
              icon: <LayoutTemplate className="w-8 h-8 mb-4 text-primary" />,
              desc: "OWASP-compliant code generation with automatic input validation and sanitization built-in.",
            },
            {
              title: "Powered by Gemini",
              icon: <Palette className="w-8 h-8 mb-4 text-primary" />, // Using Palette temporarily, ideally use a Brain or Sparkles icon
              desc: "Leveraging Google's advanced AI to understand your schema and requirements deeply.",
            },
            {
              title: "Production Ready",
              icon: <Moon className="w-8 h-8 mb-4 text-primary" />, // Using Moon temporarily
              desc: "Clean, modular, and documented code structures that act as a solid foundation for scale.",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-secondary/20 p-8 rounded-3xl relative overflow-hidden group hover:bg-secondary/30 transition-colors"
            >
              <div className="relative z-10">
                {card.icon}
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="opacity-90 leading-relaxed">{card.desc}</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </section>

        <section className="bg-secondary/30 rounded-[3rem] p-12 mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <motion.div
                initial={{ rotate: -2 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="bg-background border-2 border-secondary p-8 rounded-2xl shadow-xl font-mono text-sm overflow-hidden"
              >
                <div className="flex gap-2 mb-6 border-b border-secondary pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs opacity-50">server.ts</span>
                </div>
                <div className="space-y-2 text-text/80">
                  <p><span className="text-primary">import</span> express <span className="text-primary">from</span> &apos;express&apos;;</p>
                  <p><span className="text-primary">const</span> app = express();</p>
                  <p className="text-accent">{`// Generated Secure Endpoint`}</p>
                  <p>app.post(<span className="text-green-600">&apos;/api/v1/auth&apos;</span>, <span className="text-primary">async</span> (req, res) ={">"} {`{`}</p>
                  <p className="pl-4">  <span className="text-primary">try</span> {`{`}</p>
                  <p className="pl-8">    <span className="text-primary">const</span> {`{ email }`} = schema.parse(req.body);</p>
                  <p className="pl-8">    <span className="text-accent">await</span> AuthService.login(email);</p>
                  <p className="pl-4">  {`}`}</p>
                  <p>{`}`});</p>
                </div>
              </motion.div>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-bold">Code that writes itself</h2>
              <p className="text-lg text-text/70">
                Define your data models and requirements, and let Core-X Architect handle the heavy lifting.
                We generate the routing, controllers, services, and database schemas for you.
              </p>
              <ul className="space-y-4">
                {[
                  "Node.js & Python Support",
                  "Auto-generated Swagger Docs",
                  "Docker Configuration",
                  "CI/CD Pipelines"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-lg font-medium"
                  >
                    <div className="p-1 rounded-full bg-accent/20 text-accent">
                      <LayoutTemplate size={16} />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <NewsletterSection />
      </motion.div>
    </main>
  );
}

function NewsletterSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  return (
    <section className="mb-20 text-center max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
      <p className="text-text/70 mb-8">
        Join our newsletter to receive the latest updates about Core-X features.
        Powered by <code className="bg-secondary px-1 rounded">react-hook-form</code> and <code className="bg-secondary px-1 rounded">zod</code>.
      </p>

      {isSubmitSuccessful ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-4 rounded-xl font-medium"
        >
          Thanks for subscribing! We&apos;ll be in touch.
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="flex-1 w-full">
              <Input
                {...register("email")}
                placeholder="Enter your email"
                error={errors.email?.message}
                className="bg-secondary/30 border-2"
              />
            </div>
            <Button
              type="submit"
              isLoading={isSubmitting}
              className="w-full sm:w-auto whitespace-nowrap"
              size="lg"
            >
              Subscribe
            </Button>
          </div>
        </form>
      )}
    </section>
  );
}
