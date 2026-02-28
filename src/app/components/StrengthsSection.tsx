import { Trophy, Target, Rocket } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function StrengthsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const strengths = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "戦略設計",
      text: "感覚ではなく、データに基づいた成長戦略を構築します。"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "個別サポート",
      text: "一人ひとりに合わせた伴走型マネジメント。"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "爆発的拡散力",
      text: "SNS・企画・コラボ設計で拡張させます。"
    }
  ];

  return (
    <section
      ref={ref}
      id="strengths"
      className="py-20 bg-[#111827] text-white"
    >
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          CoCo Lab.の強み
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {strengths.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#1f2937] p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4 flex justify-center text-[#78D7D4]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
