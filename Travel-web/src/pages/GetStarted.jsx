import React from "react";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";
import { Button } from "@/componants/ui/button";
import heroImage from "@/assets/hero-currency.jpg";


const GetStarted = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover", 
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      {/* Floating Currency Symbols */}
      <div className="absolute inset-0 pointer-events-none">
        {["$", "€", "£", "¥"].map((symbol, idx) => (
          <div
            key={idx}
            className="absolute text-6xl opacity-20 animate-float"
            style={{
              animationDelay: `${idx * 0.8}s`,
              top: `${20 + idx * 15}%`,
              left: `${idx * 25}%`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-4 py-20 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-white/10 backdrop-blur-sm">
          <Zap className="w-4 h-4 text-cyan-400 group-hover:animate-pulse" />
          <span className="text-sm font-medium">Trusted by 10M+ users worldwide</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          Exchange Currency <br />
          <span className="relative inline-block font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight">
  {/* Glowing Text */}
  
  <span
    className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent
               animate-pulse-slow"
    style={{
      filter: 'drop-shadow(0 0 12px rgba(34, 211, 238, 0.6))',
    }}
  >
    Anywhere, Anytime
  </span>
  

  {/* Optional: Extra Outer Glow Layer (for depth) */}
  <span
    className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-300 bg-clip-text text-transparent blur-xl opacity-60
               animate-pulse"
    style={{
      filter: 'drop-shadow(0 0 30px rgba(34, 211, 238, 1.5))',
    }}
    aria-hidden="true"
  >
    Anywhere, Anytime
  </span>
</span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          Send money globally with the best exchange rates. Fast, secure, and transparent — no hidden fees.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/home/login"><Button  className="cursor-pointer w-full sm:w-auto group bg-sky-500 hover:bg-sky-700">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button></a>
          {/* <a href="/home/login"><Button  className="cursor-pointer w-full sm:w-auto group bg-sky-500 hover:bg-sky-700">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button></a> */}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
