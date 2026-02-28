import { Users, Zap, MousePointerClick } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function RecruitSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const descriptionLines = [
    "雑談、ゲーム、歌、Vtuber、企画系まで。",
    "CoCo Lab.には、さまざまなジャンルで活躍するライバーが集まっています。",
    "「自分のスタイルで伸ばしたい」そんな想いを大切にしています。"
  ];

  return (
    <section
      ref={ref}
      id="recruit"
      className="relative py-20 md:py-28 lg:py-36 bg-[#1a1a2e] overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-4">

        {/* Section Header */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-16 text-center">
          <motion.div
            className="relative inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 bg-[#78D7D4] px-8 py-4 transform skew-x-[-1deg] shadow-2xl">
              <Users className="w-6 h-6 text-[#1a1a2e]" />
              <h2 className="text-2xl md:text-4xl font-bold text-[#1a1a2e] skew-x-[1deg]">
                -CoCo Lab.で働こう
              </h2>
              <Zap className="w-6 h-6 text-[#1a1a2e]" />
            </div>
          </motion.div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <div className="text-sm md:text-base lg:text-lg text-white leading-relaxed">
            {descriptionLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {line}
                {index < descriptionLines.length - 1 && <br />}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            className="bg-[#78D7D4] hover:bg-[#0ABAB5] text-[#1a1a2e] font-bold text-lg px-8 py-4 rounded-full shadow-xl transition-all duration-300"
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
