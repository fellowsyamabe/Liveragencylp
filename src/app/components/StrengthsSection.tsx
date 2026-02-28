import imgImageFx121 from "figma:asset/2d32aa119858beb866eb224a372d36ca4b81a33a.png";
import imgImageFx21 from "figma:asset/e52a121aa8d8b83dee6093d2faf4749e06ba08df.png";
import { Star, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function StrengthsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const strengths = [
    {
      title: "専属マネージャー\nによるサポート",
    },
    {
      title: "配信機材の指導等\n配信中のサポート",
    },
    {
      title: "AIによるデータ化\n及び戦略マネジメント",
    },
    {
      title: "配信中の加工及び\n効果音等の指導",
    },
    {
      title: "事務所からの\nプロモート体制の充実",
    },
    {
      title: "日間トップ表彰\n（賞金あり）",
    },
  ];

  const descriptionLines = [
    "配信は、ひとりで頑張らなくていい。",
    "CoCo Lab.は、ライバーのためのサポートが充実しています。",
    "マネージャーサポート、データ分析、切り抜き支援、プロモーション支援まで。",
    "伸び悩みを\"仕組み\"で解決します。"
  ];

  return (
    <section ref={ref} id="strengths" className="relative py-20 md:py-28 lg:py-36 overflow-hidden bg-black">
      {/* Grid Background - Enhanced cyber style */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px] animate-pulse" style={{ backgroundColor: '#78D7D4' }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] animate-pulse" style={{ backgroundColor: '#78D7D4', animationDelay: '1s' }} />
      </div>

      {/* Decorative stars and sparkles - Multiple instances */}
      <div className="absolute top-10 right-10 animate-pulse">
        <Star className="text-cyan-400 w-6 h-6 fill-cyan-400" />
      </div>
      <div className="absolute top-32 right-32 animate-pulse" style={{ animationDelay: '0.5s' }}>
        <Star className="text-cyan-300 w-4 h-4 fill-cyan-300" />
      </div>
      <div className="absolute top-20 left-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <Sparkles className="text-cyan-400 w-8 h-8" />
      </div>
      <div className="absolute bottom-20 left-10 animate-pulse" style={{ animationDelay: '0.3s' }}>
        <Zap className="text-cyan-400 w-8 h-8 fill-cyan-400" />
      </div>
      <div className="absolute bottom-40 right-20 animate-pulse" style={{ animationDelay: '0.7s' }}>
        <Sparkles className="text-cyan-300 w-6 h-6" />
      </div>
      <div className="absolute top-1/2 left-10 animate-pulse" style={{ animationDelay: '1.2s' }}>
        <Star className="text-cyan-500 w-5 h-5 fill-cyan-500" />
      </div>

      {/* Floating circles decoration */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-cyan-500/20 rounded-full animate-spin-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border-2 border-cyan-400/20 rounded-full animate-spin-slow" style={{ animationDelay: '0.5s' }} />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header with neon cyber style */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-16 text-center">
          <motion.div 
            className="relative inline-block mb-8"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold relative">
              CoCo Lab.の<span className="text-cyan-400 relative">
                強み
                <div className="absolute inset-0 text-cyan-400 blur-md opacity-70">強み</div>
              </span>
            </h2>
            {/* Cyber lines */}
            <motion.div 
              className="absolute -left-20 top-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent to-cyan-400"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.div 
              className="absolute -right-20 top-1/2 w-16 h-[2px] bg-gradient-to-l from-transparent to-cyan-400"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
          
          {/* Subtitle with glow */}
          <motion.p 
            className="text-cyan-300 text-sm md:text-base uppercase tracking-widest font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Our Strengths
          </motion.p>
        </div>

        {/* Images Collage with cyber glow (no animation) */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-20">
          <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
            {/* Image 1 - Rotated with cyan glow */}
            <div className="relative w-48 md:w-64 lg:w-80 transform rotate-[-8deg] hover:rotate-0 transition-all duration-500">
              <img 
                src={imgImageFx121} 
                alt="Equipment 1" 
                className="w-full rounded-lg shadow-2xl border-2 border-cyan-400"
              />
              <div className="absolute -inset-1 bg-cyan-400 opacity-30 blur-xl -z-10 rounded-lg" />
              <div className="absolute -inset-2 border border-cyan-400/50 rounded-lg animate-pulse" />
            </div>

            {/* Image 2 - Rotated opposite with cyan glow */}
            <div className="relative w-48 md:w-64 lg:w-80 transform rotate-[5deg] hover:rotate-0 transition-all duration-500">
              <img 
                src={imgImageFx21} 
                alt="Equipment 2" 
                className="w-full rounded-lg shadow-2xl border-2 border-cyan-400"
              />
              <div className="absolute -inset-1 bg-cyan-500 opacity-30 blur-xl -z-10 rounded-lg" />
              <div className="absolute -inset-2 border border-cyan-500/50 rounded-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>

        {/* Description with cyber accent - Line by line */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16 text-center">
          <div className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed space-y-2">
            {descriptionLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 + index * 0.3 }}
              >
                {index === descriptionLines.length - 1 ? (
                  <span className="text-cyan-400 font-bold relative inline-block">
                    {line}
                    <span className="absolute inset-0 text-cyan-400 blur-sm opacity-50">{line}</span>
                  </span>
                ) : (
                  line
                )}
                {index < descriptionLines.length - 1 && <br />}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Strengths Grid with dark cyber style */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {strengths.map((strength, index) => (
            <motion.div 
              key={index}
              className="relative group"
              style={{
                animation: `float ${3 + index * 0.2}s ease-in-out infinite`,
                animationDelay: `${index * 0.15}s`
              }}
              initial={{ opacity: 0, y: 50, scale: 0.8, rotate: index % 2 === 0 ? -10 : 10 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 2.2 + index * 0.15, type: "spring", stiffness: 100 }}
            >
              {/* Main Card - Dark theme */}
              <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border-2 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 transform group-hover:-translate-y-2 z-10 shadow-2xl overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Grid pattern overlay */}
                <div 
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}
                />

                {/* Icon Circle - Cyan theme */}
                <div className="flex justify-center mb-4 md:mb-5 relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative">
                    {/* Icon glow */}
                    <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-50" />
                    
                    {index === 0 && (
                      <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    )}
                    {index === 4 && (
                      <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {index === 5 && (
                      <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    )}
                  </div>
                </div>
                
                {/* Text Content */}
                <p className="text-sm md:text-base lg:text-lg text-white text-center whitespace-pre-line leading-relaxed font-medium relative z-10">
                  {strength.title}
                </p>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50" />
              </div>
              
              {/* Glow layers */}
              <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
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
          
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
