"use client";

import { Scanner } from "@yudiel/react-qr-scanner";
// import { useState } from "react";

const ScannerPage = () => {
  //   const [scannedQR, setScannedQR] = useState<string | null>(null);

  return (
    <div className="w-3xs h-64">
      <Scanner onScan={(result) => console.log(result)} />
      {/* {scannedQR && <p>{scannedQR}</p>} */}
    </div>
  );
};

export default ScannerPage;
