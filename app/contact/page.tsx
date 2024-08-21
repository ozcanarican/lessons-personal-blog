"use client";

import { ActionSendMail } from "@/actions/ActionSendMail";
import { ChangeEvent, useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaYoutube } from "react-icons/fa";

export default function ContactPage() {
  const [data, setData] = useState({
    email: "",
    telefon: "",
    mesaj: "",
    isim: "",
  });
  const [sending, setSending] = useState(0);

  const handleEmail = async () => {
    setSending(1);
    await ActionSendMail(
      "me@ozcanarican.com",
      "site iletisim formu",
      `İsim: ${data.isim}\nİletişim:${data.email} - ${data.telefon}\n${data.mesaj}`,
    );
    setSending(2);
    console.log("gönderildi");
  };

  const handleChange = (e: ChangeEvent<any>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (sending == 2) {
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    }
  }, [sending]);

  return (
    <div className="padded mt-4 flex justify-center">
      <div className="reading-box w-full">
        {sending == 0 && (
          <>
            <h1 className="content-title">İletişim Formu</h1>
            <div className="flex justify-between items-center bg-slate-600 text-slate-50 mb-4  p-2 rounded">
              <div className="flex items-center gap-1">
                <FaEnvelope /> me@ozcanarican.com
              </div>
              <a href="https://youtube.com/@tazekod" target="_blank">
                <div className="flex items-center gap-1">
                  <FaYoutube /> @tazekod
                </div>
              </a>
            </div>
            <div className="border rounded p-2 bg-slate-50 shadow-sm px-4">
              <div className="font-bold text-gray-800 mt-1">
                E-mail Adresiniz
              </div>
              <input
                onChange={handleChange}
                value={data.email}
                type="email"
                name="email"
                placeholder="adim.soyadim@gmail.com"
                className="w-full"
              />
              <div className="font-bold text-gray-800 mt-4">İsim Soyisim</div>
              <input
                type="text"
                onChange={handleChange}
                value={data.isim}
                name="isim"
                placeholder="Ahmet Yılmaz"
                className="w-full"
              />
              <div className="font-bold text-gray-800 mt-4">
                Telefon Numaranız
              </div>
              <input
                type="phone"
                onChange={handleChange}
                value={data.telefon}
                name="telefon"
                placeholder="90545xxxx"
                className="w-full"
              />
              <div className="font-bold text-gray-800 mt-4">
                İletmek istediğiniz mesaj
              </div>
              <textarea
                className="w-full"
                name="mesaj"
                onChange={handleChange}
                value={data.mesaj}
              />
              <div className="mt-3 flex justify-end">
                <button
                  className="duration-300 hover:bg-black bg-green-800 text-white p-2 px-6 rounded"
                  onClick={() => {
                    handleEmail();
                  }}
                >
                  Formu Gönder
                </button>
              </div>
            </div>
          </>
        )}
        {sending == 1 && (
          <div className="text-center text-green-600 text-xl">
            Mesajınız gönderiliyor. Lütfen bekleyiniz
          </div>
        )}
        {sending == 2 && (
          <div className="text-center">
            Mesajınız gönderildi. Ana sayfaya yönlendiriliyorsunuz
          </div>
        )}
      </div>
    </div>
  );
}
