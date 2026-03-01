export function StrengthsSection() {
  const strengths = [
    {
      title: "専属マネージャーによる戦略サポート",
      image: "/Liveragencylp/strengths1.png",
    },
    {
      title: "個別分析×改善サポート",
      image: "/Liveragencylp/strengths2.png",
    },
    {
      title: "AIによるデータ戦略設計",
      image: "/Liveragencylp/strengths1.png",
    },
    {
      title: "配信中のAI支援",
      image: "/Liveragencylp/strengths2.png",
    },
    {
      title: "事務所からの案件紹介",
      image: "/Liveragencylp/strengths1.png",
    },
    {
      title: "目標ロードマップ設計",
      image: "/Liveragencylp/strengths2.png",
    },
  ];

  return (
    <section className="relative py-28 bg-[#071022] overflow-hidden">
      
      {/* ネオングリッド背景 */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-16">
          CoCo Lab.の
          <span className="text-cyan-400 drop-shadow-[0_0_15px_#22d3ee]">
            強み
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {strengths.map((item, index) => (
            <div
              key={index}
              className="bg-[#0f1b34] border border-cyan-400/40 rounded-xl p-6 text-center
                         shadow-[0_0_20px_rgba(34,211,238,0.4)]
                         hover:shadow-[0_0_40px_rgba(34,211,238,0.8)]
                         transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <p className="text-white text-lg">{item.title}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
