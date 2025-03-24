"use client";

import { useState } from "react";
import QRCode from "react-qr-code";

export default function Home() {
  const [qrValue, setQrValue] = useState<string | null>(null);
  const [savedQR, setSavedQR] = useState<string | null>(null);

  const handleGenerateQR = () => {
    if (savedQR) return;

    const date = new Date().toISOString();
    const generatedValue = `${Math.random()
      .toString()
      .slice(2, 9)}-absensi-${date}`;

    console.log(generatedValue);
    setQrValue(generatedValue);
  };

  const handleSave = () => {
    if (savedQR) return;
    setSavedQR(qrValue);
    setQrValue(null);
  };

  return (
    <main className="max-w-7xl mx-auto my-8 border rounded-lg h-[calc(100vh-4rem)] p-8">
      <section className="flex flex-col gap-4">
        {!savedQR && (
          <button
            onClick={handleGenerateQR}
            className="bg-indigo-600 py-1 px-4 rounded-lg text-indigo-50 hover:bg-indigo-800 transition-all duration-200 self-start">
            Generate QR Code
          </button>
        )}
        <p>QR CODE : {qrValue}</p>
        {qrValue || savedQR ? (
          <div className="p-4 border-2 border-indigo-500 w-fit rounded-xl">
            <QRCode value={savedQR ? savedQR : qrValue!} fgColor="#3b5bdb" />
          </div>
        ) : (
          <div className="p-4 border-2 border-indigo-500 rounded-xl w-3xs h-64 flex items-center justify-center">
            <p className="text-lg font-semibold text-indigo-500">
              Generate QR CODE
            </p>
          </div>
        )}

        {qrValue && (
          <div>
            <button
              onClick={handleSave}
              className="bg-indigo-600 py-1 px-4 rounded-lg text-indigo-50 hover:bg-indigo-800 transition-all duration-200 self-start">
              Simpan QR Code
            </button>
          </div>
        )}
        <p>Saved QR: {savedQR}</p>
      </section>
    </main>
  );
}
