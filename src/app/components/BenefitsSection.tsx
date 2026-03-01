export function BenefitsSection() {
  const benefits = [
    "専属マネージャー制度",
    "案件紹介サポート",
    "SNS戦略設計",
    "配信分析フィードバック",
    "コラボ企画支援",
    "成長ロードマップ設計"
  ];

  return (
    <section className="relative py-28 overflow-hidden">

      {/* 背景画像 */}
      <div className="absolute inset-0">
        <img
          src="/Liveragencylp/haikei.png"
          alt="background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#071022]/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          CoCo Labだけの
          <span className="text-cyan-400 drop-shadow-[0_0_15px_#22d3ee]">
            福利厚生
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-[#0f1b34]/80 border border-cyan-400/40 rounded-xl p-8
                         shadow-[0_0_20px_rgba(34,211,238,0.4)]
                         hover:shadow-[0_0_40px_rgba(34,211,238,0.8)]
                         transition-all duration-300"
            >
              <p className="text-white text-lg">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
