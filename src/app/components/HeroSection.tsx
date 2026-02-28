import imgImageFx111 from "figma:asset/c7e63a8418f3ccbf257df051890136cc44053e8b.png";
import { Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-[#1a1a2e]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(120, 215, 212, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120, 215, 212, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Decorative Stars */}
      <motion.div 
        className="absolute top-20 left-10 md:left-20"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
      >
        <Star className="text-[#78D7D4] fill-[#78D7D4] w-6 h-6 md:w-8 md:h-8 animate-pulse" />
      </motion.div>
      <motion.div 
        className="absolute top-40 right-20 md:right-40"
        initial={{ opacity: 0, scale: 0, rotate: 180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
      >
        <Sparkles className="text-white w-8 h-8 md:w-12 md:h-12 opacity-50" />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 150 }}
      >
        <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full animate-pulse" />
      </motion.div>
      <motion.div 
        className="absolute top-60 right-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 150 }}
      >
        <div className="w-2 h-2 md:w-3 md:h-3 bg-[#78D7D4] rounded-full" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Images Collage */}
          <div className="relative mb-12 md:mb-20">
            {/* Main Image - rotated (no animation) */}
            <div className="relative mx-auto w-64 md:w-96 lg:w-[500px] transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={imgImageFx111} 
                alt="Hero" 
                className="w-full rounded-lg shadow-2xl border-4 border-white"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-[#78D7D4] to-[#0ABAB5] opacity-50 blur-lg -z-10" />
            </div>

            {/* Decorative Circle */}
            <motion.div 
              className="absolute top-10 -right-10 md:-right-20 w-20 h-20 md:w-32 md:h-32 border-4 border-[#78D7D4] rounded-full opacity-30"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 80 }}
            />
          </div>

          {/* Title with Neon Highlight */}
          <div className="text-center space-y-6 md:space-y-8">
            <motion.div 
              className="inline-block relative"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-white relative z-10 px-4 md:px-8 py-2 md:py-4">
                "好き"を仕事にしよう。
              </h1>
              <motion.div 
                className="absolute inset-0 bg-[#78D7D4] opacity-30 skew-x-[-2deg]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </motion.div>

            {/* Subtitle with highlight box */}
            <motion.div 
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
            >
              <div className="bg-[#78D7D4] px-6 md:px-10 py-3 md:py-4 skew-x-[-1deg] shadow-lg">
                <p className="text-3xl md:text-5xl lg:text-7xl text-[#1a1a2e] font-bold skew-x-[1deg]">
                  -CoCo Lab.
                </p>
              </div>
              {/* Decorative arrows */}
              <motion.div 
                className="absolute -right-6 md:-right-12 top-1/2 transform -translate-y-1/2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="flex gap-1">
                  <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-[#78D7D4]" />
                  <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-[#78D7D4]" />
                  <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-[#78D7D4]" />
                </div>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div 
              className="mt-8 md:mt-12 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <p className="text-sm md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                次世代ライバーのための戦略型エージェンシー
              </p>
              
              {/* Sketch underline */}
              <motion.div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 md:w-60 h-1 mt-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <svg viewBox="0 0 200 10" className="w-full">
                  <path 
                    d="M 5 5 Q 50 2 100 5 T 195 5" 
                    stroke="#78D7D4" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
