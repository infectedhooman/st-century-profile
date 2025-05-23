
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkle } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Tech stack icon slugs for the icon cloud
  const techStackIcons = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodejs",
    "express",
    "nextdotjs",
    "tailwindcss",
    "postgresql",
    "firebase",
    "vercel",
    "jest",
    "git",
    "github",
    "visualstudiocode",
    "mongodb",
    "graphql",
    "redux",
    "docker",
    "aws",
    "figma",
    "sass",
    "webpack",
    "babel",
    "styledcomponents",
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-8">
            <ScrollReveal direction="left" delay={200}>
              <div className="inline-flex items-center gap-2">
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/20">
                  <span className="inline-flex items-center gap-1.5">
                    <Sparkle className="h-4 w-4" /> Full-Stack & AI Engineer
                  </span>
                </span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={400}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                Building intelligent digital experiences
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={600}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                I create robust web applications and AI-powered solutions that solve real-world problems
                and deliver exceptional user experiences.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={800}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  onClick={scrollToProjects}
                  className="relative overflow-hidden group transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(124,58,237,0.2)]"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 transform -translate-x-full animate-[shimmer_2.5s_infinite] group-hover:animate-[shimmer_1s_infinite]" />
                  <span className="relative z-10 flex items-center gap-1.5">View My Work <Sparkle className="h-4 w-4 transition-all duration-300 group-hover:rotate-12" /></span>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild 
                  className="group transition-all duration-300 border-primary/30 hover:border-primary/80 hover:bg-primary/5"
                >
                  <a href="#contact" className="flex items-center gap-1.5">Get In Touch</a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <ScrollReveal direction="right" delay={600}>
              <div className="w-full h-96 relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 opacity-30 blur-xl" />
                <div className="relative w-full h-full z-10">
                  <IconCloud 
                    iconSlugs={techStackIcons}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="rounded-full bg-background/80 p-3 shadow-lg backdrop-blur hover:bg-background transition-colors duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] border border-border/50"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
        </a>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 -left-4 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-10 w-72 h-72 bg-[#D946EF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#0EA5E9]/10 rounded-full blur-3xl" />
      
      {/* Modern grid pattern with soft shimmer */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03] dark:opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, var(--border) 1px, transparent 1px), 
                           linear-gradient(180deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
    </section>
  );
};

export default Hero;
