/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Activity, Zap, Shield, ChevronRight, Menu, X, Star } from "lucide-react";
import PerformanceGrid from "./components/PerformanceGrid";

const stats = [
  { label: "GYM CAPACITY", value: "64%", status: "OPTIMAL" },
  { label: "NEXT DROP", value: "12:00:00", status: "PENDING" },
  { label: "VOLT LEVEL", value: "OPTIMAL", status: "PEAK" },
];

const testimonials = [
  { name: "Alex Rivers", role: "Elite Athlete", score: "98%", text: "The technical precision of the Volt protocols is unmatched in the industry." },
  { name: "Sarah Chen", role: "Performance Coach", score: "95%", text: "Data-driven training that actually translates to real-world power output." },
  { name: "Marcus Thorne", role: "Hybrid Athlete", score: "99%", text: "Volt Athletic isn't just a gym; it's a high-performance laboratory." },
  { name: "Elena Vance", role: "Pro Sprinter", score: "97%", text: "Recovery protocols here are the secret weapon for my track season." },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState("12:00:00");

  // Simple timer simulation for the stats widget
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const h = String(23 - now.getHours()).padStart(2, '0');
      const m = String(59 - now.getMinutes()).padStart(2, '0');
      const s = String(59 - now.getSeconds()).padStart(2, '0');
      setTimeLeft(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-volt selection:text-slate-deep">
      {/* HUD Navigation */}
      <nav className="glass-nav px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bebas font-bold tracking-tighter"
          >
            VOLT<span className="text-volt">.</span>ATHLETIC
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Protocol", "Training", "Performance"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-xs font-bold uppercase tracking-widest hover:text-volt transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="btn-volt group">
              <span className="relative z-10">JOIN THE LAB</span>
              <div className="pulse-ring" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-deep pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {["Protocol", "Training", "Performance"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-bebas tracking-wider"
                >
                  {item}
                </a>
              ))}
              <button className="btn-volt w-full mt-4">JOIN THE LAB</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Kinetic Hero */}
      <section id="protocol" className="relative h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background"
            className="w-full h-full object-cover grayscale opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-deep via-slate-deep/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex gap-8 items-start">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-[1px] bg-volt self-stretch hidden md:block" 
            />
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-9xl leading-none mb-4"
              >
                <span className="font-extralight block">ELITE PERFORMANCE</span>
                <span className="font-black text-volt block">LAB-GRADE POWER</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-white/60 max-w-lg text-lg mb-12 leading-relaxed"
              >
                Engineered for those who demand absolute physical dominance. 
                Our protocols integrate biomechanical data with elite-level strength conditioning.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-4"
              >
                <button className="btn-volt group">
                  <span className="relative z-10">INITIALIZE PROTOCOL</span>
                  <div className="pulse-ring" />
                </button>
                <button className="px-8 py-3 border border-white/20 hover:border-volt transition-colors font-bebas text-xl">
                  VIEW FACILITY
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hero Stats Overlay */}
        <div className="absolute bottom-12 right-12 hidden lg:flex gap-12 text-right">
          <div>
            <div className="text-volt font-bebas text-4xl">4200+</div>
            <div className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Active Members</div>
          </div>
          <div>
            <div className="text-volt font-bebas text-4xl">12</div>
            <div className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Global Labs</div>
          </div>
        </div>
      </section>

      {/* Performance Grid Section */}
      <PerformanceGrid />

      {/* Live Stats Widget */}
      <section className="bg-white/5 border-y border-white/10 py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center justify-between md:justify-start md:gap-8 border-l border-white/10 pl-8 first:border-l-0">
                <div>
                  <div className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-1">{stat.label}</div>
                  <div className="text-3xl md:text-5xl font-bebas digital-font text-volt">
                    {stat.label === "NEXT DROP" ? timeLeft : stat.value}
                  </div>
                </div>
                <div className="text-right md:text-left">
                  <div className="text-[10px] font-bold text-volt/50 tracking-widest uppercase mb-1">Status</div>
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <div className="w-2 h-2 rounded-full bg-volt animate-pulse" />
                    {stat.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section id="performance" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-[1px] bg-volt" />
                <span className="text-volt font-bold tracking-tighter text-sm uppercase">Performance Feedback</span>
              </div>
              <h2 className="text-5xl md:text-7xl">Athlete Reports</h2>
            </div>
            <div className="text-white/40 text-sm max-w-xs text-right">
              Real-time feedback from our elite training community across global labs.
            </div>
          </div>

          {/* Desktop Grid / Mobile Scroll */}
          <div className="relative">
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-8 md:pb-0 no-scrollbar snap-x">
              {testimonials.map((t, i) => (
                <motion.div 
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="min-w-[300px] snap-center bg-white/5 border border-white/10 p-8 flex flex-col justify-between group hover:border-volt/30 transition-colors"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-2 bg-volt/10 rounded-sm">
                        <Activity className="text-volt w-5 h-5" />
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-white/40 uppercase tracking-widest">Score</div>
                        <div className="text-xl font-bebas text-volt">{t.score}</div>
                      </div>
                    </div>
                    <p className="text-white/70 italic mb-8 leading-relaxed">"{t.text}"</p>
                  </div>
                  <div>
                    <div className="text-lg font-bebas tracking-wide">{t.name}</div>
                    <div className="text-[10px] text-volt uppercase tracking-widest">{t.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bebas font-bold tracking-tighter">
            VOLT<span className="text-volt">.</span>ATHLETIC
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
            <a href="#" className="hover:text-volt transition-colors">Privacy</a>
            <a href="#" className="hover:text-volt transition-colors">Terms</a>
            <a href="#" className="hover:text-volt transition-colors">Lab Access</a>
          </div>
          <div className="text-[10px] text-white/20 uppercase tracking-widest">
            © 2026 Volt Athletic Performance Lab. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
