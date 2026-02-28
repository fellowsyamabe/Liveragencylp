import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const descriptions = [
    "CoCo Lab.は、次世代ライバーのための戦略型エージェンシーです。",
    "データに基づく成長設計、専属サポート体制、プロモーション支援により、個人の可能性を最大限に引き出します。",
    "配信を一過性の流行で終わらせず、持続可能なキャリアへ。",
    "本気でトップを目指す方のための環境を整えています。"
  ];

  return (
    <section ref={ref} id="about" className="relative py-20 md:py-32 bg-[#f5f0e8] overflow-hidden">
      {/* Top left image - rotated collage style (no animation) */}
      <div className="absolute top-10 left-8 md:left-16 w-48 h-64 md:w-72 md:h-96 lg:w-80 lg:h-[450px] transform -rotate-6 shadow-2xl rounded-lg overflow-hidden z-10">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1758691737045-3ece61135061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc3MTgwMTk2NXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Creative team"
          className="w-full h-full object-cover"
        />
        {/* Handwritten circle decoration on image */}
        <motion.div 
          className="absolute -top-4 -right-4 w-20 h-20 md:w-28 md:h-28"
          initial={{ scale: 0, rotate: -90 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle 
              cx="50" 
              cy="50" 
              r="35" 
              stroke="#78D7D4" 
              strokeWidth="3" 
              fill="none"
              strokeLinecap="round"
              strokeDasharray="2,4"
              transform="rotate(-10 50 50)"
            />
          </svg>
        </motion.div>
      </div>

      {/* Bottom right image - rotated opposite direction (no animation) */}
      <div className="absolute top-10 right-8 md:right-20 w-48 h-64 md:w-72 md:h-96 lg:w-80 lg:h-[450px] transform rotate-6 shadow-2xl rounded-lg overflow-hidden z-10">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1658266592704-a53953f4a47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjBjb250ZW50JTIwY3JlYXRvciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzE4Mjk3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Content creator workspace"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hand-drawn curved arrow decoration */}
      <motion.div 
        className="hidden lg:block absolute top-[25%] right-[15%] w-32 h-48"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 0.6, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <svg viewBox="0 0 100 150" className="w-full h-full">
          <path 
            d="M 20 20 Q 60 50 50 100 Q 45 130 40 140" 
            stroke="#1e2f4e" 
            strokeWidth="2" 
            fill="none"
            strokeLinecap="round"
            strokeDasharray="4,6"
            opacity="0.6"
          />
          <path 
            d="M 40 140 L 35 130 M 40 140 L 45 132" 
            stroke="#1e2f4e" 
            strokeWidth="2" 
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </motion.div>

      {/* Watercolor blob decoration */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#78D7D4] opacity-10 rounded-full blur-3xl"></div>

      <div className="relative z-20 container mx-auto px-4">
        {/* Large typography header */}
        <div className="max-w-6xl mx-auto text-center mb-16 md:mb-20">
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#1e2f4e] tracking-tight leading-none mb-6"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
          >
            All about
          </motion.h2>
          <motion.div 
            className="relative inline-block"
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 80 }}
          >
            <h3 className="text-6xl md:text-8xl lg:text-9xl xl:text-[160px] font-serif italic text-[#1e2f4e] tracking-tight">
              CoCo Lab.
            </h3>
            {/* Handwritten underline */}
            <motion.svg 
              className="absolute -bottom-4 left-0 w-full h-4" 
              viewBox="0 0 300 15"
              preserveAspectRatio="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <motion.path 
                d="M 10 8 Q 75 12 150 8 T 290 10" 
                stroke="#78D7D4" 
                strokeWidth="4" 
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </motion.div>
        </div>

        {/* Main content box */}
        <motion.div 
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl border-4 border-[#1e2f4e]/10">
            {/* Subtitle with marker highlight effect */}
            <motion.div 
              className="relative inline-block mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1e2f4e] relative z-10">
                CoCoLab.って？
              </h4>
              {/* Marker highlight background */}
              <motion.div 
                className="absolute bottom-2 left-0 right-0 h-4 bg-[#78D7D4] opacity-30 -z-0"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              />
            </motion.div>

            {/* Description text - sentence by sentence fade in */}
            <div className="space-y-6 text-[#1e2f4e]">
              {descriptions.map((text, index) => (
                <motion.p 
                  key={index}
                  className="text-lg md:text-xl leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.3 }}
                >
                  {index === 0 && (
                    <>
                      CoCo Lab.は、<span className="font-bold">次世代ライバーのための戦略型エージェンシー</span>です。
                    </>
                  )}
                  {index === 1 && "データに基づく成長設計、専属サポート体制、プロモーション支援により、個人の可能性を最大限に引き出します。"}
                  {index === 2 && (
                    <>
                      配信を一過性の流行で終わらせず、<span className="font-bold">持続可能なキャリアへ</span>。
                    </>
                  )}
                  {index === 3 && "本気でトップを目指す方のための環境を整えています。"}
                </motion.p>
              ))}
            </div>

            {/* Decorative quote marks */}
            <motion.div 
              className="absolute -top-8 -left-6 text-7xl md:text-9xl text-[#78D7D4] font-serif opacity-30 leading-none"
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              animate={isInView ? { opacity: 0.3, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 100 }}
            >
              "
            </motion.div>
            <motion.div 
              className="absolute -bottom-8 -right-6 text-7xl md:text-9xl text-[#78D7D4] font-serif opacity-30 leading-none"
              initial={{ opacity: 0, scale: 0, rotate: 45 }}
              animate={isInView ? { opacity: 0.3, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 100 }}
            >
              "
            </motion.div>
          </div>

          {/* Hand-drawn circle accent */}
          <motion.div 
            className="absolute -bottom-12 -left-8 w-24 h-24 md:w-32 md:h-32"
            initial={{ scale: 0, rotate: -90 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6, type: "spring", stiffness: 100 }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle 
                cx="50" 
                cy="50" 
                r="30" 
                stroke="#FF6B9D" 
                strokeWidth="2.5" 
                fill="none"
                strokeLinecap="round"
                strokeDasharray="3,5"
                opacity="0.4"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
