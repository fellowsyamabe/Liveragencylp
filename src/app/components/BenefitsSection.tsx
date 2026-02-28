import imgImageFx131 from "figma:asset/4cd0eda23817cf89583f8e0367189d882c1f9422.png";
import { Gift, Award } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits = [
    {
      title: "事務所表彰された方に\n一流会員制ホテル\n一泊無料（10万円相当）",
      icon: Award,
    },
    {
      title: "ヒカルとのコラボ\nエンリケとバトル",
      icon: Gift,
    },
    {
      title: "豊富なイベントを\n開催",
      icon: Gift,
    },
    {
      title: "お誕生日に\nユニバに招待",
      icon: Gift,
    },
    {
      title: "月3回\nスタバドリンク寄与",
      icon: Gift,
    },
    {
      title: "プライベート\nジェットスキー所持",
      icon: Gift,
    },
  ];

  const descriptionLines = [
    "頑張ったら、ちゃんと還元。しかも、ちょっと特別。",
    "CoCo Lab.には、他では体験できない福利厚生がたくさんあります。",
    "ただ所属するだけじゃない。\"楽しみながら伸びる\"環境を準備しています。"
  ];

  return (
    <section ref={ref} id="benefits" className="relative py-20 md:py-28 lg:py-36 overflow-hidden bg-[#e8dcc8]">
      {/* Background Image with overlay (no animation) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src={imgImageFx131} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sketch circles decoration */}
      <motion.div 
        className="absolute top-10 left-10 w-24 h-24 md:w-40 md:h-40"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80 }}
      >
        <svg viewBox="0 0 150 150" className="w-full h-full opacity-20">
          <circle cx="75" cy="75" r="60" stroke="#1e2f4e" strokeWidth="2" fill="none" />
          <circle cx="75" cy="75" r="45" stroke="#1e2f4e" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>

      {/* Doodle stars */}
      <motion.div 
        className="absolute bottom-20 right-20 w-16 h-16 md:w-24 md:h-24"
        initial={{ scale: 0, rotate: 180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 80 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
          <path d="M 50 10 L 55 40 L 85 45 L 60 60 L 70 90 L 50 75 L 30 90 L 40 60 L 15 45 L 45 40 Z" fill="none" stroke="#1e2f4e" strokeWidth="2" />
        </svg>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-16">
          <motion.div 
            className="relative inline-block"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1e2f4e] relative z-10 mb-4">
              -CoCo Lab.だけの<br />
              <span className="relative inline-block mt-2">
                福利厚生
                {/* Highlight marker effect */}
                <motion.span 
                  className="absolute inset-0 bg-[#78D7D4] opacity-30 transform skew-x-[-3deg] -z-10"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Description with speech bubble style - Line by line */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="text-sm md:text-base lg:text-lg text-[#1e2f4e] leading-relaxed text-left">
            {descriptionLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.3 }}
              >
                {index === descriptionLines.length - 1 ? (
                  <span className="font-bold text-[#0ABAB5]">{line}</span>
                ) : (
                  line
                )}
                {index < descriptionLines.length - 1 && <br />}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Grid with 3D card style */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((benefit, index) => {
            return (
              <motion.div 
                key={index}
                className="relative group"
                style={{
                  animation: `float ${3 + index * 0.2}s ease-in-out infinite`,
                  animationDelay: `${index * 0.15}s`
                }}
                initial={{ opacity: 0, y: 60, scale: 0.8, rotate: index % 2 === 0 ? -15 : 15 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.5 + index * 0.15, type: "spring", stiffness: 100 }}
              >
                <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border-[3px] border-[#1e2f4e] hover:border-[#78D7D4] transition-all duration-300 transform group-hover:-translate-y-2 z-10 shadow-lg">
                  {/* Icon */}
                  <div className="flex justify-center mb-4 md:mb-5">
                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#78D7D4] rounded-full flex items-center justify-center shadow-md transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {index === 0 && (
                        <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      )}
                      {index === 4 && (
                        <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      )}
                      {index === 5 && (
                        <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm md:text-base lg:text-lg text-black text-center whitespace-pre-line leading-relaxed font-medium">
                    {benefit.title}
                  </p>
                </div>
                {/* 3D Shadow layers */}
                <div className="absolute inset-0 bg-[#78D7D4] rounded-2xl md:rounded-3xl transform translate-x-[8px] translate-y-[8px] group-hover:translate-x-[10px] group-hover:translate-y-[10px] transition-all duration-300" />
                <div className="absolute inset-0 bg-[#1e2f4e] rounded-2xl md:rounded-3xl transform translate-x-[16px] translate-y-[16px] group-hover:translate-x-[18px] group-hover:translate-y-[18px] transition-all duration-300 -z-10" />
              </motion.div>
            );
          })}
        </div>
        
        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }
        `}</style>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}
