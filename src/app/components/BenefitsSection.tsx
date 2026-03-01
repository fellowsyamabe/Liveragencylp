import { Gift, Award } from "lucide-react";
import { motion, useInView } from "motion/react";
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

      {/* 背景画像（GitHub Pages対応） */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="/Liveragencylp/haikei.png"
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">

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

        <div className="max-w-4xl mx-auto mb-12 md:mb-16 text-[#1e2f4e]">
          {descriptionLines.map((line, index) => (
            <div key={index}>
              {index === descriptionLines.length - 1 ? (
                <span className="font-bold text-[#0ABAB5]">{line}</span>
              ) : (
                line
              )}
              <br />
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 border-4 border-[#1e2f4e] shadow-lg text-center whitespace-pre-line">
              {benefit.title}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
