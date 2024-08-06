"use client";
export default function HeroSection() {
  return (
    <div className="bg-accent items-center padded py-2 md:grid grid-cols-[500px_auto]">
      <div className="">
        <h1 className="text-white text-4xl font-black">
          Merhaba, Ben Fullstack Developer Özcan ARICAN
        </h1>
        <div className="mt-10 text-gray-200">
          23 yıllık web, 9 yıllık mobil uygulama geliştirme tecrübem ile yeni
          projelerde, ilk günkü heves ile çalışıyorum.
        </div>
        <div className="mb-12 hero-buttons mt-10 flex justify-between">
          <a href="/blog" className="bg-to-black bg-white">
            Yazılarım
          </a>
          <a href="/contact" className="bg-to-black bg-accent">
            İletişim
          </a>
        </div>
      </div>
      <img
        src="/images/heroimg.png"
        alt="Özcan ARICAN"
        className="w-full hidden md:block"
      />
    </div>
  );
}
