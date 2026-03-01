import { Star, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function StrengthsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const strengths = [
    { title: "専属マネージャー\nによるサポート" },
    { title: "配信機材の指導等\n配信中のサポート" },
    { title: "AIによるデータ化\n及び戦略マネジメント" },
    { title: "配信中の加工及び\n効果音等の指導" },
    { title: "事務所からの\nプロモート体制の充実" },
    { title: "日間トップ表彰\n（賞金あり）" },
  ];

  const descriptionLines = [
    "配信は、ひとりで頑張らなくていい。",
    "CoCo Lab.は、ライバーのためのサポートが充実しています。",
    "マネージャーサポート、データ分析、切り抜き支援、プロモーション支援まで。",
    "伸び悩みを\"仕組み\"で解決します。"
  ];

  return (
    <section ref={ref} id="strengths" className="relative py-20 md:py-28 lg:py-36 overflow-hidden bg-black">

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* ネオンぼかし */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px] bg-[#78D7D4] opacity-30" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] bg-[#78D7D4] opacity-30" />

      <div className="relative z-10 container mx-auto px-4">

        {/* タイトル */}
        <div className="text-center mb-16">
          <h2 className="text-5xl text-white font-bold">
            CoCo Lab.の
            <span className="text-cyan-400 relative">
              強み
              <span className="absolute inset-0 text-cyan-400 blur-md opacity-70">強み</span>
            </span>
          </h2>
        </div>

        {/* ★ 画像部分：ここだけ修正済み */}
        <div className="flex justify-center gap-8 flex-wrap mb-16">
          <div className="relative w-64 transform -rotate-6">
            <img
              src="/Liveragencylp/strengths1.png"
              alt="strength1"
              className="w-full rounded-lg border-2 border-cyan-400"
            />
          </div>

          <div className="relative w-64 transform rotate-6">
            <img
              src="/Liveragencylp/strengths2.png"
              alt="strength2"
              className="w-full rounded-lg border-2 border-cyan-400"
            />
          </div>
        </div>

        {/* 説明文 */}
        <div className="text-center text-gray-300 mb-16">
          {descriptionLines.map((line, index) => (
            <div key={index}>
              {line}
              <br />
            </div>
          ))}
        </div>

        {/* 強みカード */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-8 border border-cyan-500/30 text-white text-center whitespace-pre-line"
            >
              {strength.title}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
