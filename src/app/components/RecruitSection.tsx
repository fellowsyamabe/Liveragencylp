import { Users, Zap, MousePointerClick } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function RecruitSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const descriptionLines = [
    "雑談、ゲーム、歌、Vtuber、企画系まで。",
    "CoCo Lab.には、さまざまなジャンルで活躍するライバーが集まっています。",
    "「自分のスタイルで伸ばしたい」そんな想いを大切にしています。"
  ];

  const images = [
    "/Liveragencylp/recruit1.png",
    "/Liveragencylp/recruit2.png",
    "/Liveragencylp/recruit3.png",
    "/Liveragencylp/recruit4.png",
  ];

  return (
    <section
      ref={ref}
      id="recruit"
      className="relative py-20 md:py-28 lg:py-36 bg-[#1a1a2e] overflow-hidden"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(120, 215, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120, 215, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">

        {/* Section Header */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-16 text-center">
          <motion.div
            className="relative inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <div className="flex items-center gap-3 bg-[#78D7D4] px-8 md:px-12 py-3 md:py-4 relative transform skew-x-[-1deg] shadow-2xl">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-[#1a1a2e]" />
              <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#1a1a2e] font-bold skew-x-[1deg]">
                -CoCo Lab.で働こう
              </h2>
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-[#1a1a2e] fill-[#1a1a2e]" />
            </div>
            <div className="absolute -inset-2 bg-[#78D7D4] opacity-50 blur-xl -z-20" />
          </motion.div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="text-sm md:text-base lg:text-lg text-white leading-relaxed">
            {descriptionLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.3 }}
              >
                {line}
                {index < descriptionLines.length - 1 && <br />}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ★ 4枚ポラロイド追加 */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {images.map((src, index) => {
              const rotations = [-4, 3, -2, 4];
              return (
                <div
                  key={index}
                  className="relative group"
                  style={{
                    transform: `rotate(${rotations[index]}deg)`
                  }}
                >
                  <div className="bg-white p-4 shadow-2xl group-hover:shadow-[0_20px_60px_rgba(120,215,212,0.5)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:-translate-y-4">
                    <img
                      src={src}
                      alt={`recruit-${index}`}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            className="bg-[#78D7D4] hover:bg-[#0ABAB5] text-[#1a1a2e] font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3 justify-center">
              <MousePointerClick className="w-6 h-6" />
              今すぐ応募する
            </span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
