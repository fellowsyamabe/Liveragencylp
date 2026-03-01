export function RecruitSection() {
  const images = [
    "/Liveragencylp/recruit1.png",
    "/Liveragencylp/recruit2.png",
    "/Liveragencylp/recruit3.png",
    "/Liveragencylp/recruit4.png",
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          CoCo Labで
          <span className="text-cyan-400 drop-shadow-[0_0_15px_#22d3ee]">
            働こう
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {images.map((src, index) => (
            <div
              key={index}
              className="bg-[#0f1b34] border border-cyan-400/40 rounded-xl overflow-hidden
                         shadow-[0_0_20px_rgba(34,211,238,0.4)]
                         hover:shadow-[0_0_40px_rgba(34,211,238,0.8)]
                         transition-all duration-300"
            >
              <img
                src={src}
                alt="recruit"
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>

        <button
          className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-10 py-4 rounded-full
                     shadow-[0_0_20px_rgba(34,211,238,0.6)]
                     hover:shadow-[0_0_40px_rgba(34,211,238,1)]
                     transition-all duration-300"
        >
          今すぐ応募する
        </button>

      </div>
    </section>
  );
}
