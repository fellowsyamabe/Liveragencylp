import { Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-[#1a1a2e]"
    >
      {/* 強化版ネオングリッド */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(120, 215, 212, 0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120, 215, 212, 0.35) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      {/* 星装飾 */}
      <motion.div
        className="absolute top-20 left-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Star className="text-[#78D7D4] fill-[#78D7D4] w-8 h-8 animate-pulse" />
      </motion.div>

      <motion.div
        className="absolute top-32 right-32"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Sparkles className="text-white w-10 h-10 opacity-70" />
      </motion.div>

      {/* 右側円装飾（復活） */}
      <motion.div
        className="absolute top-40 right-10 md:right-32 w-28 h-28 md:w-40 md:h-40 border-4 border-[#78D7D4] rounded-full opacity-40"
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1 }}
      />

      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-4 text-center">

        {/* 画像 */}
        <div className="relative mb-16">
          <div className="relative mx-auto w-72 md:w-96 lg:w-[500px] transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src="/Liveragencylp/hero.png"
              alt="Hero"
              className="w-full rounded-lg shadow-2xl border-4 border-white"
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-[#78D7D4] to-[#0ABAB5] opacity-60 blur-xl -z-10" />
          </div>
        </div>

        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block mb-6"
        >
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white relative z-10 px-6 py-3">
            "好き"を仕事にしよう。
          </h1>
          <motion.div
            className="absolute inset-0 bg-[#78D7D4] opacity-30 skew-x-[-3deg]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>

        {/* サブタイトル */}
        <div className="mb-10">
          <div className="bg-[#78D7D4] inline-block px-12 py-4 skew-x-[-2deg] shadow-lg">
            <p className="text-4xl md:text-6xl font-bold text-[#1a1a2e] skew-x-[2deg]">
              -CoCo Lab.
            </p>
          </div>
        </div>

        {/* 説明文 */}
        <div className="relative inline-block">
          <p className="text-lg md:text-xl text-white/90 mb-2">
            次世代ライバーのための戦略型エージェンシー
          </p>

          {/* 手書きネオン下線（復活） */}
          <motion.div
            className="w-60 mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <svg viewBox="0 0 200 10">
              <path
                d="M 5 5 Q 50 2 100 5 T 195 5"
                stroke="#78D7D4"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
