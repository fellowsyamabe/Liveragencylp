import imgImageFx21 from "figma:asset/e52a121aa8d8b83dee6093d2faf4749e06ba08df.png";
import imgImageFx61 from "figma:asset/0fd063f7008882284b223874c12a96ecefffa051.png";
import imgImageFx51 from "figma:asset/2d516031d651d9842f81e85b68ddb44708dba1e2.png";
import imgImageFx31 from "figma:asset/bd121328b5915874f7baf5bcee63dba6dc521bbf.png";
import { Users, Zap, MousePointerClick } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function RecruitSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const images = [
    { src: imgImageFx31, alt: "Team member 1" },
    { src: imgImageFx51, alt: "Team member 2" },
    { src: imgImageFx21, alt: "Team member 3" },
    { src: imgImageFx61, alt: "Team member 4" },
  ];

  const descriptionLines = [
    "雑談、ゲーム、歌、Vtuber、企画系まで。",
    "CoCo Lab.には、さまざまなジャンルで活躍するライバーが集まっています。",
    "「自分のスタイルで伸ばしたい」そんな想いを大切にしています。"
  ];

  return (
    <section ref={ref} id="recruit" className="relative py-20 md:py-28 lg:py-36 bg-[#1a1a2e] overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(120, 215, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120, 215, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Decorative sketch elements */}
      <div className="absolute top-20 left-10 w-20 h-20 md:w-32 md:h-32 opacity-20">
        
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header with neon style */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-16 text-center">
          <motion.div 
            className="relative inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <div className="flex items-center gap-3 bg-[#78D7D4] px-8 md:px-12 py-3 md:py-4 relative transform skew-x-[-1deg] shadow-2xl">
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                animate={isInView ? { rotate: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 150 }}
              >
                <Users className="w-6 h-6 md:w-8 md:h-8 text-[#1a1a2e]" />
              </motion.div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#1a1a2e] font-bold skew-x-[1deg]">
                -CoCo Lab.で働こう
              </h2>
              <motion.div
                initial={{ rotate: 180, scale: 0 }}
                animate={isInView ? { rotate: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 150 }}
              >
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-[#1a1a2e] fill-[#1a1a2e]" />
              </motion.div>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-[#78D7D4] opacity-50 blur-xl -z-20" />
          </motion.div>
        </div>

        {/* Description - Sentence by sentence */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16 text-center">
          <div className="text-sm md:text-base lg:text-lg text-white leading-relaxed">
            {descriptionLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.3 }}
              >
                {index === 2 ? (
                  <span className="relative inline-block">
                    <span className="relative z-10">{line}</span>
                    <motion.span 
                      className="absolute inset-0 bg-[#78D7D4] opacity-30 transform -skew-x-3 -z-10"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.3 }}
                    />
                  </span>
                ) : (
                  line
                )}
                {index < descriptionLines.length - 1 && <br />}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Grid with polaroid style (no animation) */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {images.map((image, index) => {
              const rotations = [-4, 3, -2, 4];
              return (
                <div 
                  key={index}
                  className="relative group"
                  style={{
                    transform: `rotate(${rotations[index]}deg)`,
                    transition: 'all 0.5s ease'
                  }}
                >
                  {/* Polaroid frame */}
                  <div className="bg-white p-3 md:p-4 shadow-2xl group-hover:shadow-[0_20px_60px_rgba(120,215,212,0.5)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:-translate-y-4">
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Polaroid bottom space */}
                    <div className="h-8 md:h-12 flex items-center justify-center">
                      <div className="w-3 h-3 bg-[#78D7D4] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Tape effect */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-[rgba(255,255,255,0.3)] border-t border-b border-[rgba(255,255,255,0.2)] rotate-[-5deg]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action with sketch arrow */}
        <motion.div 
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.8, type: "spring", stiffness: 100 }}
        >
          <div className="relative inline-block">
            <motion.button 
              className="relative group bg-[#78D7D4] hover:bg-[#0ABAB5] text-[#1a1a2e] font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Ripple animation on hover */}
              <span className="absolute inset-0 rounded-full bg-white/30 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
              
              {/* Pulse rings */}
              <span className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping opacity-75"></span>
              <span className="absolute inset-0 rounded-full border-2 border-white/20" style={{ animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) 0.5s infinite' }}></span>
              
              {/* Button content */}
              <span className="relative flex items-center gap-3 justify-center">
                {/* Click icon with bounce animation */}
                <MousePointerClick className="w-6 h-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 animate-bounce" />
                今すぐ応募する
              </span>
            </motion.button>
            
            {/* Sketch arrow pointing to button */}
            <div className="absolute -right-20 md:-right-32 top-1/2 transform -translate-y-1/2 hidden md:block">
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
