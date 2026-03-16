import { motion } from "motion/react";

const cards = [
  {
    title: "HYPERTROPHY",
    description: "Structural adaptation through mechanical tension and metabolic stress.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:row-span-2 h-[400px] md:h-full",
  },
  {
    title: "METABOLIC ENGINE",
    description: "Optimizing mitochondrial density and aerobic threshold capacity.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-2 h-[300px]",
  },
  {
    title: "RECOVERY",
    description: "Neural down-regulation and systemic tissue regeneration protocols.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    gridClass: "h-[300px]",
  },
];

export default function PerformanceGrid() {
  return (
    <section id="training" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-[1px] bg-volt" />
          <span className="text-volt font-bold tracking-tighter text-sm uppercase">Training Protocols</span>
        </div>
        <h2 className="text-5xl md:text-7xl">Performance Grid</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`performance-card group ${card.gridClass}`}
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover grayscale-hover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-deep/60 group-hover:bg-slate-deep/40 transition-colors duration-500" />
            </div>

            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
              <div className="mb-4">
                <span className="text-volt text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                  Protocol 0{index + 1}
                </span>
                <h3 className="text-3xl md:text-4xl mb-2">{card.title}</h3>
                <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                  {card.description}
                </p>
              </div>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-2 text-volt text-xs font-bold uppercase cursor-pointer"
              >
                View Protocol 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
