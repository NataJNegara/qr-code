"use client";

import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";

const ScannerPage = () => {
  const [scannedQR, setScannedQR] = useState<string | null>(null);

  return (
    <div className="w-3xs h-64">
      <Scanner
        scanDelay={5000}
        onScan={(result: IDetectedBarcode[]) =>
          setScannedQR(result[0].rawValue)
        }
      />
      {scannedQR && <p>{scannedQR}</p>}
    </div>
  );
};

export default ScannerPage;
