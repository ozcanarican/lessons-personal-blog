"use client";
export default function HeroSection() {
  return (
    <div className="bg-accent items-end padded md:grid md:grid-cols-[400px_auto] lg:grid-cols-[500px_auto]">
      <div className="md:pb-12">
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
      <div className="flex justify-end">
        <img
          src="/images/heroimg.png"
          alt="Özcan ARICAN"
          className="w-full max-w-[700px] hidden md:block"
        />
      </div>
    </div>
  );
}
