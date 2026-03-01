import { Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";
import hero from "/hero.png";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-[#1a1a2e]"
    >
      {/* ネオングリッド背景（薄め） */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(120, 215, 212, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120, 215, 212, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      {/* 装飾スター */}
      <motion.div
        className="absolute top-20 left-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Star className="text-[#78D7D4] fill-[#78D7D4] w-6 h-6 animate-pulse" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Sparkles className="text-white w-10 h-10 opacity-40" />
      </motion.div>

      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">

          {/* 画像 */}
          <div className="relative mb-16">
            <div className="relative mx-auto w-72 md:w-96 lg:w-[520px] transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src={hero}
                alt="Hero"
                className="w-full rounded-xl shadow-2xl border-4 border-white"
              />
              <div className="absolute -inset-2 border-4 border-[#78D7D4] rounded-xl opacity-30" />
            </div>

            {/* 右側円装飾 */}
            <div className="absolute top-10 -right-10 w-24 h-24 border-4 border-[#78D7D4] rounded-full opacity-30" />
          </div>

          {/* キャッチコピー */}
          <div className="space-y-6">
            <div className="relative inline-block">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white relative z-10 px-6 py-3">
                "好き"を仕事にしよう。
              </h1>
              <div className="absolute inset-0 bg-[#78D7D4] opacity-30 skew-x-[-2deg]" />
            </div>

            <div className="inline-block bg-[#78D7D4] px-8 py-4 shadow-lg">
              <p className="text-3xl md:text-5xl lg:text-6xl text-[#1a1a2e] font-bold">
                -CoCo Lab.
              </p>
            </div>

            <div className="relative mt-6">
              <p className="text-base md:text-xl text-white/90">
                次世代ライバーのための戦略型エージェンシー
              </p>

              {/* 手書き風ネオン下線 */}
              <svg
                className="mx-auto mt-3 w-48 md:w-64"
                viewBox="0 0 200 10"
              >
                <path
                  d="M 5 5 Q 50 2 100 5 T 195 5"
                  stroke="#78D7D4"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
