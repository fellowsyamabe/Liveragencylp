import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits = [
    "専属マネージャー制度",
    "案件紹介サポート",
    "SNS戦略設計",
    "配信分析フィードバック",
    "コラボ企画支援",
    "成長ロードマップ設計"
  ];

  return (
    <section
      ref={ref}
      id="benefits"
      className="py-20 bg-[#0f172a] text-white"
    >
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          CoCo Lab.のサポート体制
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 bg-[#1e293b] p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CheckCircle className="text-[#78D7D4] w-6 h-6" />
              <span className="text-left">{item}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
